// vite.config.ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      entryRoot: './src/',
      outputDir: './dist/types/',
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, './'),
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NHTSA',
      formats: ['es', 'iife', 'umd', 'cjs'],
    },
    sourcemap: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        sourcemap: true,
      },
    },
  },
})
