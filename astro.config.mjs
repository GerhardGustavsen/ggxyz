import { defineConfig } from 'astro/config';
import tailwindIntegration from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [tailwindIntegration()],
  experimental: { assets: true },
  markdown: {
    remarkPlugins: ['remark-math'],
    rehypePlugins: ['rehype-katex'],
  },
});
