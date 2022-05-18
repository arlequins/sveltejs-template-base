import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const IS_GITHUB_PAGES = process.env.USE_GITHUB_PAGES === 'true';
const BASE_PATH = process.env.GITHUB_BASEPATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html',
    }),
    trailingSlash: 'never',

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
    paths: {
      base: IS_GITHUB_PAGES ? '' : BASE_PATH,
    },
    appDir: 'internal',
  },
};

export default config;
