import{_ as s,c as a,o as n,d as l}from"./app.d912445c.js";const u=JSON.parse('{"title":"node相关问题","description":"","frontmatter":{},"headers":[],"relativePath":"问题/node.md","lastUpdated":1684828885000}'),e={name:"问题/node.md"},p=l(`<h1 id="node相关问题" tabindex="-1">node相关问题 <a class="header-anchor" href="#node相关问题" aria-hidden="true">#</a></h1><ol><li>开发依赖和生产依赖有什么区别？</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">**对于前端项目，没有任何区别**</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">因为我们需要的只是最后的产物。不需要关心他是开发依赖还是生产依赖</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>本地debugger ts代码</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">安装vscode 插件 Typescript Debugger, 直接按F5 选择ts-node即可</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">**注意：需要使用npm 本地安装ts-node， yarn3会报错找不到路径**</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>node 浏览器调试 文件</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 这个其实就是node 运行</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--inspect-brk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./node_modules/webpack-cli/bin/cli.js</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--inspect-brk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./a.js</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>node 项目 加载esm 依赖包 a. 项目基础为ts, 使用ts 编写，无法解决问题。不论是将最后的产出变成commjs,还是esm ,都无法解决问题。 b. ts-node 无法识别package.json 中type 为 module 的ts文件 c. 使用mjs 解决问题</li><li>ts 项目如何获取json 文件。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 如果是commonjs 写法，可以直接require动态引入</span></span>
<span class="line"><span style="color:#A6ACCD;">// 利用fs 读文件内容</span></span>
<span class="line"><span style="color:#A6ACCD;">fs.readFileSync(getSchemaPath(), &#39;utf-8&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="6"><li>babel 处理不了ts 文件 默认情况。babel只处理js文件，需要添加命令参数 --extensions ，指定扩展名</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">babel src --out-dir dist --extensions .ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// .babelrc</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;presets&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@babel/preset-env&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;targets&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;node&quot;: &quot;current&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@babel/preset-typescript&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),o=[p];function t(c,i,r,C,d,A){return n(),a("div",null,o)}const D=s(e,[["render",t]]);export{u as __pageData,D as default};
