import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yoranrd.github.io',
  base: '/ateliersmassoda',
  output: 'static',
  integrations: [sitemap()],
});
