// vite.config.ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

// variable to store if this is dev mode
const isDevMode = process.env.NODE_ENV === 'development'
const dtsOutDir = isDevMode ? 'dev/dist/types' : 'dist/types'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      entryRoot: './src/',
      outputDir: dtsOutDir,
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
