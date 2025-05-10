import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../static',
    emptyOutDir: true,
    sourcemap: true
  },
  server: {
    proxy: {
      '/ask': {
        target: process.env.API_URL,
        changeOrigin: true,
        secure: true
      },
      '/chat': {
        target: process.env.API_URL,
        changeOrigin: true,
        secure: true
      }
    }
  }})