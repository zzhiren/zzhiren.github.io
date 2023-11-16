import{_ as e,o as t,c as a,a as i}from"./app.09b4d0c2.js";const S=JSON.parse('{"title":"Interface: DefineSetupStoreOptions<Id, S, G, A>","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Type parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"actions","slug":"actions","link":"#actions","children":[]}]}],"relativePath":"api/interfaces/pinia.DefineSetupStoreOptions.md"}'),r={name:"api/interfaces/pinia.DefineSetupStoreOptions.md"},o=i('<p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / DefineSetupStoreOptions</p><h1 id="interface-definesetupstoreoptions-id-s-g-a" tabindex="-1">Interface: DefineSetupStoreOptions&lt;Id, S, G, A&gt; <a class="header-anchor" href="#interface-definesetupstoreoptions-id-s-g-a" aria-hidden="true">#</a></h1><p><a href="./../modules/pinia.html">pinia</a>.DefineSetupStoreOptions</p><p>Options parameter of <code>defineStore()</code> for setup stores. Can be extended to augment stores with the plugin API.</p><p><strong><code>See</code></strong></p><p><a href="./pinia.DefineStoreOptionsBase.html">DefineStoreOptionsBase</a>.</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Id</code></td><td style="text-align:left;">extends <code>string</code></td></tr><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="./../modules/pinia.html#StateTree"><code>StateTree</code></a></td></tr><tr><td style="text-align:left;"><code>G</code></td><td style="text-align:left;"><code>G</code></td></tr><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><a href="./pinia.DefineStoreOptionsBase.html"><code>DefineStoreOptionsBase</code></a>&lt;<code>S</code>, <a href="./../modules/pinia.html#Store"><code>Store</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt;&gt;</p><p>↳ <strong><code>DefineSetupStoreOptions</code></strong></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="actions" tabindex="-1">actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h3><p>• <code>Optional</code> <strong>actions</strong>: <code>A</code></p><p>Extracted actions. Added by useStore(). SHOULD NOT be added by the user when creating the store. Can be used in plugins to get the list of actions in a store defined with a setup function. Note this is always defined</p>',14),n=[o];function d(s,c,p,l,h,f){return t(),a("div",null,n)}const g=e(r,[["render",d]]);export{S as __pageData,g as default};
