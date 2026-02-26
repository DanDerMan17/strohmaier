import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015', // modern browsers
    minify: 'esbuild', // minification
    sourcemap: false, // optional, remove in prod
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor code into separate chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 500, // optional, to catch large bundles
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});