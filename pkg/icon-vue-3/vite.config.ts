import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgsprites } from './vite_plugins/svgsprites'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgsprites({ id: 'icon' }),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/entry.tsx',
    },
  },
})
