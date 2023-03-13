# Plugin

## 概念
webpack 对外暴露了很多的hooks方法，你可以开发插件，在指定的生命周期中来完成你想要的功能.它是loader 的升级版，可以贯穿全部的webpack 流程。

> 插件是 webpack 生态的关键部分， 它为社区用户提供了一种强有力的方式来直接触及 webpack 的编译过程(compilation process)。 插件能够 hook 到每一个编译(compilation)中发出的关键事件中。 在编译的每个阶段中，插件都拥有对 compiler 对象的完全访问能力， 并且在合适的时机，还可以访问当前的 compilation 对象。

> webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。webpack 通过 Tapable 来组织这条复杂的生产线。 webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。 webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。 ——「深入浅出 Webpack」

## Tapable

Tapable 为 webpack 提供了统一的插件接口（钩子）类型定义，它是 webpack 的核心功能库。

它对外暴露了 tap，tapAsync 和 tapPromise 等方法， 插件可以使用这些方法向 webpack 中注入自定义构建的步骤，这些步骤将在构建过程中触发。
[Tapable 源码分析](/源码/tappable)

## plugin 核心构建
### Compiler
Compiler 模块是 webpack 的主要引擎，它通过 [CLI](https://www.webpackjs.com/api/cli/) 或者 [Node API](https://www.webpackjs.com/api/node/) 传递的所有选项创建出一个 compilation 实例。 它扩展（extends）自 Tapable 类，用来注册和调用插件。 大多数面向用户的插件会首先在 Compiler 上注册。

在为 webpack 开发插件时，你可能需要知道每个钩子函数是在哪里调用的。想要了解这些内容，请在 webpack 源码中搜索 hooks.\< hook name \>.call。

compiler 对象中保存着完整的 Webpack 环境配置，每次启动 webpack 构建时它都是一个独一无二，仅仅会创建一次的对象。

这个对象会在首次启动 Webpack 时创建，我们可以通过 compiler 对象上访问到 Webapck 的主环境配置，比如 loader 、 plugin 等等配置信息。

[查看更多Compiler hooks](https://webpack.docschina.org/api/compiler-hooks/)

### compailation

Compilation 模块会被 Compiler 用来创建新的 compilation 对象（或新的 build 对象）。 compilation 实例能够访问所有的模块和它们的依赖（大部分是循环依赖）。 它会对应用程序的依赖图中所有模块， 进行字面上的编译(literal compilation)。 在编译阶段，模块会被加载(load)、封存(seal)、优化(optimize)、 分块(chunk)、哈希(hash)和重新创建(restore)。

compilation 对象代表一次资源的构建，compilation 实例能够访问所有的模块和它们的依赖。

[查看更多compailation hooks](https://webpack.docschina.org/api/compiler-hooks/)

### 生命周期简图

![plugin](/webpack/plugin.jpg)

## 第一个插件
plugin 是一个模块，一个类，你需要定义apply 方法，它会被 webpack compiler 调用。可以理解为，这些插件实际上就是执行了apply, 给webpack 的不同阶段绑定了一些函数。可以类比vue 组件的生命周期
```ts
import type { Compiler } from 'webpack';

class Bplugin {
    apply(compiler: Compiler) {
        // tap 就是绑定自定义事件，第一个参数就是事件的name,
        compiler.hooks.compilation.tap('b-plugin', (compilation) => {
            console.log('这里是b-plugin插件');
        });
    }
}

export default Bplugin;
```

## 造轮子
### BannerWebpackPlugin
给打包文件添加注释
[官方轮子](https://github.com/webpack/webpack/blob/main/lib/BannerPlugin.js)
```ts
// BannerWebpackPlugin.ts
import type { Compiler } from 'webpack';
// webpack-sources 是 webpack官方提供的操作源码的库，是cjs的，还需要安装@types/webpack-sources才能引入
import { ConcatSource } from 'webpack-sources';
interface Options {
    name: string;
}

class BannerWebpackPlugin {
    constructor(public options: Options){};
    apply(compiler: Compiler) {
        compiler.hooks.compilation.tap('BannerPlugin', compilation => {
            compilation.hooks.processAssets.tap('BannerPlugin', () => {
                compilation.chunks.forEach(chunk => {
                    chunk.files.forEach(file => {
                        // 这里的old 是webpack 的Source 但是返回值是webpack-source 的ConcatSource ,两者的Source 不一致。尽管属性一样，但也只能忽略ts校验
                        //@ts-ignore
                        compilation.updateAsset(file, old => {
                            //@ts-ignore
                            return new ConcatSource(`/*\n*${this.options.name}\n*/\n`, old);
                        })
                    })
                })
            });
        })
    }
}
export default BannerWebpackPlugin;

```
对于开发模式，你可以直接使用, 但是如果是生产环境，你会发现自己的注释一直没产生（整个问题困扰我一个晚上）。后来想是因为webpack 的其他插件进行了代码的压缩混淆。

webpack 内置了TerserWebpackPlugin。默认情况会删除注释，但是有一部分注释会逃逸，并且[输出到新的文件中](https://www.webpackjs.com/plugins/terser-webpack-plugin/#extractcomments)。

**还需要注意，webpack 存在缓存，你需要清除dist才会有新的变化**

你需要自己配置terserwebpackplugin,像下面那样：
```ts
// webpack,config.js
import BannerWebpackPlugin from './myplugin/BannerWebpackPlugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
module.exports = {
    mode: 'production',
    entry: './index.ts',
    output: {
        clean: true,
        filename: '[name].[fullhash:8].js',
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        // 保留所有注释
                        comments: 'all'
                    },
                },
                // 禁用注释剥离能力
                 extractComments: false,
            })
        ],
    },
    plugins: [
        new BannerWebpackPlugin({name: 'hahah '}),
    ],
}
```