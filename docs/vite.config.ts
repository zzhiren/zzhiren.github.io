import { defineConfig, Plugin } from 'vite'
import _fs from 'fs'
// import TypeDocPlugin from './vite-typedoc-plugin'

const fs = _fs.promises

export default defineConfig({
  clearScreen: false,
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/shared', '@vueuse/core'],
  },
})

