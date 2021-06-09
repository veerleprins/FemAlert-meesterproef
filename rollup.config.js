import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url'
import svelte from 'rollup-plugin-svelte'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'
import sveltePreprocess from 'svelte-preprocess'
import alias from '@rollup/plugin-alias'
import sapperEnv from 'sapper-environment'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const warningIsIgnored = (warning) =>
  warning.message.includes(
    'Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification'
  ) || warning.message.includes('Circular dependency: node_modules')

// Workaround for https://github.com/sveltejs/sapper/issues/1266
const onwarn = (warning, _onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  warningIsIgnored(warning) ||
  console.warn(warning.toString())

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
  },
})
const aliases = alias({
  resolve: ['.svelte', '.js'],
  entries: [
    {
      find: '@/components',
      replacement: path.resolve(__dirname, 'src/components'),
    },
    {
      find: '@/styles',
      replacement: path.resolve(__dirname, 'src/styles'),
    },
    {
      find: '@/stores',
      replacement: path.resolve(__dirname, 'src/stores'),
    },
    {
      find: '@/utils',
      replacement: path.resolve(__dirname, 'src/utils'),
    },
  ],
})

// Warn Rollup https://github.com/sveltejs/sapper-template/issues/302
export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      aliases,
      replace({
        preventAssignment: true,
        values: {
          ...sapperEnv(),
          'process.browser': true,
          'process.env.NODE_ENV': JSON.stringify(mode),
        },
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess,
      }),
      url({
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        publicPath: '/client/',
      }),
      resolve({
        preventAssignment: true,
        browser: true,
        dedupe: ['svelte'],
        // aliases,
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      aliases,
      replace({
        preventAssignment: true,
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        generate: 'ssr',
        hydratable: true,
        dev,
        preprocess,
      }),
      url({
        sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
        publicPath: '/client/',
        emitFiles: false, // already emitted by client build
      }),
      resolve({
        preventAssignment: true,
        dedupe: ['svelte'],
        // aliases,
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        preventAssignment: true,
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
}
