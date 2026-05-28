import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://watchstories.store',
  outDir: './dist',
  build: { format: 'file' },
  integrations: [sitemap()]
});
