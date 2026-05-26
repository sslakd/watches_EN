import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://watchstories.store',
  outDir: './dist',
  build: {
    format: 'file'
  }
});
