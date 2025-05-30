import { repositoryName } from './slicemachine.config.json';

import fs from 'fs';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	ssr: true,
	modules: ['@nuxt/image', '@nuxt/fonts', '@nuxtjs/prismic', '@nuxtjs/seo'],

	// --- Prismic --- //
	prismic: {
		endpoint: repositoryName,
		preview: false,
		toolbar: false,
	},

	app: {
		head: {
			htmlAttrs: {
				lang: 'fr',
			},
			meta: [
				{
					name: 'google-site-verification',
					content: 'RZ52c6zgVnWQtMRcxr5gWXfv-VC6C75Tyvchjcz40AY',
				},
			],
		},
	},

	// --- Config SSL + Domaine --- //
	// devServer: {
	// 	host: '0.0.0.0',
	// 	port: 3000,
	// 	https: {
	// 		key: fs.readFileSync('key/local.bessarion.dev-key.pem', 'utf8'),
	// 		cert: fs.readFileSync('key/local.bessarion.dev.pem', 'utf8'),
	// 	},
	// },

	runtimeConfig: {
		public: {
			website: 'https://portfolio.bessarion.fr',
		},
	},

	site: {
		url: 'https://portfolio.bessarion.fr',
		name: 'I am Max - Développeur Web',
	},
	robots: {
		disallow: ['/preview', '/slice-simulator'],
	},

	// --- Module Image --- //
	image: {
		loading: 'lazy',
	},

	// --- Module Fonts --- //
	fonts: {
		families: [
			{
				name: 'Poppins',
				provider: 'google',
				weights: [200, 300, 400, 500, 600, 700],
			},
			{
				name: 'Anton',
				provider: 'google',
			},
		],

		experimental: {
			processCSSVariables: true,
		},
	},

	// --- TailwindCSS --- //
	vite: {
		plugins: [tailwindcss()],
	},

	// --- CSS File --- //
	css: ['@/assets/styles/main.css'],
});
