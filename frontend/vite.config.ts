/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setupTest.ts'],
    css: true
  },
  build: {
    outDir: 'nairabook_ui_v1',
    rollupOptions: {
      output: {
        entryFileNames: 'nairabook_ui_v1.js', // Specify the output file name
        chunkFileNames: 'nairabook_ui_v1-[name].js',
        assetFileNames: 'nairabook_ui_v1-[name].[ext]'
      }
    }
  }
})
