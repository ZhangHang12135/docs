# node相关问题
1. 开发依赖和生产依赖有什么区别？
```
**对于前端项目，没有任何区别**

因为我们需要的只是最后的产物。不需要关心他是开发依赖还是生产依赖
```


2. 本地debugger ts代码
```
安装vscode 插件 Typescript Debugger, 直接按F5 选择ts-node即可

**注意：需要使用npm 本地安装ts-node， yarn3会报错找不到路径**
```

3. node 浏览器调试 文件
```sh
# 这个其实就是node 运行
node --inspect-brk ./node_modules/webpack-cli/bin/cli.js
node --inspect-brk ./a.js
```
