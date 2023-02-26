# Loader
## 概念
Loader 是一个 node 的模块，简单的说它应该就是一个函数。可以命名为transform， 因为它的主要功能就是转变代码，转变资源。
> loader 是导出为一个函数的 node 模块。该函数在 loader 转换资源的时候调用。给定的函数将调用 Loader API，并通过 this 上下文访问。
### 第一个loader
```
module.export = (content, sourcemap, meta) => {
    return `${content} ----- hello loader`;
}
```
**content**, 它就是你的需要编译文件的源码（string），或者是一个二进制文件(buffer);

**sourcemap** 是  可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据

**meta** 是任意数据，一般传入AST树