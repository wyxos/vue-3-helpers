import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  server: {
    port: 3000
  },
  plugins: [vue()],
  build: {
    outDir: '../dist',
    lib: {
      entry: path.resolve(__dirname, '../src/main.js'),
      name: 'VueHelpers',
      // the proper extensions will be added
      fileName: 'vue-helpers'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['axios', 'moment'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
