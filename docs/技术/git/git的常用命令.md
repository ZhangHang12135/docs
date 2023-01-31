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

**换行符**
windows的换行和mac不一样，你可以这样设置, 来关掉自动换行
```
$ git config --global core.autocrlf false
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
### git cherry-pick
挑选一个commit 放到当前分支
```
git cherry-pick <commitID || branchName>
// 如果是分支名，就是拿最新的提交
```

### git reflog
查看HEAD指向历史

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
git reset HEAD^
// 回退到上一个版本
git reset --soft HEAD^
// 回退到 commit之前，add之后的状态
git reset --mixed HEAD^
// --mixed 是默认值，回退到add 之前的状态
git reset --head HEAD^
// 这个是危险操作，会回退工作区
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

## 远程仓库相关
### git remote
查看远程仓库
```
git remote 
// 查看远程仓库
git remote add <shortname> <url>
$ git remote add pb https://github.com/paulboone/ticgit
// 添加一个新的远程仓库

git remote show origin
// 查看远程仓库信息
$ git remote rename pb paul
修改一个远程仓库的简写名
$ git remote remove <name>
// 删除一个远程仓库
```
你至少可以看到origin, 这是git给的默认名字。

### git fetch
这个命令会访问远程仓库，从中拉取所有你还没有的数据

### git pull
自动抓取后合并该远程分支到当前分支

### git push
```
git push <remote> <branch>
默认情况
git push  === git push origin master
```

## git 标签
`轻量标签` 很像一个不会改变的分支——它只是某个特定提交的引用

`附注标签`是存储在 Git 数据库中的一个完整对象
```
git tag
// 列出所有标签
git tag -l "v1.8"
// 列出1.8相关的
git tag 1.0
// 打上了轻量标签
git tag -a 1.0 -m "first tag"
// 附注标签
$ git show v1.4
// 查看标签信息
git tag -a v1.2 9fceb02
// 后期打标签，后面是hash值
git push origin --tags
// 同步标签到远程仓库
$ git tag -d v1.4-lw
// 删除标签Deleted tag 'v1.4-lw' (was e7d5add)
```
## git 别名
```
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
```
## git 分支

### git branch
git 的分支就是一个可以移动的新的指针， 有一个HEAD指针指向的就是当前本地分支
```
git branch testing
// 创建分支
git branch -d testing
// 删除分支
git branch
// 查看所有分支
git branch --merged
// 查看已经合并到当前分支的分支
git branch --no-merged
// 查看所有包含未合并工作的分支
```
### git switch || git checkout
两者都可以切换分支，前者是新出的
```
git switch testing
git checkout testing
// 如果本地没有testing 分支，远程有的话，会自动创建一个本地分支
git checkout -b testingA
// 带有-b 分支可以创建 和 切换
```

### git merge
合并分支
```
git merge testing
// 合并 testing 分支到当前分支
```

### `git rebase`
[变基操作](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)
,这是一个很危险的操作

它的原理是首先找到这两个分支（即当前分支 experiment、变基操作的目标基底分支 master） 的最近共同祖先 C2，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件， 然后将当前分支指向目标基底 C3, 最后以此将之前另存为临时文件的修改依序应用
```
git checkout experiment
git rebase master
```
注意： 对于变基，是保持线性历史的手段，但是它会导致实际的提交偏差。变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。

```
$ git rebase --onto master server client
// 选中在 client 分支里但不在 server 分支里的修改（即 C8 和 C9），将它们在 master 分支上重放
```

## 小符号

### 祖先引用 ^ 
^ 会被解析为上一个提交

~ 也可以理解为父提交

HEAD~ === HEAD^

**但是  ^ 后面添加一个数字来指明想要 哪一个 父提交，HEAD^2为 合并提交的第二父提交，并不是父提交的父提交**
```
git show HEAD^
// 显示上一个提交
git reset HEAD^
// 回退到上一个版本
git reset HEAD^^ || git reset HEAD~2
// 回退到上两个版本
```

### 提交区间
```
git log master..experiment
// 查看 experiment 分支中还有哪些提交尚未被合并入 master 分支

$ git log origin/master..HEAD
// 这个命令会输出在你当前分支中而不在远程 origin 中的提交

