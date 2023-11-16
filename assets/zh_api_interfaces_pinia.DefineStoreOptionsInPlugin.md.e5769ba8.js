import{_ as e,o as t,c as s,a}from"./app.09b4d0c2.js";const F=JSON.parse('{"title":"接口：DefineStoreOptionsInPlugin<Id, S, G, A>","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[{"level":2,"title":"类型参数","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"层次结构","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"actions","slug":"actions","link":"#actions","children":[]},{"level":3,"title":"getters","slug":"getters","link":"#getters","children":[]},{"level":3,"title":"state","slug":"state","link":"#state","children":[]}]},{"level":2,"title":"方法","slug":"methods","link":"#methods","children":[{"level":3,"title":"hydrate","slug":"hydrate","link":"#hydrate","children":[]}]}],"relativePath":"zh/api/interfaces/pinia.DefineStoreOptionsInPlugin.md"}'),n={name:"zh/api/interfaces/pinia.DefineStoreOptionsInPlugin.md"},o=a(`<p><a href="./../">API 文档</a> / <a href="./../modules/pinia.html">pinia</a> / DefineStoreOptionsInPlugin</p><h1 id="interface-definestoreoptionsinplugin-id-s-g-a" tabindex="-1">接口：DefineStoreOptionsInPlugin&lt;Id, S, G, A&gt; <a class="header-anchor" href="#interface-definestoreoptionsinplugin-id-s-g-a" aria-hidden="true">#</a></h1><p><a href="./../modules/pinia.html">pinia</a>.DefineStoreOptionsInPlugin</p><p>创建 pinia 插件时可用的 <code>options</code>。</p><h2 id="type-parameters" tabindex="-1">类型参数 <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">名字</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Id</code></td><td style="text-align:left;">extends <code>string</code></td></tr><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="./../modules/pinia.html#statetree"><code>StateTree</code></a></td></tr><tr><td style="text-align:left;"><code>G</code></td><td style="text-align:left;"><code>G</code></td></tr><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">层次结构 <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><code>Omit</code>&lt;<a href="./pinia.DefineStoreOptions.html"><code>DefineStoreOptions</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt;, <code>&quot;id&quot;</code> | <code>&quot;actions&quot;</code>&gt;</p><p>↳ <strong><code>DefineStoreOptionsInPlugin</code></strong></p></li></ul><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><h3 id="actions" tabindex="-1">actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h3><p>• <strong>actions</strong>: <code>A</code></p><p>提取的 action 对象。当使用 setup API 建立 store 时，由 useStore() 添加， 否则使用传递给 <code>defineStore()</code> 的对象。 如果没有定义 action，则默认为一个空对象。</p><hr><h3 id="getters" tabindex="-1">getters <a class="header-anchor" href="#getters" aria-hidden="true">#</a></h3><p>• <code>Optional</code> <strong>getters</strong>: <code>G</code> &amp; <code>ThisType</code>&lt;<code>UnwrapRef</code>&lt;<code>S</code>&gt; &amp; <a href="./../modules/pinia.html#_storewithgetters"><code>_StoreWithGetters</code></a>&lt;<code>G</code>&gt; &amp; <a href="./pinia.PiniaCustomProperties.html"><code>PiniaCustomProperties</code></a>&lt;<code>string</code>, <a href="./../modules/pinia.html#statetree"><code>StateTree</code></a>, <a href="./../modules/pinia.html#_getterstree"><code>_GettersTree</code></a>&lt;<a href="./../modules/pinia.html#statetree"><code>StateTree</code></a>&gt;, <a href="./../modules/pinia.html#_actionstree"><code>_ActionsTree</code></a>&gt;&gt; &amp; <a href="./../modules/pinia.html#_getterstree"><code>_GettersTree</code></a>&lt;<code>S</code>&gt;</p><p>getter 的可选对象</p><h4 id="继承于" tabindex="-1">继承于 <a class="header-anchor" href="#继承于" aria-hidden="true">#</a></h4><p>Omit.getters</p><hr><h3 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-hidden="true">#</a></h3><p>• <code>Optional</code> <strong>state</strong>: () =&gt; <code>S</code></p><h4 id="type-declaration" tabindex="-1">类型声明 <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><p>▸ (): <code>S</code></p><p>创建一个新 state 的函数。 <strong>必须是一个箭头函数</strong>，以确保正确的类型标注!</p><h4 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h4><p><code>S</code></p><h4 id="继承于-1" tabindex="-1">继承于 <a class="header-anchor" href="#继承于-1" aria-hidden="true">#</a></h4><p>Omit.state</p><h2 id="methods" tabindex="-1">方法 <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="hydrate" tabindex="-1">hydrate <a class="header-anchor" href="#hydrate" aria-hidden="true">#</a></h3><p>▸ <code>Optional</code> <strong>hydrate</strong>(<code>storeState</code>, <code>initialState</code>): <code>void</code></p><p>当 store 定义中使用了复杂的 state (如仅客户端的引用)，并且从 <code>pinia.state</code> 中复制值是不够时， 允许在 SSR 期间对 store 进行 hydrating。</p><p><strong><code>Example</code></strong></p><p>如果在你的 <code>state</code> 中，你使用了任何 <code>customRef</code>，任何 <code>computed</code>，或任何在服务器和客户端有不同值的 <code>ref</code>， 你需要手动激活它们。 例如，一个存储在本地存储的自定义 ref：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">const</span><span style="color:#F6F6F4;"> useStore </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">defineStore</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">main</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">state</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> () </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> ({</span></span>
<span class="line"><span style="color:#F6F6F4;">    n</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useLocalStorage</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">key</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }),</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#62E884;">hydrate</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">storeState</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">initialState</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#7B7F8B;">// @ts-expect-error: https://github.com/microsoft/TypeScript/issues/43826</span></span>
<span class="line"><span style="color:#F6F6F4;">    storeState.n </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">useLocalStorage</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">key</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#BF9EEE;">0</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">useStore</span><span style="color:#AB5959;"> = </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">main</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">: () =&gt; ({</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">n</span><span style="color:#999999;">: </span><span style="color:#59873A;">useLocalStorage</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">key</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">, </span><span style="color:#2F798A;">0</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">  }),</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">hydrate</span><span style="color:#999999;">(</span><span style="color:#B07D48;">storeState</span><span style="color:#999999;">, </span><span style="color:#B07D48;">initialState</span><span style="color:#999999;">) {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// @ts-expect-error: https://github.com/microsoft/TypeScript/issues/43826</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B07D48;">storeState</span><span style="color:#999999;">.</span><span style="color:#B07D48;">n</span><span style="color:#999999;"> </span><span style="color:#AB5959;">=</span><span style="color:#999999;"> </span><span style="color:#59873A;">useLocalStorage</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">key</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">, </span><span style="color:#2F798A;">0</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">名字</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>storeState</code></td><td style="text-align:left;"><code>UnwrapRef</code>&lt;<code>S</code>&gt;</td><td style="text-align:left;">the current state in the store</td></tr><tr><td style="text-align:left;"><code>initialState</code></td><td style="text-align:left;"><code>UnwrapRef</code>&lt;<code>S</code>&gt;</td><td style="text-align:left;">initialState</td></tr></tbody></table><h4 id="返回值-1" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="继承于-2" tabindex="-1">继承于 <a class="header-anchor" href="#继承于-2" aria-hidden="true">#</a></h4><p>Omit.hydrate</p>`,41),l=[o];function r(p,c,i,d,h,y){return t(),s("div",null,l)}const f=e(n,[["render",r]]);export{F as __pageData,f as default};
