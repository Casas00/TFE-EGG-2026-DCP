import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/geoserver': {
        target: 'https://geoexplorer.cttc.es:8443',
        changeOrigin: true,
        secure: false
      }
    }
  }
})