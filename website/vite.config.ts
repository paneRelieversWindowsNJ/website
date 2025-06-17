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
        Charters: './Charters.html',
        AboutUs: './Boat.html',
        Trips: './Trips.html',
        404: "./404.html",
        Crew: "./Crew.html"
      }
    }
  },
 // base: process.env.VITE_BASE_PATH || '/BassLineSportFishingSite',
 })
