import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';

import babel from 'rollup-plugin-babel';
import gzipPlugin from 'rollup-plugin-gzip';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

const libraryName = pkg.libraryName;

// Set if rollup is used in development/watch mode and switch variables based on that value
const isDev = process.env.ROLLUP_WATCH === 'true';
const baseDir = isDev ? 'dev/dist/' : 'dist/';
const tsconfig = isDev ? './tsconfig.dev.json' : './tsconfig.json';

const treeShakeBundles = {
  index: 'src/index.ts'
};

// Rollup plugins used with every build
const plugins = [
  json(),
  commonjs(),
  typescript({
    tsconfig,
    typescript: require('typescript'),
    useTsconfigDeclarationDir: true,
    exclude: ['node_modules']
  }),
  sourceMaps(),
  babel({ include: 'node_modules/cross-fetch', extensions: ['.js', '.ts'] })
];

export default [
  /**
   * Browser/Universal Bundles.
   */
  {
    external: ['cross-fetch'],
    input: `src/index.ts`,
    output: [
      /**
       * UMD Bundle.
       */
      {
        file: `${baseDir}bundle.min.js`,
        name: libraryName,
        format: 'umd',
        esModule: false,
        globals: {
          'cross-fetch': 'fetch'
        },
        sourcemap: true,
        plugins: [
          gzipPlugin(),
          terser({
            output: {
              comments: false
            }
          })
        ]
      },
      /**
       * Immediately Invoked Function Expression (IIFE).
       */
      {
        file: `${baseDir}browser/iife.js`,
        name: libraryName,
        format: 'iife',
        globals: {
          'cross-fetch': 'fetch'
        },
        esModule: false,
        sourcemap: true,
        plugins: [
          gzipPlugin(),
          terser({
            output: {
              comments: false
            }
          })
        ]
      }
    ],
    plugins
  },
  /**
   * Treeshaken Bundles.
   */
  {
    /** Process individual inputs. */
    input: { ...treeShakeBundles },
    output: [
      /**
       * ES Module.
       */
      {
        dir: `${baseDir}module`,
        format: 'esm',
        globals: {
          'cross-fetch': 'fetch'
        },
        // chunkFileNames: 'chunk-[format]-[hash].js',
        sourcemap: true,
        plugins: [terser()]
      }
    ],
    /* Resolve() - Allow node_modules resolution, so you can use 'external' to control
     * which external modules to include in the bundle
     * https://github.com/rollup/rollup-plugin-node-resolve#usage
     */
    plugins: [
      visualizer({ sourcemap: true }),
      resolve({ preferBuiltins: true, browser: true }),
      ...plugins
    ]
  }
];
