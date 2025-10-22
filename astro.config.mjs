// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://contactflow.thedifferential.app',
	base: '/',
	build: {
		assets: 'assets'
	}
});
