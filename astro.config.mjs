import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindIntegration from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), tailwindIntegration()],
  markdown: {
    remarkPlugins: ['remark-math'],
    rehypePlugins: ['rehype-katex'],
  },
});
