import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue()],
   server: {
      port: 40001,
      proxy: {
         '/api': {
            target: 'http://localhost:40000',
            changeOrigin: true,
            //rewrite: (path) => path.replace(/^\/api/, '')
         }
      }
   }
})
