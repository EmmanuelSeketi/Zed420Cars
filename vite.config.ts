import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Zed420Cars/",
  plugins: [react()],
  server: {
    host: true
  },
  
 
})
