import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import typescript from '@rollup/plugin-typescript'

const resolvePath = (str: string) => path.resolve(__dirname, str)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'ShowCase',
      fileName: 'showcase',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
      plugins: [
        typescript({
          target: 'esnext',
          rootDir: resolvePath('./src'),
          declaration: true,
          declarationDir: resolvePath('./dist'),
          exclude: resolvePath('./node_modules/**'),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
})
