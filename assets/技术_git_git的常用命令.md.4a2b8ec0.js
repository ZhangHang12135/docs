import{_ as s,c as a,o as n,d as l}from"./app.414188b6.js";const h=JSON.parse('{"title":"git 的常用命令","description":"","frontmatter":{},"headers":[{"level":2,"title":"前置配置","slug":"前置配置","link":"#前置配置","children":[{"level":3,"title":"git config","slug":"git-config","link":"#git-config","children":[]},{"level":3,"title":"git help","slug":"git-help","link":"#git-help","children":[]},{"level":3,"title":"git init","slug":"git-init","link":"#git-init","children":[]},{"level":3,"title":"git clone","slug":"git-clone","link":"#git-clone","children":[]}]},{"level":2,"title":"开发中的命令","slug":"开发中的命令","link":"#开发中的命令","children":[{"level":3,"title":"git status","slug":"git-status","link":"#git-status","children":[]},{"level":3,"title":"git add","slug":"git-add","link":"#git-add","children":[]},{"level":3,"title":"git diff","slug":"git-diff","link":"#git-diff","children":[]},{"level":3,"title":"git commit","slug":"git-commit","link":"#git-commit","children":[]},{"level":3,"title":"git cherry-pick","slug":"git-cherry-pick","link":"#git-cherry-pick","children":[]},{"level":3,"title":"git reflog","slug":"git-reflog","link":"#git-reflog","children":[]},{"level":3,"title":"git rm","slug":"git-rm","link":"#git-rm","children":[]},{"level":3,"title":"git mv","slug":"git-mv","link":"#git-mv","children":[]}]},{"level":2,"title":"查看历史记录","slug":"查看历史记录","link":"#查看历史记录","children":[{"level":3,"title":"git log","slug":"git-log","link":"#git-log","children":[]},{"level":3,"title":"git fsck --full","slug":"git-fsck-full","link":"#git-fsck-full","children":[]}]},{"level":2,"title":"撤销操作","slug":"撤销操作","link":"#撤销操作","children":[{"level":3,"title":"git commit --amend","slug":"git-commit-amend","link":"#git-commit-amend","children":[]},{"level":3,"title":"git reset","slug":"git-reset","link":"#git-reset","children":[]},{"level":3,"title":"git restore","slug":"git-restore","link":"#git-restore","children":[]},{"level":3,"title":"git checkout","slug":"git-checkout","link":"#git-checkout","children":[]}]},{"level":2,"title":"远程仓库相关","slug":"远程仓库相关","link":"#远程仓库相关","children":[{"level":3,"title":"git remote","slug":"git-remote","link":"#git-remote","children":[]},{"level":3,"title":"git fetch","slug":"git-fetch","link":"#git-fetch","children":[]},{"level":3,"title":"git pull","slug":"git-pull","link":"#git-pull","children":[]},{"level":3,"title":"git push","slug":"git-push","link":"#git-push","children":[]}]},{"level":2,"title":"git 标签","slug":"git-标签","link":"#git-标签","children":[]},{"level":2,"title":"git 别名","slug":"git-别名","link":"#git-别名","children":[]},{"level":2,"title":"git 分支","slug":"git-分支","link":"#git-分支","children":[{"level":3,"title":"git branch","slug":"git-branch","link":"#git-branch","children":[]},{"level":3,"title":"git switch || git checkout","slug":"git-switch-git-checkout","link":"#git-switch-git-checkout","children":[]},{"level":3,"title":"git merge","slug":"git-merge","link":"#git-merge","children":[]},{"level":3,"title":"git rebase","slug":"git-rebase","link":"#git-rebase","children":[]}]},{"level":2,"title":"小符号","slug":"小符号","link":"#小符号","children":[{"level":3,"title":"祖先引用 ^","slug":"祖先引用","link":"#祖先引用","children":[]},{"level":3,"title":"提交区间","slug":"提交区间","link":"#提交区间","children":[]}]},{"level":2,"title":"小工具","slug":"小工具","link":"#小工具","children":[{"level":3,"title":"交互暂存 git add -i","slug":"交互暂存-git-add-i","link":"#交互暂存-git-add-i","children":[]},{"level":3,"title":"贮藏 git stash","slug":"贮藏-git-stash","link":"#贮藏-git-stash","children":[]},{"level":3,"title":"清理工作目录 git clean","slug":"清理工作目录-git-clean","link":"#清理工作目录-git-clean","children":[]},{"level":3,"title":"搜索","slug":"搜索","link":"#搜索","children":[]}]},{"level":2,"title":"重写历史","slug":"重写历史","link":"#重写历史","children":[{"level":3,"title":"修改最后一次提交 git commit","slug":"修改最后一次提交-git-commit","link":"#修改最后一次提交-git-commit","children":[]},{"level":3,"title":"修改多个提交 git rebase","slug":"修改多个提交-git-rebase","link":"#修改多个提交-git-rebase","children":[]},{"level":3,"title":"移除文件","slug":"移除文件","link":"#移除文件","children":[]},{"level":3,"title":"合并冲突小技巧","slug":"合并冲突小技巧","link":"#合并冲突小技巧","children":[]},{"level":3,"title":"查看行提交","slug":"查看行提交","link":"#查看行提交","children":[]},{"level":3,"title":"打包","slug":"打包","link":"#打包","children":[]}]}],"relativePath":"技术/git/git的常用命令.md","lastUpdated":1678108029000}'),e={name:"技术/git/git的常用命令.md"},p=l(`<h1 id="git-的常用命令" tabindex="-1">git 的常用命令 <a class="header-anchor" href="#git-的常用命令" aria-hidden="true">#</a></h1><h2 id="前置配置" tabindex="-1">前置配置 <a class="header-anchor" href="#前置配置" aria-hidden="true">#</a></h2><h3 id="git-config" tabindex="-1">git config <a class="header-anchor" href="#git-config" aria-hidden="true">#</a></h3><p>设置git的配置文件 <em>注意：带 --gloabl 就是全局设置，不带就是当前目录设置</em><strong>查看所有配置</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --list --show-origin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>用户信息</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> 修改用户名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your username</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> 修改邮箱</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your email</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p><strong>文本编辑器</strong> 如果你想使用其它文本编辑器，window上 xxx 为 可执行文件的完整路径</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --global core.editor xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>换行符</strong> windows的换行和mac不一样，你可以这样设置, 来关掉自动换行</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ git config --global core.autocrlf false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-help" tabindex="-1">git help <a class="header-anchor" href="#git-help" aria-hidden="true">#</a></h3><p>获取命令帮助</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git help &lt;verb&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">** 例如 你想要知道 config 的相关命令</span></span>
<span class="line"><span style="color:#A6ACCD;">git help config</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-init" tabindex="-1">git init <a class="header-anchor" href="#git-init" aria-hidden="true">#</a></h3><p>初始化git 仓库，就是在当前目录创建 .git 文件夹</p><h3 id="git-clone" tabindex="-1">git clone <a class="header-anchor" href="#git-clone" aria-hidden="true">#</a></h3><p>克隆远程仓库</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="开发中的命令" tabindex="-1">开发中的命令 <a class="header-anchor" href="#开发中的命令" aria-hidden="true">#</a></h2><h3 id="git-status" tabindex="-1">git status <a class="header-anchor" href="#git-status" aria-hidden="true">#</a></h3><p>查看文件处于什么状态</p><p>新添加的未跟踪文件前面有 ?? 标记，新添加到暂存区中的文件前面有 A 标记，修改过的文件前面有 M 标记。 输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#A6ACCD;">git status -s // 简短输出</span></span>
<span class="line"><span style="color:#A6ACCD;">// 用例  //</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git status -s</span></span>
<span class="line"><span style="color:#A6ACCD;"> M README</span></span>
<span class="line"><span style="color:#A6ACCD;">MM Rakefile</span></span>
<span class="line"><span style="color:#A6ACCD;">A  lib/git.rb</span></span>
<span class="line"><span style="color:#A6ACCD;">M  lib/simplegit.rb</span></span>
<span class="line"><span style="color:#A6ACCD;">?? LICENSE.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-add" tabindex="-1">git add <a class="header-anchor" href="#git-add" aria-hidden="true">#</a></h3><p>将文件放到暂存区，在工作原理中，我们讲过，暂存区就是一个文件，包含所有需要提交的文件名</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git add xx // 单个文件或文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">git add .  // 全部更改</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-diff" tabindex="-1">git diff <a class="header-anchor" href="#git-diff" aria-hidden="true">#</a></h3><p>查看文件的哪些地方发生了变更</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">git diff </span></span>
<span class="line"><span style="color:#A6ACCD;">// 比较的是工作目录当前文件和暂存区域快照之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff --staged</span></span>
<span class="line"><span style="color:#A6ACCD;">// 比对已暂存文件与最后一次提交的文件差异</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-commit" tabindex="-1">git commit <a class="header-anchor" href="#git-commit" aria-hidden="true">#</a></h3><p>提交</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git commit </span></span>
<span class="line"><span style="color:#A6ACCD;">// 这样会调用系统默认编辑器</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &#39;xxx&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 一般都是这样用测，直接就可以提交说明</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -a</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这样会把跟踪过的文件一起提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -am &#39;xxx&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 一般这样用， 相当于 git add &amp;&amp; git commit -m &#39;x&#39; ,需要注意，新文件不会提交</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-cherry-pick" tabindex="-1">git cherry-pick <a class="header-anchor" href="#git-cherry-pick" aria-hidden="true">#</a></h3><p>挑选一个commit 放到当前分支</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git cherry-pick &lt;commitID || branchName&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果是分支名，就是拿最新的提交</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-reflog" tabindex="-1">git reflog <a class="header-anchor" href="#git-reflog" aria-hidden="true">#</a></h3><p>查看HEAD指向历史</p><h3 id="git-rm" tabindex="-1">git rm <a class="header-anchor" href="#git-rm" aria-hidden="true">#</a></h3><p>移除文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git rm </span></span>
<span class="line"><span style="color:#A6ACCD;">// 是从暂存区域移除,并连带从工作目录中删除指定的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm -f</span></span>
<span class="line"><span style="color:#A6ACCD;">// 全部删除，git也无法恢复</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm --cached xx</span></span>
<span class="line"><span style="color:#A6ACCD;">// 从暂存区移除</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-mv" tabindex="-1">git mv <a class="header-anchor" href="#git-mv" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git mv file_from file_to</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git mv README.md README</span></span>
<span class="line"><span style="color:#A6ACCD;">// 相当于运行</span></span>
<span class="line"><span style="color:#A6ACCD;"> mv README.md README</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add README</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="查看历史记录" tabindex="-1">查看历史记录 <a class="header-anchor" href="#查看历史记录" aria-hidden="true">#</a></h2><h3 id="git-log" tabindex="-1">git log <a class="header-anchor" href="#git-log" aria-hidden="true">#</a></h3><p>查看所有的提交commit,会列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ git log</span></span>
<span class="line"><span style="color:#A6ACCD;">commit ca82a6dff817ec66f44342007202690a93763949</span></span>
<span class="line"><span style="color:#A6ACCD;">Author: Scott Chacon &lt;schacon@gee-mail.com&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Date:   Mon Mar 17 21:52:11 2008 -0700</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    changed the version number</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -p -2</span></span>
<span class="line"><span style="color:#A6ACCD;">// -p 是显示补丁差异， -2 是显示最近两条</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --stat</span></span>
<span class="line"><span style="color:#A6ACCD;">// 总结性选项</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --pretty=oneline</span></span>
<span class="line"><span style="color:#A6ACCD;">// online 会将提交放在一行展示</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --pretty=format:&quot;%h - %an, %ar : %s&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">// format ，可以定制记录的显示格式</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --pretty=format:&quot;%h %s&quot; --graph</span></span>
<span class="line"><span style="color:#A6ACCD;">// --graph 是显示分支合并历史</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2" target="_blank" rel="noreferrer">详细的占位符看这里</a></p><h3 id="git-fsck-full" tabindex="-1"><code>git fsck --full</code> <a class="header-anchor" href="#git-fsck-full" aria-hidden="true">#</a></h3><p>查看数据库对象， 如果不小心删掉了分支，可以从这里看到游离的commit对象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ git fsck --full</span></span>
<span class="line"><span style="color:#A6ACCD;">Checking object directories: 100% (256/256), done.</span></span>
<span class="line"><span style="color:#A6ACCD;">Checking objects: 100% (18/18), done.</span></span>
<span class="line"><span style="color:#A6ACCD;">dangling blob d670460b4b4aece5915caf5c68d12f560a9fe3e4</span></span>
<span class="line"><span style="color:#A6ACCD;">dangling commit ab1afef80fac8e34258ff41fc1b867c702daa24b</span></span>
<span class="line"><span style="color:#A6ACCD;">dangling tree aea790b9a58f6cf6f2804eeac9f0abbe9631e4c9</span></span>
<span class="line"><span style="color:#A6ACCD;">dangling blob 7108f7ecb345ee9d0084193f147cdad4d2998293</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="撤销操作" tabindex="-1">撤销操作 <a class="header-anchor" href="#撤销操作" aria-hidden="true">#</a></h2><h3 id="git-commit-amend" tabindex="-1">git commit --amend <a class="header-anchor" href="#git-commit-amend" aria-hidden="true">#</a></h3><p>修补提交，一般在commit 之后需要再次修改文件的时候使用。只会产生一次commit记录。</p><h3 id="git-reset" tabindex="-1">git reset <a class="header-anchor" href="#git-reset" aria-hidden="true">#</a></h3><p>取消暂存文件, 这个命令已经不提倡了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git reset HEAD &lt;file&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这个命令会将暂存文件修改为未暂存状态</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset HEAD^</span></span>
<span class="line"><span style="color:#A6ACCD;">// 回退到上一个版本</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --soft HEAD^</span></span>
<span class="line"><span style="color:#A6ACCD;">// 回退到 commit之前，add之后的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --mixed HEAD^</span></span>
<span class="line"><span style="color:#A6ACCD;">// --mixed 是默认值，回退到add 之前的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --head HEAD^</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这个是危险操作，会回退工作区</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-restore" tabindex="-1"><code>git restore</code> <a class="header-anchor" href="#git-restore" aria-hidden="true">#</a></h3><p>现在取消暂存或者丢弃修改，git 会提示使用 git restore(也就是git status 提示的命令)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git restore --staged &lt;file&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 取消暂存</span></span>
<span class="line"><span style="color:#A6ACCD;">git restore &lt;file&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 丢弃修改</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-checkout" tabindex="-1">git checkout <a class="header-anchor" href="#git-checkout" aria-hidden="true">#</a></h3><p>旧版本的丢弃修改</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout -- .</span></span>
<span class="line"><span style="color:#A6ACCD;">// 用于 一些测试demo 的丢弃，它是用最近的版本覆盖工作区</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="远程仓库相关" tabindex="-1">远程仓库相关 <a class="header-anchor" href="#远程仓库相关" aria-hidden="true">#</a></h2><h3 id="git-remote" tabindex="-1">git remote <a class="header-anchor" href="#git-remote" aria-hidden="true">#</a></h3><p>查看远程仓库</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote </span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add &lt;shortname&gt; &lt;url&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote add pb https://github.com/paulboone/ticgit</span></span>
<span class="line"><span style="color:#A6ACCD;">// 添加一个新的远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git remote show origin</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看远程仓库信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote rename pb paul</span></span>
<span class="line"><span style="color:#A6ACCD;">修改一个远程仓库的简写名</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git remote remove &lt;name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 删除一个远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>你至少可以看到origin, 这是git给的默认名字。</p><h3 id="git-fetch" tabindex="-1">git fetch <a class="header-anchor" href="#git-fetch" aria-hidden="true">#</a></h3><p>这个命令会访问远程仓库，从中拉取所有你还没有的数据</p><h3 id="git-pull" tabindex="-1">git pull <a class="header-anchor" href="#git-pull" aria-hidden="true">#</a></h3><p>自动抓取后合并该远程分支到当前分支</p><h3 id="git-push" tabindex="-1">git push <a class="header-anchor" href="#git-push" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git push &lt;remote&gt; &lt;branch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">默认情况</span></span>
<span class="line"><span style="color:#A6ACCD;">git push  === git push origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="git-标签" tabindex="-1">git 标签 <a class="header-anchor" href="#git-标签" aria-hidden="true">#</a></h2><p><code>轻量标签</code> 很像一个不会改变的分支——它只是某个特定提交的引用</p><p><code>附注标签</code>是存储在 Git 数据库中的一个完整对象</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git tag</span></span>
<span class="line"><span style="color:#A6ACCD;">// 列出所有标签</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -l &quot;v1.8&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 列出1.8相关的</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag 1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">// 打上了轻量标签</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -a 1.0 -m &quot;first tag&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 附注标签</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show v1.4</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看标签信息</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -a v1.2 9fceb02</span></span>
<span class="line"><span style="color:#A6ACCD;">// 后期打标签，后面是hash值</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin --tags</span></span>
<span class="line"><span style="color:#A6ACCD;">// 同步标签到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag -d v1.4-lw</span></span>
<span class="line"><span style="color:#A6ACCD;">// 删除标签Deleted tag &#39;v1.4-lw&#39; (was e7d5add)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="git-别名" tabindex="-1">git 别名 <a class="header-anchor" href="#git-别名" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.co</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.br</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.ci</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.st</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置cr别名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要注意，如果需要执行脚本，需要前面带有 ! </span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.cr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">!git push origin HEAD:refs/for/$(git branch --show-current)</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="git-分支" tabindex="-1">git 分支 <a class="header-anchor" href="#git-分支" aria-hidden="true">#</a></h2><h3 id="git-branch" tabindex="-1">git branch <a class="header-anchor" href="#git-branch" aria-hidden="true">#</a></h3><p>git 的分支就是一个可以移动的新的指针， 有一个HEAD指针指向的就是当前本地分支</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git branch testing</span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d testing</span></span>
<span class="line"><span style="color:#A6ACCD;">// 删除分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看所有分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --merged</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看已经合并到当前分支的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --no-merged</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看所有包含未合并工作的分支</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-switch-git-checkout" tabindex="-1">git switch || git checkout <a class="header-anchor" href="#git-switch-git-checkout" aria-hidden="true">#</a></h3><p>两者都可以切换分支，前者是新出的</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git switch testing</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout testing</span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果本地没有testing 分支，远程有的话，会自动创建一个本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b testingA</span></span>
<span class="line"><span style="color:#A6ACCD;">// 带有-b 分支可以创建 和 切换</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-merge" tabindex="-1">git merge <a class="header-anchor" href="#git-merge" aria-hidden="true">#</a></h3><p>合并分支</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git merge testing</span></span>
<span class="line"><span style="color:#A6ACCD;">// 合并 testing 分支到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="git-rebase" tabindex="-1"><code>git rebase</code> <a class="header-anchor" href="#git-rebase" aria-hidden="true">#</a></h3><p><a href="https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA" target="_blank" rel="noreferrer">变基操作</a> 这是一个很危险的操作</p><p>它的原理是首先找到这两个分支（即当前分支 experiment、变基操作的目标基底分支 master） 的最近共同祖先 C2，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件， 然后将当前分支指向目标基底 C3, 最后以此将之前另存为临时文件的修改依序应用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout experiment</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>注意： 对于变基，是保持线性历史的手段，但是它会导致实际的提交偏差。变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ git rebase --onto master server client</span></span>
<span class="line"><span style="color:#A6ACCD;">// 选中在 client 分支里但不在 server 分支里的修改（即 C8 和 C9），将它们在 master 分支上重放</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="小符号" tabindex="-1">小符号 <a class="header-anchor" href="#小符号" aria-hidden="true">#</a></h2><h3 id="祖先引用" tabindex="-1">祖先引用 ^ <a class="header-anchor" href="#祖先引用" aria-hidden="true">#</a></h3><p>^ 会被解析为上一个提交</p><p>~ 也可以理解为父提交</p><p>HEAD~ === HEAD^</p><p><strong>但是 ^ 后面添加一个数字来指明想要 哪一个 父提交，HEAD^2为 合并提交的第二父提交，并不是父提交的父提交</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git show HEAD^</span></span>
<span class="line"><span style="color:#A6ACCD;">// 显示上一个提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset HEAD^</span></span>
<span class="line"><span style="color:#A6ACCD;">// 回退到上一个版本</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset HEAD^^ || git reset HEAD~2</span></span>
<span class="line"><span style="color:#A6ACCD;">// 回退到上两个版本</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="提交区间" tabindex="-1">提交区间 <a class="header-anchor" href="#提交区间" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git log master..experiment</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看 experiment 分支中还有哪些提交尚未被合并入 master 分支</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log origin/master..HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这个命令会输出在你当前分支中而不在远程 origin 中的提交</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log master...experiment</span></span>
<span class="line"><span style="color:#A6ACCD;">// master 或者 experiment 中包含的但不是两者共有的提交，你可以执行：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="小工具" tabindex="-1">小工具 <a class="header-anchor" href="#小工具" aria-hidden="true">#</a></h2><h3 id="交互暂存-git-add-i" tabindex="-1">交互暂存 git add -i <a class="header-anchor" href="#交互暂存-git-add-i" aria-hidden="true">#</a></h3><p><a href="https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%9A%82%E5%AD%98" target="_blank" rel="noreferrer">详细的看这里</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">git add -i</span></span>
<span class="line"><span style="color:#A6ACCD;">// 会进入暂存的交互界面</span></span>
<span class="line"><span style="color:#A6ACCD;">*** Commands ***</span></span>
<span class="line"><span style="color:#A6ACCD;">  1: status	  2: update	  3: revert	  4: add untracked</span></span>
<span class="line"><span style="color:#A6ACCD;">  5: patch	  6: diff	  7: quit	  8: help</span></span>
<span class="line"><span style="color:#A6ACCD;">// 5 就是打补丁，可以拆分一个文件的不同提交</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="贮藏-git-stash" tabindex="-1">贮藏 git stash <a class="header-anchor" href="#贮藏-git-stash" aria-hidden="true">#</a></h3><p>贮藏（stash）会处理工作目录的脏的状态——即跟踪文件的修改与暂存的改动——然后将未完成的修改保存到一个栈上， 而你可以在任何时候重新应用这些改动（甚至在不同的分支上）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git stash || git stash push</span></span>
<span class="line"><span style="color:#A6ACCD;">// 推送你的修改到栈上， 正常只会包含暂存的，已修改的，跟踪文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash list</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看你的所有stash</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash apply</span></span>
<span class="line"><span style="color:#A6ACCD;">// 将栈顶的拿出来（也就是你最近的stash）</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash apply stash@{1}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 拿到第二个</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash pop</span></span>
<span class="line"><span style="color:#A6ACCD;">// 拿出来之后，就删掉</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash -a</span></span>
<span class="line"><span style="color:#A6ACCD;">// 贮藏 所有文件，包含没有被跟踪的，忽略的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash branch testchange</span></span>
<span class="line"><span style="color:#A6ACCD;">// 会将其stash 放到新的分支上，而不是当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash clear</span></span>
<span class="line"><span style="color:#A6ACCD;">// 清空贮藏栈</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="清理工作目录-git-clean" tabindex="-1">清理工作目录 git clean <a class="header-anchor" href="#清理工作目录-git-clean" aria-hidden="true">#</a></h3><p><code>谨慎使用</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clean</span></span>
<span class="line"><span style="color:#A6ACCD;">// 移除没有忽略的未跟踪文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git clean -f -d </span></span>
<span class="line"><span style="color:#A6ACCD;">// 移除工作目录中所有未追踪的文件以及空的子目录</span></span>
<span class="line"><span style="color:#A6ACCD;">git ckear -n</span></span>
<span class="line"><span style="color:#A6ACCD;">// 添加-n, 它将告诉你会删除什么</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="搜索" tabindex="-1">搜索 <a class="header-anchor" href="#搜索" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git grep -n gmtime_r</span></span>
<span class="line"><span style="color:#A6ACCD;">// 传递 -n 或 --line-number 选项数来输出 Git 找到的匹配行的行号</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="重写历史" tabindex="-1">重写历史 <a class="header-anchor" href="#重写历史" aria-hidden="true">#</a></h2><h3 id="修改最后一次提交-git-commit" tabindex="-1">修改最后一次提交 git commit <a class="header-anchor" href="#修改最后一次提交-git-commit" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git commit --amend</span></span>
<span class="line"><span style="color:#A6ACCD;">// 修改最后一次提交，一般用于cr之后的修改</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend --no-edit</span></span>
<span class="line"><span style="color:#A6ACCD;">// 不用再次编辑commit 信息</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="修改多个提交-git-rebase" tabindex="-1">修改多个提交 git rebase <a class="header-anchor" href="#修改多个提交-git-rebase" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ git rebase -i HEAD~3</span></span>
<span class="line"><span style="color:#A6ACCD;">pick f7f3f6d changed my name a bit</span></span>
<span class="line"><span style="color:#A6ACCD;">pick 310154e updated README formatting and added blame</span></span>
<span class="line"><span style="color:#A6ACCD;">pick a5f4a0d added cat-file</span></span>
<span class="line"><span style="color:#A6ACCD;">// 修改最近3次的提交</span></span>
<span class="line"><span style="color:#A6ACCD;">// 需要注意的是，这个是倒序排列的，最下面的是你最新的提交</span></span>
<span class="line"><span style="color:#A6ACCD;">// 你可以将 pick 修改为 squash, 保留最下面的那个，这样3个commit 就会合并为一个commit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="移除文件" tabindex="-1">移除文件 <a class="header-anchor" href="#移除文件" aria-hidden="true">#</a></h3><p>从每一个提交中移除一个文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git filter-branch --tree-filter &#39;rm -f passwords.txt&#39; HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;">// --tree-filter 选项在检出项目的每一个提交后运行指定的命令然后重新提交结果</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="合并冲突小技巧" tabindex="-1">合并冲突小技巧 <a class="header-anchor" href="#合并冲突小技巧" aria-hidden="true">#</a></h3><p><strong>忽略空白</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git merge -Xignore-space-change whitespace</span></span>
<span class="line"><span style="color:#A6ACCD;">// 使用 -Xignore-all-space 或 -Xignore-space-change 选项。 第一个选项在比较行时 完全忽略 空白修改，第二个选项将一个空白符与多个连续的空白字符视作等价的。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>撤销合并</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD~</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这个就是直接回退</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert -m 1 HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;">// 撤销上一次合并， 以当前分支为主</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1 是以当前分支为主， 2是合入的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这个会产生一个新的commit</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这样有一个缺陷，就是无法将之前合入的再合入，只能再次revert当前才行</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>虚假合并</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git merge -s ours xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">// 合并后与合并前我们的分支并没有任何区别。</span></span>
<span class="line"><span style="color:#A6ACCD;">//  例如，假设你有一个分叉的 release 分支并且在上面做了一些你想要在未来某个时候合并回 master 的工作。 与此同时 master 分支上的某些 bugfix 需要向后移植回 release 分支。 你可以合并 bugfix 分支进入 release 分支同时也 merge -s ours 合并进入你的 master 分支 （即使那个修复已经在那儿了）这样当你之后再次合并 release 分支时，就不会有来自 bugfix 的冲突。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="查看行提交" tabindex="-1">查看行提交 <a class="header-anchor" href="#查看行提交" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git blame -L 5,8 a.js</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看a.js文件5到8行的提交记录</span></span>
<span class="line"><span style="color:#A6ACCD;">// 正常就是用vscode插件GitLens</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="打包" tabindex="-1"><code>打包</code> <a class="header-anchor" href="#打包" aria-hidden="true">#</a></h3><p>bundle 命令会将 git push 命令所传输的所有内容打包成一个二进制文件， 你可以将这个文件通过邮件或者闪存传给其他人，然后解包到其他的仓库中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git bundle create repo.bundle HEAD master</span></span>
<span class="line"><span style="color:#A6ACCD;">// 会生成一个repo.bundle 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">// 该文件包含了所有重建该仓库 master 分支所需的数据。 在使用 bundle 命令时，你需要列出所有你希望打包的引用或者提交的区间</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git clone repo.bundle repo</span></span>
<span class="line"><span style="color:#A6ACCD;">// 可以克隆出一个repo目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,137),t=[p];function i(c,o,r,C,g,d){return n(),a("div",null,t)}const y=s(e,[["render",i]]);export{h as __pageData,y as default};
