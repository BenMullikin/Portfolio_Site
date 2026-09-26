import adapter from '@sveltejs/adapter-static'; // Assuming you are using the static adapter
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  // Tell mdsvex to handle both standard markdown and svx
  extensions: ['.md', '.svx'],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // CRITICAL: Tell the Svelte compiler to treat .md files as Svelte components
  extensions: ['.svelte', '.md', '.svx'],

  preprocess: [
    mdsvex(mdsvexOptions),
    vitePreprocess()
  ],

  kit: {
    adapter: adapter({
      // static adapter options
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    })
  }
};

export default config;
