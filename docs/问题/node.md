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

4. node 项目 加载esm 依赖包
  a. 项目基础为ts, 使用ts 编写，无法解决问题。不论是将最后的产出变成commjs,还是esm ,都无法解决问题。
  b. ts-node 无法识别package.json 中type 为 module 的ts文件
  c. 使用mjs 解决问题
5. ts 项目如何获取json 文件。
```
// 如果是commonjs 写法，可以直接require动态引入
// 利用fs 读文件内容
fs.readFileSync(getSchemaPath(), 'utf-8')
```

6. babel 处理不了ts 文件
默认情况。babel只处理js文件，需要添加命令参数 --extensions ，指定扩展名
```
babel src --out-dir dist --extensions .ts
```
```
// .babelrc
{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ],
      "@babel/preset-typescript"
    ]
  }
```

7. tsc 命令处理不同配置文件
-p 或者 --project 可以指定tsconfig.json文件，但是无法处理单一文件，只能整个项目一起编译
创建一个tsconfig.build.json 文件，用于打包编译
```
tsc --p tsconfig.build.json
```
