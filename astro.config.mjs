// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://madjax315.github.io',
  base: '/fantasy-website',

  vite: {
    plugins: [tailwindcss()]
  }
});