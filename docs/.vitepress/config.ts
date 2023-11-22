import { defineConfig } from 'vitepress'

export default defineConfig({
  hmr: true,
  lang: 'zh',
  vite: {
    server: {
      port: 8888,
    },
  },
  title: 'Zzhiren',
  appearance: 'dark',
  srcDir: './src',
  assetsDir: 'static',
  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

    anchor: {
      // slugify,
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],

    [
      'meta',
      { name: 'wwads-cn-verify', content: '5878a7ab84fb43402106c575658472fa' },
    ],

    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],

    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'META_IMAGE',
      },
    ],

    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'KFPPRRIS',
        'data-spa': 'auto',
        defer: '',
      },
    ],

    // Vue School Top banner
    // [
    //   'script',
    //   {
    //     src: 'https://vueschool.io/banner.js?affiliate=vuerouter&type=top',
    //     // @ts-expect-error: vitepress bug
    //     async: true,
    //     type: 'text/javascript',
    //   },
    // ],

    // ...(isProduction ? productionHead : []),
  ],

  themeConfig: {
    logo: '/logo.svg',
    outline: [2, 3],
    lastUpdatedText: '上次更新',
    returnToTopLabel: '返回顶部',
    // 文档页脚文本配置
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '曲谱', link: '/musicscores/' },
      // { text: 'Config', link: '/config/' },
      // { text: 'Plugins', link: '/plugins/' },
      // {
      //   text: '指南',
      //   link: '/core-concepts/',
      //   activeMatch: '^/core-concepts/',
      // },
      // { text: 'API', link: '/api/', activeMatch: '^/api/' },
      // { text: '手册', link: '/cookbook/', activeMatch: '^/cookbook/' },
      // {
      //   text: '相关链接',
      //   items: [
      //     {
      //       text: '论坛',
      //       link: 'https://github.com/vuejs/pinia/discussions',
      //     },
      //     {
      //       text: '更新日志',
      //       link: 'https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md',
      //     },
      //   ],
      // },
    ],
    sidebar: {
      // '/api/': [
      //   {
      //     text: 'packages',
      //     items: [
      //       { text: 'pinia', link: '/api/modules/pinia.html' },
      //       { text: '@pinia/nuxt', link: '/api/modules/pinia_nuxt.html' },
      //       {
      //         text: '@pinia/testing',
      //         link: '/api/modules/pinia_testing.html',
      //       },
      //     ],
      //   },
      // ],
      '/musicscores/': [
        {
          text: '曲谱',
          items: [
            { text: 'Index', link: '/musicscores/' },
            { text: '安静', link: '/musicscores/anjin.html' },
          ],
        },
      ],
      // catch-all fallback
      '/': [
        {
          text: 'Introduction',
          items: [
            {
              text: 'What is Pinia?',
              link: '/introduction.html',
            },
            {
              text: 'Getting Started',
              link: '/getting-started.html',
            },
          ],
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Defining a Store', link: '/core-concepts/' },
            { text: 'State', link: '/core-concepts/state.html' },
            { text: 'Getters', link: '/core-concepts/getters.html' },
            { text: 'Actions', link: '/core-concepts/actions.html' },
            { text: 'Plugins', link: '/core-concepts/plugins.html' },
            {
              text: 'Stores outside of components',
              link: '/core-concepts/outside-component-usage.html',
            },
          ],
        },
        {
          text: 'Server-Side Rendering (SSR)',
          items: [
            {
              text: 'Vue and Vite',
              link: '/ssr/',
            },
            {
              text: 'Nuxt.js',
              link: '/ssr/nuxt.html',
            },
          ],
        },
        {
          text: 'Cookbook',
          collapsed: false,
          items: [
            {
              text: 'Index',
              link: '/cookbook/',
            },
            {
              text: 'Migration from Vuex ≤4',
              link: '/cookbook/migration-vuex.html',
            },
            {
              text: 'Hot Module Replacement',
              link: '/cookbook/hot-module-replacement.html',
            },
            {
              text: 'Testing',
              link: '/cookbook/testing.html',
            },
            {
              text: 'Usage without setup()',
              link: '/cookbook/options-api.html',
            },
            {
              text: 'Composing Stores',
              link: '/cookbook/composing-stores.html',
            },
            {
              text: 'VSCode Snippets',
              link: '/cookbook/vscode-snippets.html',
            },
            {
              text: 'Migration from v0/v1 to v2',
              link: '/cookbook/migration-v1-v2.html',
            },
            {
              text: 'Dealing with composables',
              link: '/cookbook/composables.html',
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/posva' },
      {
        icon: 'github',
        link: 'https://github.com/vuejs/pinia',
      },
      {
        icon: 'discord',
        link: 'https://chat.vuejs.org',
      },
    ],

    footer: {
      copyright: 'Copyright © 2019-present Eduardo San Martin Morote',
      message: 'Released under the MIT License.',
    },

    editLink: {
      pattern: 'https://github.com/vuejs/pinia/edit/v2/packages/docs/:path',
      text: 'Suggest changes',
    },

    algolia: {
      appId: '69Y3N7LHI2',
      apiKey: '45441f4b65a2f80329fd45c7cb371fea',
      indexName: 'pinia',
    },

    carbonAds: {
      code: 'CEBICK3I',
      // custom: 'CEBICK3M',
      placement: 'routervuejsorg',
    },
  },
})