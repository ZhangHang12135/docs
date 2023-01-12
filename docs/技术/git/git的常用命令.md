# git 的常用命令

## git config
设置git的配置文件 
_注意：带 --gloabl 就是全局设置，不带就是当前目录设置_
**查看所有配置**
```
git config --list --show-origin
```
**用户信息**
```sh
** 修改用户名
git config --global user.name "your username"
** 修改邮箱
git config --global user.email "your email"
```
**文本编辑器**
如果你想使用其它文本编辑器，window上 xxx 为 可执行文件的完整路径
```
git config --global core.editor xxx
```
## git help
获取命令帮助
```
git help <verb>
** 例如 你想要知道 config 的相关命令
git help config
```

## git init
初始化git 仓库，就是在当前目录创建 .git 文件夹

## git clone
克隆远程仓库
```
git clone xxx
```
