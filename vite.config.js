import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/The-KalyanChronicles/', // Add this line exactly matching your repo name
})