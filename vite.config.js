import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173
  },
  esbuild: {
    target: 'es2020'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  }
})