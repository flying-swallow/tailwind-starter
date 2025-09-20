import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname (fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    sourcemap: true,
    manifest: "manifest.json",
    rollupOptions: {
      input: {
        main : resolve(__dirname, 'index.html'),
      }
    },
    outDir: 'static',
    emptyOutDir: true, // also necessary
  }, 
})


