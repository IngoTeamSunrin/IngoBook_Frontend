import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';


export default {
	preprocess: preprocess({
		scss: { includePaths: ['src', 'node_modules'] }
	}),
	kit: {
		adapter: adapter({ out: `build` }),
	}
};

