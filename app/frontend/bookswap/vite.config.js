import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
    server: {
        proxy: {
            '/api': 'http://localhost:8080',
        },
    },
    build: {
        outDir: '../../public/build',
        emptyOutDir: true,
    },
    base: command === 'build' ? '/build/' : '/',
}))
