// vite.config.ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

const packageName = 'nhtsa-api-wrapper';

const fileName = {
  es: `${packageName}.mjs`,
  cjs: `${packageName}.cjs`,
  umd: `${packageName}.umd.cjs`,
  iife: `${packageName}.iife.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      entryRoot: './src/',
      outputDir: './dist/types',
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
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
      formats,
      fileName: (format) => fileName[format],
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
