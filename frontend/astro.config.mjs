import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: { port: 3500, host: true},
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].mjs',
          chunkFileNames: 'chunks/chunk.[hash].mjs',
          assetFileNames: 'assets/asset.[hash][extname]',
        }
      },
    },
  },
})
