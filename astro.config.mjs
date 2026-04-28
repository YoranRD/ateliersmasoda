import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yoranrd.github.io',
  base: '/ateliersmasoda',
  output: 'static',
  integrations: [sitemap()],
});
