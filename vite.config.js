import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Nop_REACT-JS/',
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: 'esbuild',
  },
})