$ git log master...experiment
// master 或者 experiment 中包含的但不是两者共有的提交，你可以执行：
```

## 小工具

### 交互暂存 git add -i
[详细的看这里](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%9A%82%E5%AD%98)
```
git add -i
// 会进入暂存的交互界面
*** Commands ***
  1: status	  2: update	  3: revert	  4: add untracked
  5: patch	  6: diff	  7: quit	  8: help
// 5 就是打补丁，可以拆分一个文件的不同提交
```

### 贮藏 git stash

贮藏（stash）会处理工作目录的脏的状态——即跟踪文件的修改与暂存的改动——然后将未完成的修改保存到一个栈上， 而你可以在任何时候重新应用这些改动（甚至在不同的分支上）

```
git stash || git stash push
// 推送你的修改到栈上， 正常只会包含暂存的，已修改的，跟踪文件
git stash list
// 查看你的所有stash
git stash apply
// 将栈顶的拿出来（也就是你最近的stash）
git stash apply stash@{1}
// 拿到第二个
git stash pop
// 拿出来之后，就删掉
git stash -a
// 贮藏 所有文件，包含没有被跟踪的，忽略的文件
git stash branch testchange
// 会将其stash 放到新的分支上，而不是当前分支
git stash clear
// 清空贮藏栈
```

### 清理工作目录 git clean
`谨慎使用`
```
git clean
// 移除没有忽略的未跟踪文件
git clean -f -d 
// 移除工作目录中所有未追踪的文件以及空的子目录
git ckear -n
// 添加-n, 它将告诉你会删除什么
```

### 搜索
```
git grep -n gmtime_r
// 传递 -n 或 --line-number 选项数来输出 Git 找到的匹配行的行号

```

## 重写历史

### 修改最后一次提交 git commit
```
git commit --amend
// 修改最后一次提交，一般用于cr之后的修改
git commit --amend --no-edit
// 不用再次编辑commit 信息
```

### 修改多个提交 git rebase
```
$ git rebase -i HEAD~3
pick f7f3f6d changed my name a bit
pick 310154e updated README formatting and added blame
pick a5f4a0d added cat-file
// 修改最近3次的提交
// 需要注意的是，这个是倒序排列的，最下面的是你最新的提交
// 你可以将 pick 修改为 squash, 保留最下面的那个，这样3个commit 就会合并为一个commit
```
### 移除文件
从每一个提交中移除一个文件
```
git filter-branch --tree-filter 'rm -f passwords.txt' HEAD
// --tree-filter 选项在检出项目的每一个提交后运行指定的命令然后重新提交结果
```

### 合并冲突小技巧
**忽略空白**

```
git merge -Xignore-space-change whitespace
// 使用 -Xignore-all-space 或 -Xignore-space-change 选项。 第一个选项在比较行时 完全忽略 空白修改，第二个选项将一个空白符与多个连续的空白字符视作等价的。
```

**撤销合并**
```
git reset --hard HEAD~
// 这个就是直接回退
git revert -m 1 HEAD
// 撤销上一次合并， 以当前分支为主
// 1 是以当前分支为主， 2是合入的分支
// 这个会产生一个新的commit
// 这样有一个缺陷，就是无法将之前合入的再合入，只能再次revert当前才行
```

**虚假合并**
```
git merge -s ours xxx
// 合并后与合并前我们的分支并没有任何区别。
//  例如，假设你有一个分叉的 release 分支并且在上面做了一些你想要在未来某个时候合并回 master 的工作。 与此同时 master 分支上的某些 bugfix 需要向后移植回 release 分支。 你可以合并 bugfix 分支进入 release 分支同时也 merge -s ours 合并进入你的 master 分支 （即使那个修复已经在那儿了）这样当你之后再次合并 release 分支时，就不会有来自 bugfix 的冲突。
```

### 查看行提交
```
git blame -L 5,8 a.js
// 查看a.js文件5到8行的提交记录
// 正常就是用vscode插件GitLens
```

### `打包`
bundle 命令会将 git push 命令所传输的所有内容打包成一个二进制文件， 你可以将这个文件通过邮件或者闪存传给其他人，然后解包到其他的仓库中。
```
git bundle create repo.bundle HEAD master
// 会生成一个repo.bundle 文件
// 该文件包含了所有重建该仓库 master 分支所需的数据。 在使用 bundle 命令时，你需要列出所有你希望打包的引用或者提交的区间
$ git clone repo.bundle repo
// 可以克隆出一个repo目录
```

