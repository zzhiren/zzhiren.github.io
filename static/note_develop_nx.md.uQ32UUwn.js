import{_ as s,c as a,o as n,R as l}from"./chunks/framework.tv7jLUNE.js";const h=JSON.parse('{"title":"Nx","description":"","frontmatter":{},"headers":[],"relativePath":"note/develop/nx.md","filePath":"note/develop/nx.md"}'),p={name:"note/develop/nx.md"},e=l(`<h1 id="nx" tabindex="-1"><a href="https://nx.dev/getting-started/intro" target="_blank" rel="noreferrer">Nx</a> <a class="header-anchor" href="#nx" aria-label="Permalink to &quot;[Nx](https://nx.dev/getting-started/intro)&quot;">​</a></h1><h2 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 安装插件</span></span>
<span class="line"><span style="color:#62E884;">npm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">add</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-D</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/vue</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 安装插件</span></span>
<span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/vue</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 创建vue app [app名称] --directory=[app存放目录]</span></span>
<span class="line"><span style="color:#62E884;">nx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/vue:app</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">admin</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--directory=apps/vue/admin</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 创建vue app [app名称] --directory=[app存放目录]</span></span>
<span class="line"><span style="color:#59873A;">nx</span><span style="color:#393A34;"> </span><span style="color:#B56959;">g</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/vue:app</span><span style="color:#393A34;"> </span><span style="color:#B56959;">admin</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--directory=apps/vue/admin</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 创建vue lib [lib名称] --directory=[lib存放目录]</span></span>
<span class="line"><span style="color:#62E884;">nx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/vue:lib</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">theme</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--directory=libs/vue/theme</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 创建vue lib [lib名称] --directory=[lib存放目录]</span></span>
<span class="line"><span style="color:#59873A;">nx</span><span style="color:#393A34;"> </span><span style="color:#B56959;">g</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/vue:lib</span><span style="color:#393A34;"> </span><span style="color:#B56959;">theme</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--directory=libs/vue/theme</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 创建component</span></span>
<span class="line"><span style="color:#62E884;">nx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/vue:component</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--directory=my-app/src/app/one</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--name=one</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--nameAndDirectoryFormat=as-provided</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--unitTestRunner=vitest</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 创建component</span></span>
<span class="line"><span style="color:#59873A;">nx</span><span style="color:#393A34;"> </span><span style="color:#B56959;">g</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/vue:component</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--directory=my-app/src/app/one</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--name=one</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--nameAndDirectoryFormat=as-provided</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--unitTestRunner=vitest</span></span></code></pre></div><h2 id="nestjs" tabindex="-1">NestJS <a class="header-anchor" href="#nestjs" aria-label="Permalink to &quot;NestJS&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 安装插件</span></span>
<span class="line"><span style="color:#62E884;">npm</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">add</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">-D</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/nest</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 安装插件</span></span>
<span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/nest</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 创建app</span></span>
<span class="line"><span style="color:#62E884;">nx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/nest:app</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">my-nest-app</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 创建app</span></span>
<span class="line"><span style="color:#59873A;">nx</span><span style="color:#393A34;"> </span><span style="color:#B56959;">g</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/nest:app</span><span style="color:#393A34;"> </span><span style="color:#B56959;">my-nest-app</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 创建lib</span></span>
<span class="line"><span style="color:#62E884;">nx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/nest:lib</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">my-nest-lib</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 创建lib</span></span>
<span class="line"><span style="color:#59873A;">nx</span><span style="color:#393A34;"> </span><span style="color:#B56959;">g</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/nest:lib</span><span style="color:#393A34;"> </span><span style="color:#B56959;">my-nest-lib</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 创建可构建的lib</span></span>
<span class="line"><span style="color:#62E884;">nx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/nest:lib</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">my-nest-lib</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--buildable</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 创建可构建的lib</span></span>
<span class="line"><span style="color:#59873A;">nx</span><span style="color:#393A34;"> </span><span style="color:#B56959;">g</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/nest:lib</span><span style="color:#393A34;"> </span><span style="color:#B56959;">my-nest-lib</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--buildable</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#7B7F8B;"># 发布lib</span></span>
<span class="line"><span style="color:#62E884;">nx</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">g</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">@nx/nest:lib</span><span style="color:#F6F6F4;"> </span><span style="color:#E7EE98;">my-nest-lib</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--publishable</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">--importPath=@my-workspace/my-nest-lib</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;"># 发布lib</span></span>
<span class="line"><span style="color:#59873A;">nx</span><span style="color:#393A34;"> </span><span style="color:#B56959;">g</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@nx/nest:lib</span><span style="color:#393A34;"> </span><span style="color:#B56959;">my-nest-lib</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--publishable</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--importPath=@my-workspace/my-nest-lib</span></span></code></pre></div>`,12),o=[e];function t(c,r,i,y,d,E){return n(),a("div",null,o)}const v=s(p,[["render",t]]);export{h as __pageData,v as default};
