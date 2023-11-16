import{_ as e,o as t,c as o,a}from"./app.09b4d0c2.js";const m=JSON.parse('{"title":"接口：_StoreOnActionListenerContext<Store, ActionName, A>","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[{"level":2,"title":"类型参数","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"after","slug":"after","link":"#after","children":[]},{"level":3,"title":"args","slug":"args","link":"#args","children":[]},{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"onError","slug":"onerror","link":"#onerror","children":[]},{"level":3,"title":"store","slug":"store","link":"#store","children":[]}]}],"relativePath":"zh/api/interfaces/pinia._StoreOnActionListenerContext.md"}'),d={name:"zh/api/interfaces/pinia._StoreOnActionListenerContext.md"},r=a('<p><a href="./../">API 文档</a> / <a href="./../modules/pinia.html">pinia</a> / _StoreOnActionListenerContext</p><h1 id="interface-storeonactionlistenercontext-store-actionname-a" tabindex="-1">接口：_StoreOnActionListenerContext&lt;Store, ActionName, A&gt; <a class="header-anchor" href="#interface-storeonactionlistenercontext-store-actionname-a" aria-hidden="true">#</a></h1><p><a href="./../modules/pinia.html">pinia</a>._StoreOnActionListenerContext</p><p><a href="./../modules/pinia.html#storeonactionlistenercontext">StoreOnActionListenerContext</a>的实际类型。 存在的目的是重构。仅供内部使用。 <strong>仅</strong>供内部使用</p><h2 id="type-parameters" tabindex="-1">类型参数 <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Store</code></td><td style="text-align:left;"><code>Store</code></td></tr><tr><td style="text-align:left;"><code>ActionName</code></td><td style="text-align:left;">extends <code>string</code></td></tr><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><h3 id="after" tabindex="-1">after <a class="header-anchor" href="#after" aria-hidden="true">#</a></h3><p>• <strong>after</strong>: (<code>callback</code>: <code>A</code> extends <code>Record</code>&lt;<code>ActionName</code>, <a href="./../modules/pinia.html#_method"><code>_Method</code></a>&gt; ? (<code>resolvedReturn</code>: <a href="./../modules/pinia.html#_awaited"><code>_Awaited</code></a>&lt;<code>ReturnType</code>&lt;<code>A</code>[<code>ActionName</code>]&gt;&gt;) =&gt; <code>void</code> : () =&gt; <code>void</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">类型声明 <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><p>▸ (<code>callback</code>): <code>void</code></p><p>action 执行完的钩子。 它接收 action 的返回值，如果是 Promise，它将被自动解包。</p><h5 id="parameters" tabindex="-1">参数 <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>A</code> extends <code>Record</code>&lt;<code>ActionName</code>, <a href="./../modules/pinia.html#_method"><code>_Method</code></a>&gt; ? (<code>resolvedReturn</code>: <a href="./../modules/pinia.html#_awaited"><code>_Awaited</code></a>&lt;<code>ReturnType</code>&lt;<code>A</code>[<code>ActionName</code>]&gt;&gt;) =&gt; <code>void</code> : () =&gt; <code>void</code></td></tr></tbody></table><h5 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h5><p><code>void</code></p><hr><h3 id="args" tabindex="-1">args <a class="header-anchor" href="#args" aria-hidden="true">#</a></h3><p>• <strong>args</strong>: <code>A</code> extends <code>Record</code>&lt;<code>ActionName</code>, <a href="./../modules/pinia.html#_method"><code>_Method</code></a>&gt; ? <code>Parameters</code>&lt;<code>A</code>[<code>ActionName</code>]&gt; : <code>unknown</code>[]</p><p>传递给 action 的参数</p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h3><p>• <strong>name</strong>: <code>ActionName</code></p><p>action 的名称</p><hr><h3 id="onerror" tabindex="-1">onError <a class="header-anchor" href="#onerror" aria-hidden="true">#</a></h3><p>• <strong>onError</strong>: (<code>callback</code>: (<code>error</code>: <code>unknown</code>) =&gt; <code>void</code>) =&gt; <code>void</code></p><h4 id="type-declaration_1" tabindex="-1">类型声明 <a class="header-anchor" href="#type-declaration_1" aria-hidden="true">#</a></h4><p>▸ (<code>callback</code>): <code>void</code></p><p>action 的错误钩子。 返回 <code>false</code> 以捕获错误并阻止其继续传播。</p><h5 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(<code>error</code>: <code>unknown</code>) =&gt; <code>void</code></td></tr></tbody></table><h5 id="返回值-1" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a></h5><p><code>void</code></p><hr><h3 id="store" tabindex="-1">store <a class="header-anchor" href="#store" aria-hidden="true">#</a></h3><p>• <strong>store</strong>: <code>Store</code></p><p>正在调用 action 的 Store</p>',38),c=[r];function n(i,l,h,s,p,g){return t(),o("div",null,c)}const x=e(d,[["render",n]]);export{m as __pageData,x as default};
