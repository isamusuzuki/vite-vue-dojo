import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
const __dirname = dirname(fileURLToPath(import.meta.url))


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        avocado: resolve(__dirname, 'avocado.html'),
        banana: resolve(__dirname, 'banana.html'),
        coconut: resolve(__dirname, 'coconut.html'),
        daikon: resolve(__dirname, 'daikon.html'),
        edamame: resolve(__dirname, 'edamame.html'),
        fennel: resolve(__dirname, 'fennel.html'),
        garlic: resolve(__dirname, 'garlic.html'),
        hakusai: resolve(__dirname, 'hakusai.html'),
        ingen: resolve(__dirname, 'ingen.html'),
      },
    },
  },
})