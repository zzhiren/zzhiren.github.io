---
layout: doc
---
<script setup lang="ts">
  import { ref } from 'vue'
  import { Navs } from '@vue/components'

  const vue1 = ref([
    {
      title: '响应式基础',
      details: 'ref、reactive',
      link: '/musicscores/anjin.html',
      // linkText: 'yyy'
    },
    {
      title: '计算属性',
      details: 'ref、reactive'
    },
    {
      title: '事件处理',
      details: 'ref、reactive'
    },
    {
      title: '表单输入绑定',
      details: 'ref、reactive'
    },
    {
      title: '生命周期',
      details: 'ref、reactive'
    },
    {
      title: '侦听器watch',
      details: 'watch、watchEffect'
    },
    {
      title: '模板引用',
      details: 'watch、watchEffectwatch、watchEffectwatch、watchEffectwatch、watchEffect'
    },
  ])

  const vue2 = ref([
    {
      title: '响应式基础',
      details: 'ref、reactive'
    },
    {
      title: '计算属性',
      details: 'ref、reactive',
      link: 'xxx'
    },
    {
      title: '事件处理',
      details: 'ref、reactive'
    },
    {
      title: '表单输入绑定',
      details: 'ref、reactive'
    },
    {
      title: '生命周期',
      details: 'ref、reactive'
    },
    {
      title: '侦听器watch',
      details: 'watch、watchEffectwatch、watchEffectwatch、watchEffect'
    },
    {
      title: '模板引用',
      details: 'watch、watchEffect'
    },
  ])

</script>

# Vite
## Vue3初级知识

<Navs :features="vue1"/>  
<!-- <DocNav :navs="vue1"/> -->