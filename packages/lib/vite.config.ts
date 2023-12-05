/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { coverageConfigDefaults } from 'vitest/config'

const packageName = 'nhtsa-api-wrapper'

const fileName = {
  es: `${packageName}.mjs`,
  cjs: `${packageName}.cjs`,
  umd: `${packageName}.umd.cjs`,
  iife: `${packageName}.iife.js`,
}

const formats = Object.keys(fileName) as Array<keyof typeof fileName>

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    tsconfigPaths(),
    dts({
      entryRoot: './src',
      outDir: './dist/types',
      insertTypesEntry: true,
      rollupTypes: true,
      exclude: ['**/__tests__/**/*', 'node_modules/**'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '.vitest',
        replacement: resolve(__dirname, './.vitest'),
      },
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NHTSA',
      formats,
      fileName: (format) => fileName[format],
    },
    outDir: 'dist',
    reportCompressedSize: true,
    sourcemap: true,
  },
  test: {
    setupFiles: ['./.vitest/setup.ts'],
    environment: 'node',
    globals: true,
    typecheck: { checker: 'tsc', enabled: true },
    // output of @vitest/ui reporter=html that can be used to view test results via vite preview
    outputFile: './.vitest/dist/ui/index.html',
    coverage: {
      provider: 'v8',
      reportsDirectory: './.vitest/dist/coverage',
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/*/types.ts',
        '**/__tests__/**/*',
        '**/.vitest/**/*',
        '**/*/vite-env.d.ts',
        '**/*/global.d.ts',
        '**/*/types.d.ts',
        '**/*/typedoc.cjs',
      ],
    },
    // uncomment to enable in source file testing
    // includeSource: ['src/**/*.{js,ts}'],
  },
})
