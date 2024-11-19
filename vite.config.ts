import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-react',
  },
  base: './',
  server: {
    port: 1234,
    strictPort: true,
  },
})
