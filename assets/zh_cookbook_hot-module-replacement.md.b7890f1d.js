import{_ as s,o as a,c as n,a as o}from"./app.09b4d0c2.js";const m=JSON.parse('{"title":"HMR (Hot Module Replacement)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/cookbook/hot-module-replacement.md"}'),p={name:"zh/cookbook/hot-module-replacement.md"},l=o(`<h1 id="hmr-hot-module-replacement" tabindex="-1">HMR (Hot Module Replacement) <a class="header-anchor" href="#hmr-hot-module-replacement" aria-hidden="true">#</a></h1><p>Pinia 支持热更新，所以你可以编辑你的 store，并直接在你的应用中与它们互动，而不需要重新加载页面，允许你保持当前的 state、并添加甚至删除 state、action 和 getter。</p><p>目前，只有 <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> 被官方支持，不过任何实现 <code>i<wbr>mport.meta.hot</code> 规范的构建工具都应该能正常工作。(例外的是，<a href="https://webpack.js.org/api/module-variables/#importmetawebpackhot" target="_blank" rel="noreferrer">webpack</a> 似乎使用的是 <code>i<wbr>mport.meta.webpackHot</code> 而不是 <code>i<wbr>mport.meta.hot</code> ) 你只需要在任何 store 声明旁边添加这段代码。比方说，你有三个 store：<code>auth.js</code>、 <code>cart.js</code> 和 <code>chat.js</code>, 你必须在每个 <strong>store 声明</strong>后都添加(和调整)这段代码。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;">// auth.js</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { defineStore, acceptHMRUpdate } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useAuth </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">auth</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// 配置...</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 确保传递正确的 store 声明，本例中为 \`useAuth\`</span></span>
<span class="line"><span style="color:#F286C4;">if</span><span style="color:#F6F6F4;"> (</span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">.meta.hot) {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">.meta.hot.</span><span style="color:#62E884;">accept</span><span style="color:#F6F6F4;">(</span><span style="color:#62E884;">acceptHMRUpdate</span><span style="color:#F6F6F4;">(useAuth, </span><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;">.meta.hot))</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// auth.js</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">acceptHMRUpdate</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useAuth</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">auth</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// 配置...</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 确保传递正确的 store 声明，本例中为 \`useAuth\`</span></span>
<span class="line"><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#1E754F;">import</span><span style="color:#999999;">.</span><span style="color:#998418;">meta</span><span style="color:#999999;">.</span><span style="color:#B07D48;">hot</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">import</span><span style="color:#999999;">.</span><span style="color:#998418;">meta</span><span style="color:#999999;">.</span><span style="color:#B07D48;">hot</span><span style="color:#999999;">.</span><span style="color:#59873A;">accept</span><span style="color:#999999;">(</span><span style="color:#59873A;">acceptHMRUpdate</span><span style="color:#999999;">(</span><span style="color:#B07D48;">useAuth</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">import</span><span style="color:#999999;">.</span><span style="color:#998418;">meta</span><span style="color:#999999;">.</span><span style="color:#B07D48;">hot</span><span style="color:#999999;">))</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div>`,4),e=[l];function t(c,r,y,i,F,d){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{m as __pageData,A as default};
