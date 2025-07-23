import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './aboutUs.html',
        services: './services.html',
      }
    }
  },
 // base: process.env.VITE_BASE_PATH || '/BassLineSportFishingSite',
 })
