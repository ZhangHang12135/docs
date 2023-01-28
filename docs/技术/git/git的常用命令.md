# git 的常用命令
## 前置配置
### git config
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
### git help
获取命令帮助
```
git help <verb>
** 例如 你想要知道 config 的相关命令
git help config
```

### git init
初始化git 仓库，就是在当前目录创建 .git 文件夹

### git clone
克隆远程仓库
```
git clone xxx
```
## 开发中的命令
### git status
查看文件处于什么状态

新添加的未跟踪文件前面有 ?? 标记，新添加到暂存区中的文件前面有 A 标记，修改过的文件前面有 M 标记。 输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。
```
git status
git status -s // 简短输出
// 用例  //
$ git status -s
 M README
MM Rakefile
A  lib/git.rb
M  lib/simplegit.rb
?? LICENSE.txt
```

### git add
将文件放到暂存区，在工作原理中，我们讲过，暂存区就是一个文件，包含所有需要提交的文件名
```
git add xx // 单个文件或文件夹
git add .  // 全部更改
```

### git diff 
查看文件的哪些地方发生了变更
```
git diff 
// 比较的是工作目录当前文件和暂存区域快照之间的差异
git diff --staged
// 比对已暂存文件与最后一次提交的文件差异
```

### git commit 
提交
```
git commit 
// 这样会调用系统默认编辑器
git commit -m 'xxx'
// 一般都是这样用测，直接就可以提交说明
git commit -a
// 这样会把跟踪过的文件一起提交
git commit -am 'xxx'
// 一般这样用， 相当于 git add && git commit -m 'x' ,需要注意，新文件不会提交
```

### git rm
移除文件
```
git rm 
// 是从暂存区域移除,并连带从工作目录中删除指定的文件
git rm -f
// 全部删除，git也无法恢复
git rm --cached xx
// 从暂存区移除
```

### git mv
```
git mv file_from file_to

git mv README.md README
// 相当于运行
 mv README.md README
$ git rm README.md
$ git add README
```

## 查看历史记录
### git log
查看所有的提交commit,会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。
```
$ git log
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number


$ git log -p -2
// -p 是显示补丁差异， -2 是显示最近两条

$ git log --stat
// 总结性选项

$ git log --pretty=oneline
// online 会将提交放在一行展示
$ git log --pretty=format:"%h - %an, %ar : %s"
// format ，可以定制记录的显示格式
$ git log --pretty=format:"%h %s" --graph
// --graph 是显示分支合并历史
```
[详细的占位符看这里](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)

## 撤销操作
### git commit --amend
修补提交，一般在commit 之后需要再次修改文件的时候使用。只会产生一次commit记录。

### git reset
取消暂存文件, 这个命令已经不提倡了
```
git reset HEAD <file>
// 这个命令会将暂存文件修改为未暂存状态
```
### `git restore`
现在取消暂存或者丢弃修改，git 会提示使用 git restore(也就是git status 提示的命令)
```
git restore --staged <file>
// 取消暂存
git restore <file>
// 丢弃修改
```
### git checkout 
旧版本的丢弃修改
```
git checkout -- .
// 用于 一些测试demo 的丢弃，它是用最近的版本覆盖工作区
```