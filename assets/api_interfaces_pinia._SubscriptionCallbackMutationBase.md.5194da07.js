import{_ as e,o as t,c as a,a as i}from"./app.09b4d0c2.js";const _=JSON.parse('{"title":"Interface: _SubscriptionCallbackMutationBase","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"events","slug":"events","link":"#events","children":[]},{"level":3,"title":"storeId","slug":"storeid","link":"#storeid","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]}]}],"relativePath":"api/interfaces/pinia._SubscriptionCallbackMutationBase.md"}'),r={name:"api/interfaces/pinia._SubscriptionCallbackMutationBase.md"},n=i('<p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / _SubscriptionCallbackMutationBase</p><h1 id="interface-subscriptioncallbackmutationbase" tabindex="-1">Interface: _SubscriptionCallbackMutationBase <a class="header-anchor" href="#interface-subscriptioncallbackmutationbase" aria-hidden="true">#</a></h1><p><a href="./../modules/pinia.html">pinia</a>._SubscriptionCallbackMutationBase</p><p>Base type for the context passed to a subscription callback. Internal type.</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><strong><code>_SubscriptionCallbackMutationBase</code></strong></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationDirect.html"><code>SubscriptionCallbackMutationDirect</code></a></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationPatchFunction.html"><code>SubscriptionCallbackMutationPatchFunction</code></a></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationPatchObject.html"><code>SubscriptionCallbackMutationPatchObject</code></a></p></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><p>• <code>Optional</code> <strong>events</strong>: <code>DebuggerEvent</code> | <code>DebuggerEvent</code>[]</p><p>🔴 DEV ONLY, DO NOT use for production code. Different mutation calls. Comes from <a href="https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging" target="_blank" rel="noreferrer">https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging</a> and allows to track mutations in devtools and plugins <strong>during development only</strong>.</p><hr><h3 id="storeid" tabindex="-1">storeId <a class="header-anchor" href="#storeid" aria-hidden="true">#</a></h3><p>• <strong>storeId</strong>: <code>string</code></p><p><code>id</code> of the store doing the mutation.</p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h3><p>• <strong>type</strong>: <a href="./../enums/pinia.MutationType.html"><code>MutationType</code></a></p><p>Type of the mutation.</p>',18),o=[n];function c(s,l,p,d,h,u){return t(),a("div",null,o)}const f=e(r,[["render",c]]);export{_ as __pageData,f as default};
