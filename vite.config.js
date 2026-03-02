import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/geoserver': {
        target: 'http://coastal-monitoring:8080',
        changeOrigin: true,
        secure: false
      }
    }
  }
})