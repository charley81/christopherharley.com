// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  experimental: {
    fonts: [
      {
        name: 'Quicksand',
        cssVariable: '--quicksand',
        provider: fontProviders.google(),
        weights: [300, 400, 500, 600, 700],
        styles: ['normal'],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
