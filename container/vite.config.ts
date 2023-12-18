import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'container',
    remotes: {
      firstApp: "http://localhost:5002/assets/remoteEntry.js",
      remote: "http://localhost:5003/assets/remoteEntry.js"
    },
    shared: ['react', 'react-dom', 'react-router-dom']
  })],
  build: {
    target: 'esnext'
  },
})
