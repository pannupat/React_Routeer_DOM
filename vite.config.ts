import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve:{
    alias:{
      // "@components": path.resolve(__dirname, "src/components"),
      // "@assets": path.resolve(__dirname, "src/assets"),
      // "@function": path.resolve(__dirname, "src/function"),
      // "@testreact":path.resolve(__dirname, "src/testreact"),
      // "@pages":path.resolve(__dirname, "src/pages"),
      // "@workshop_assignment":path.resolve(__dirname, "src/workshop_assignment"),
      // "@Assignment":path.resolve(__dirname, "src/Assignment")

       "@reactrouterdom":path.resolve(__dirname, "src/reactrouterdom"),
       "@AssCss":path.resolve(__dirname, "src/AssCss"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@function": path.resolve(__dirname, "src/function"),
      "@data": path.resolve(__dirname, "src/data"),





    },
    extensions: ['.ts', '.tsx']
  },
  
  server:{
    open:true,
    port:8888,
    proxy:{
      '/api':{
        target: 'http://localhost.8888',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/, '')
      }
    }
  }
})


