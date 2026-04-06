import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import fs from 'node:fs';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'DigitaButlers-Tabs',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			output: {
				exports: 'named',
				manualChunks: undefined,
				preserveModules: false,
			},
		},
		minify: true,
		sourcemap: false,
	},
	plugins: [
		dts({ include: ['src'] }),
		{
			name: 'generate-css-variants',
			writeBundle() {
				const scssContent = fs.readFileSync('src/style.scss', 'utf8');

				fs.writeFileSync('dist/style.scss', scssContent.replace(/\s+/g, ' ').trim());
			},
		},
	],
	css: {
		postcss: {
			plugins: [postcssPresetEnv()],
		},
	},
	server: {
		port: 3000,
	},
});
