import{_ as s,o as n,c as a,a as p}from"./app.09b4d0c2.js";const h=JSON.parse('{"title":"Migrating from 0.0.7","description":"","frontmatter":{},"headers":[{"level":2,"title":"No more store.state","slug":"no-more-store-state","link":"#no-more-store-state","children":[]},{"level":2,"title":"Rename of store properties","slug":"rename-of-store-properties","link":"#rename-of-store-properties","children":[]},{"level":2,"title":"The Pinia instance","slug":"the-pinia-instance","link":"#the-pinia-instance","children":[]},{"level":2,"title":"SSR changes","slug":"ssr-changes","link":"#ssr-changes","children":[]}],"relativePath":"cookbook/migration-0-0-7.md"}'),e={name:"cookbook/migration-0-0-7.md"},l=p(`<h1 id="migrating-from-0-0-7" tabindex="-1">Migrating from 0.0.7 <a class="header-anchor" href="#migrating-from-0-0-7" aria-hidden="true">#</a></h1><p>The versions after <code>0.0.7</code>: <code>0.1.0</code>, and <code>0.2.0</code>, came with a few big breaking changes. This guide helps you migrate whether you use Vue 2 or Vue 3. The whole changelog can be found in the repository:</p><ul><li><a href="https://github.com/vuejs/pinia/blob/v1/CHANGELOG.md" target="_blank" rel="noreferrer">For Pinia &lt;= 1 for Vue 2</a></li><li><a href="https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md" target="_blank" rel="noreferrer">For Pinia &gt;= 2 for Vue 3</a></li></ul><p>If you have questions or issues regarding the migration, feel free to <a href="https://github.com/vuejs/pinia/discussions/categories/q-a" target="_blank" rel="noreferrer">open a discussion</a> to ask for help.</p><h2 id="no-more-store-state" tabindex="-1">No more <code>store.state</code> <a class="header-anchor" href="#no-more-store-state" aria-hidden="true">#</a></h2><p>You no longer access the store state via a <code>state</code> property, you can directly access any state property.</p><p>Given a store defined with:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useStore({</span></span>
<span class="line"><span style="color:#F6F6F4;">  id: </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">main</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  state: () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> ({ count</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;"> })</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useStore</span><span style="color:#393A34;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">id</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">main</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">({</span><span style="color:#393A34;"> </span><span style="color:#998418;">count</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">0</span><span style="color:#393A34;"> </span><span style="color:#999999;">})</span></span>
<span class="line"><span style="color:#393A34;">})</span></span>
<span class="line"></span></code></pre></div><p>Do</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> const store = useStore()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EE6666;">-store.state.count++</span></span>
<span class="line"><span style="color:#62E884;">+store.count.++</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;"> const store = useStore()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;">-store.state.count++</span></span>
<span class="line"><span style="color:#22863A;">+store.count.++</span></span>
<span class="line"></span></code></pre></div><p>You can still access the whole store state with <code>$state</code> when needed:</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#EE6666;">-store.state = newState</span></span>
<span class="line"><span style="color:#62E884;">+store.$state = newState</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-store.state = newState</span></span>
<span class="line"><span style="color:#22863A;">+store.$state = newState</span></span>
<span class="line"></span></code></pre></div><h2 id="rename-of-store-properties" tabindex="-1">Rename of store properties <a class="header-anchor" href="#rename-of-store-properties" aria-hidden="true">#</a></h2><p>All store properties (<code>id</code>, <code>patch</code>, <code>reset</code>, etc) are now prefixed with <code>$</code> to allow properties defined on the store with the same names. Tip: you can refactor your whole codebase with F2 (or right-click + Refactor) on each of the store&#39;s properties</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;"> const store = useStore()</span></span>
<span class="line"><span style="color:#EE6666;">-store.patch({ count: 0 })</span></span>
<span class="line"><span style="color:#62E884;">+store.$patch({ count: 0 })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EE6666;">-store.reset()</span></span>
<span class="line"><span style="color:#62E884;">+store.$reset()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EE6666;">-store.id</span></span>
<span class="line"><span style="color:#62E884;">+store.$id</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;"> const store = useStore()</span></span>
<span class="line"><span style="color:#B31D28;">-store.patch({ count: 0 })</span></span>
<span class="line"><span style="color:#22863A;">+store.$patch({ count: 0 })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;">-store.reset()</span></span>
<span class="line"><span style="color:#22863A;">+store.$reset()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;">-store.id</span></span>
<span class="line"><span style="color:#22863A;">+store.$id</span></span>
<span class="line"></span></code></pre></div><h2 id="the-pinia-instance" tabindex="-1">The Pinia instance <a class="header-anchor" href="#the-pinia-instance" aria-hidden="true">#</a></h2><p>It&#39;s now necessary to create a pinia instance and install it:</p><p>If you are using Vue 2 (Pinia &lt;= 1):</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> Vue </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">vue</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { createPinia, PiniaVuePlugin } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> pinia </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">createPinia</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">Vue.</span><span style="color:#62E884;">use</span><span style="color:#F6F6F4;">(PiniaVuePlugin)</span></span>
<span class="line"><span style="color:#F286C4;font-weight:bold;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Vue</span><span style="color:#F6F6F4;">({</span></span>
<span class="line"><span style="color:#F6F6F4;">  el</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#app</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">  pinia,</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#7B7F8B;">// ...</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Vue</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">vue</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createPinia</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">PiniaVuePlugin</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">pinia</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">createPinia</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#B07D48;">Vue</span><span style="color:#999999;">.</span><span style="color:#59873A;">use</span><span style="color:#999999;">(</span><span style="color:#B07D48;">PiniaVuePlugin</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#AB5959;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Vue</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">el</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">#app</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">pinia</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// ...</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><p>If you are using Vue 3 (Pinia &gt;= 2):</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { createApp } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">vue</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> { createPinia, PiniaVuePlugin } </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">pinia</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> App </span><span style="color:#F286C4;">from</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">./App.vue</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> pinia </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">createPinia</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#62E884;">createApp</span><span style="color:#F6F6F4;">(App).</span><span style="color:#62E884;">use</span><span style="color:#F6F6F4;">(pinia).</span><span style="color:#62E884;">mount</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">#app</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createApp</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">vue</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createPinia</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">PiniaVuePlugin</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">App</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">./App.vue</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">pinia</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#59873A;">createPinia</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#59873A;">createApp</span><span style="color:#999999;">(</span><span style="color:#B07D48;">App</span><span style="color:#999999;">).</span><span style="color:#59873A;">use</span><span style="color:#999999;">(</span><span style="color:#B07D48;">pinia</span><span style="color:#999999;">).</span><span style="color:#59873A;">mount</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">#app</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"></span></code></pre></div><p>The <code>pinia</code> instance is what holds the state and should <strong>be unique per application</strong>. Check the SSR section of the docs for more details.</p><h2 id="ssr-changes" tabindex="-1">SSR changes <a class="header-anchor" href="#ssr-changes" aria-hidden="true">#</a></h2><p>The SSR plugin <code>PiniaSsr</code> is no longer necessary and has been removed. With the introduction of pinia instances, <code>getRootState()</code> is no longer necessary and should be replaced with <code>pinia.state.value</code>:</p><p>If you are using Vue 2 (Pinia &lt;= 1):</p><div class="language-diff"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F6F6F4;">// entry-server.js</span></span>
<span class="line"><span style="color:#EE6666;">-import { getRootState, PiniaSsr } from &#39;pinia&#39;,</span></span>
<span class="line"><span style="color:#62E884;">+import { createPinia, PiniaVuePlugin } from &#39;pinia&#39;,</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#EE6666;">-// install plugin to automatically use correct context in setup and onServerPrefetch</span></span>
<span class="line"><span style="color:#EE6666;">-Vue.use(PiniaSsr);</span></span>
<span class="line"><span style="color:#62E884;">+Vue.use(PiniaVuePlugin)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;"> export default context =&gt; {</span></span>
<span class="line"><span style="color:#62E884;">+  const pinia = createPinia()</span></span>
<span class="line"><span style="color:#F6F6F4;">   const app = new Vue({</span></span>
<span class="line"><span style="color:#F6F6F4;">     // other options</span></span>
<span class="line"><span style="color:#62E884;">+    pinia</span></span>
<span class="line"><span style="color:#F6F6F4;">   })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">   context.rendered = () =&gt; {</span></span>
<span class="line"><span style="color:#F6F6F4;">     // pass state to context</span></span>
<span class="line"><span style="color:#EE6666;">-    context.piniaState = getRootState(context.req)</span></span>
<span class="line"><span style="color:#62E884;">+    context.piniaState = pinia.state.value</span></span>
<span class="line"><span style="color:#F6F6F4;">   };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EE6666;">-   return { app }</span></span>
<span class="line"><span style="color:#62E884;">+   return { app, pinia }</span></span>
<span class="line"><span style="color:#F6F6F4;"> }</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;">// entry-server.js</span></span>
<span class="line"><span style="color:#B31D28;">-import { getRootState, PiniaSsr } from &#39;pinia&#39;,</span></span>
<span class="line"><span style="color:#22863A;">+import { createPinia, PiniaVuePlugin } from &#39;pinia&#39;,</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;">-// install plugin to automatically use correct context in setup and onServerPrefetch</span></span>
<span class="line"><span style="color:#B31D28;">-Vue.use(PiniaSsr);</span></span>
<span class="line"><span style="color:#22863A;">+Vue.use(PiniaVuePlugin)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;"> export default context =&gt; {</span></span>
<span class="line"><span style="color:#22863A;">+  const pinia = createPinia()</span></span>
<span class="line"><span style="color:#393A34;">   const app = new Vue({</span></span>
<span class="line"><span style="color:#393A34;">     // other options</span></span>
<span class="line"><span style="color:#22863A;">+    pinia</span></span>
<span class="line"><span style="color:#393A34;">   })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">   context.rendered = () =&gt; {</span></span>
<span class="line"><span style="color:#393A34;">     // pass state to context</span></span>
<span class="line"><span style="color:#B31D28;">-    context.piniaState = getRootState(context.req)</span></span>
<span class="line"><span style="color:#22863A;">+    context.piniaState = pinia.state.value</span></span>
<span class="line"><span style="color:#393A34;">   };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;">-   return { app }</span></span>
<span class="line"><span style="color:#22863A;">+   return { app, pinia }</span></span>
<span class="line"><span style="color:#393A34;"> }</span></span>
<span class="line"></span></code></pre></div><p><code>setActiveReq()</code> and <code>getActiveReq()</code> have been replaced with <code>setActivePinia()</code> and <code>getActivePinia()</code> respectively. <code>setActivePinia()</code> can only be passed a <code>pinia</code> instance created with <code>createPinia()</code>. <strong>Note that most of the time you won&#39;t directly use these functions</strong>.</p>`,27),o=[l];function t(c,r,i,y,d,F){return n(),a("div",null,o)}const A=s(e,[["render",t]]);export{h as __pageData,A as default};
