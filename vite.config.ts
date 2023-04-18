import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy'
import progress from 'vite-plugin-progress'
import viteEslint from 'vite-plugin-eslint'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import requireTransform from 'vite-plugin-require-transform'
// https://vitejs.dev/config/
export default defineConfig({
  //配置别名路径
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': '/src',
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
      assert: 'assert',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  define: {
    'process.env': {},
  },
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    // requireTransform({ fileRegex: /.js$/ }),
    react(),
    // {
    // babel: {
    //   plugins: [
    //     [
    //       'babel-plugin-styled-components-px2vw',
    //       {
    //         unitToConvert: 'px',
    //         unitPrecision: 5,
    //         minPixelValue: 0,
    //       },
    //     ],
    //   ],
    // },
    // }
    viteEslint({
      failOnError: false,
    }),
    progress(),
    //优化包体积
    {
      ...legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      apply: 'build',
    },
    //按需加载

    //压缩代码
    { ...viteCompression(), apply: 'build' },
    //分析构建
    visualizer() as unknown as PluginOption,
  ],
  css: {
    // 开启 css 的 SourceMap
    devSourcemap: true,
    // 配置 Less
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 加载自己的 less 变量
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
    },
  },
})
