import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import fs from 'node:fs';
import typescript from '@rollup/plugin-typescript';

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
		// minify: 'terser',
		minify: true,
		sourcemap: false, // Отключаем sourcemap для уменьшения размера
		terserOptions: {
			compress: {
				passes: 2,
				dead_code: true,
				drop_debugger: true,
				conditionals: true,
				evaluate: true,
				booleans: true,
				loops: true,
				unused: true,
				hoist_funs: true,
				keep_fargs: false,
				hoist_vars: true,
				if_return: true,
				join_vars: true,
				cascade: true,
				side_effects: true,
				warnings: false,
			},
			mangle: {
				properties: {
					regex: /^_/,
				},
			},
			format: {
				comments: false,
				ascii_only: true,
			},
			nameCache: {}, // Это поможет Terser быть более последовательным в переименовании
			keep_classnames: (name) => name === 'Tabs', // Замените на реальное имя класса
			keep_fnames: (name) => name === 'ИмяВашегоКласса', // Замените на реальное имя класса
		},
	},
	plugins: [
		typescript({
			outDir: 'dist',
			declaration: true,
			rootDir: './src',
		}),
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
