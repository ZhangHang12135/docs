import{_ as s,c as a,o as n,d as e}from"./app.f4bc5ae2.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"webpack 配置","slug":"webpack-配置","link":"#webpack-配置","children":[{"level":3,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[]},{"level":3,"title":"资源加载","slug":"资源加载","link":"#资源加载","children":[]},{"level":3,"title":"管理输出","slug":"管理输出","link":"#管理输出","children":[]},{"level":3,"title":"开发环境","slug":"开发环境","link":"#开发环境","children":[]},{"level":3,"title":"代码分离","slug":"代码分离","link":"#代码分离","children":[]},{"level":3,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":3,"title":"构建性能","slug":"构建性能","link":"#构建性能","children":[]},{"level":3,"title":"tree Shaking","slug":"tree-shaking","link":"#tree-shaking","children":[]}]}],"relativePath":"技术/webpack/通用配置.md","lastUpdated":1676174941000}'),l={name:"技术/webpack/通用配置.md"},p=e(`<h2 id="webpack-配置" tabindex="-1">webpack 配置 <a class="header-anchor" href="#webpack-配置" aria-hidden="true">#</a></h2><h3 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-hidden="true">#</a></h3><p>entry 是js 入口， output是输出</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        filename: &#39;bundle.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="资源加载" tabindex="-1">资源加载 <a class="header-anchor" href="#资源加载" aria-hidden="true">#</a></h3><p>webpack5 对于资源加载内置asset module, 不用在像4一样导入 url-loader file-loader</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            test: /\\.css$/i,</span></span>
<span class="line"><span style="color:#A6ACCD;">            use: [&#39;style-loader&#39;, &#39;css-loader&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            test: /\\.(png|svg|jpg|jpeg|gif)$/i,</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: &#39;asset/resource&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="管理输出" tabindex="-1">管理输出 <a class="header-anchor" href="#管理输出" aria-hidden="true">#</a></h3><p>webpack5 内置了clean-webpack-plugins, 直接在output里面配置即可</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;bundle.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    clean: true, // 每次会自动清除dist文件</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-hidden="true">#</a></h3><p>需要webpack-dev-server</p><blockquote><p>webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 <a href="https://www.webpackjs.com/configuration/dev-server/#devserverdevmiddleware" target="_blank" rel="noreferrer">devMiddleware.publicPath</a> 选项进行修改。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// webpack.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    static: &#39;./dist&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">// package.js</span></span>
<span class="line"><span style="color:#A6ACCD;">// 增加命令</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;server&quot;: &quot;node server.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="代码分离" tabindex="-1">代码分离 <a class="header-anchor" href="#代码分离" aria-hidden="true">#</a></h3><ol><li>代码分离最简单的方法就是 设置多个入口。</li></ol><p>如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。</p><p>这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。</p><ol start="2"><li>配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    entry: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        index: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            import: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            dependOn: &#39;shared&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          another: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            import: &#39;./src/another-module.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            dependOn: &#39;shared&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          shared: &#39;lodash&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">   optimization: {</span></span>
<span class="line"><span style="color:#A6ACCD;">     splitChunks: {</span></span>
<span class="line"><span style="color:#A6ACCD;">       chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     },</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>mini-css-extract-plugin: 用于将 CSS 从主应用程序中分离。</p><h3 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-hidden="true">#</a></h3><p>输出文件的 hash, 添加vendor拆分，添加模块标识</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;[name].[contenthash].js&#39;, // contenthash 是根据文件内容计算的</span></span>
<span class="line"><span style="color:#A6ACCD;">    clean: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">optimization: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    moduleIds: &#39;deterministic&#39;, // 添加这个，hash就不会全部都改变</span></span>
<span class="line"><span style="color:#A6ACCD;">    runtimeChunk: &#39;single&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    splitChunks: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        cacheGroups: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            vendor: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                test: /[\\\\/]node_modules[\\\\/]/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                name: &#39;vendors&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="构建性能" tabindex="-1">构建性能 <a class="header-anchor" href="#构建性能" aria-hidden="true">#</a></h3><p><a href="https://www.webpackjs.com/guides/build-performance/" target="_blank" rel="noreferrer">直接看文档吧</a></p><h3 id="tree-shaking" tabindex="-1">tree Shaking <a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// webpack.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">// package.js 在项目的 package.json 文件中，添加 &quot;sideEffects&quot; 属性。</span></span>
<span class="line"><span style="color:#A6ACCD;">sideEffects: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,30),o=[p];function c(t,i,r,C,d,A){return n(),a("div",null,o)}const y=s(l,[["render",c]]);export{u as __pageData,y as default};
