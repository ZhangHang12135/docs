# Loader
## 概念
Loader 是一个 node 的模块，简单的说它应该就是一个函数。可以命名为transform， 因为它的主要功能就是转变代码，转变资源。
> loader 是导出为一个函数的 node 模块。该函数在 loader 转换资源的时候调用。给定的函数将调用 Loader API，并通过 this 上下文访问。

> [loader runner](https://github.com/webpack/loader-runner) 会调用此函数，然后将上一个 loader 产生的结果或者资源文件传入进去。函数中的 this 作为上下文会被 webpack 填充，并且 loader runner 中包含一些实用的方法，比如可以使 loader 调用方式变为异步，或者获取 query 参数。
## 第一个loader
```js
module.export = (content, sourcemap, meta) => {
    return `${content} ----- hello loader`;
}
```
```js
// webpack 配置
module.exports = {
    mode: 'development',
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].[contenthash:8].js',
        clean: true,
    },
    module: {
        rules: [{
            test: /\.js$/i,
            use: ['a-loader'],
        }],
    },
    // 这是设置loader 的解析目录
    resolveLoader: {
        modules: [
            'node_modules',
            'loaders'
        ]
    }
}
```
**content**, 它就是你的需要编译文件的源码（string），或者是一个二进制文件(buffer);

**sourcemap** 是  可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据

**meta** 是其他loader传入的任意数据，一般传入AST树

## loader 的分类
关于分类，还有一种，就是pre, normal, inline, post。 可以理解为执行顺序。一般我们写的都是normal。可以根据 [Rule.enforce](https://www.webpackjs.com/configuration/module#ruleenforce) 来设置loader 的执行
### 同步loader
也就是我们上面所写的loader, 实际应用中很少用到这样的。

因为node 是单线程，同步调用是非常影响整体耗时的，所以一般情况会使用异步loader

### 异步loader
需要使用this.async 去告诉 loader-runner 这个 loader 将会异步地回调。返回 this.callback。
```js
const syncLoader = function(content, map, meta) {
    // 注意，this 是webpack暴露的实例对象
    const callback = this.async();
    console.log('---------- sync loader --------');
    // do some thing
    setTimeout(() => {
        callback(null, content, map, meta);
    }, 1000);
}
module.exports = syncLoader;
```

### raw loader
这个是处理资源情况，比如图片，字体之类的资源文件，它会将文件转化为 UTF-8 的字符串，然后传给loader.

通过设置raw 为true, loader 可以接收原始的 buffer 。

```js
const rawLoader = function(content) {
    console.log('--------- raw-loader ----------');
    console.log(content);
    return content;
};
module.exports.raw = true;
module.exports = rawLoader;
```

### pitching loader
> loader 总是 从右到左被调用。有些情况下，loader 只关心 request 后面的 元数据(metadata)，并且忽略前一个 loader 的结果。在实际（从右到左）执行 loader 之前，会先 从左到右 调用 loader 上的 pitch 方法。
```js
const pitchingLoader = function(content, map, meta) {
    console.log('--------- picth loader -------');
    return content;
}
module.exports = pitchingLoader;
module.exports.pitching = function (remainingRequest, precedingRequest, data) {
    console.log("do somethings");
  };
```
webpack 会先从左到右执行 loader 链中的每个 loader 上的 pitch 方法（如果有），然后再从右到左执行 loader 链中的每个 loader 上的普通 loader 方法。
![loader 正常调用链路](/webpack/loader1.png)
在这个过程中如果任何 pitch 有返回值，则 loader 链被阻断。webpack 会跳过后面所有的的 pitch 和 loader，直接进入上一个 loader 。
![loader 异常调用链路](/webpack/loader2.png)

## 造轮子
### clean-log-loader
清除js中的console.log

```js 
module.exports = function(content) {
    return content.replace(/console\.log\(.*\);?/g, '');
}
```

### file-loader
这个在webpack4很常用，webpack 5 之后，这个loader就已经内置了

这个我们就简单的写一个，导出文件到指定目录
```js
const loaderUtils = require('loader-utils');

const fileLoader = function(content) {
    const options = this.getOptions();
    console.log(options);
    const filename = loaderUtils.interpolateName(this, options.name + '.[hash].[ext]');
    this.emitFile(options.output + '/' + filename, content)
    return `export default '${filename}'`;
};

module.exports = fileLoader;
module.exports.raw = true;
```
```js
// rule
{
    test: /\.png$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'newtext',
                output: 'public'
            }
        }
]
```