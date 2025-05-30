import { apiEndpoint, repositoryName } from './slicemachine.config.json';

import fs from 'fs';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	ssr: true,
	modules: ['@nuxt/image', '@nuxt/fonts', '@nuxtjs/prismic'],

	// --- Prismic --- //
	prismic: {
		endpoint: apiEndpoint || repositoryName,
	},

	// --- Config SSL + Domaine --- //
	devServer: {
		host: '0.0.0.0',
		port: 3000,
		https: {
			key: fs.readFileSync('key/local.bessarion.dev-key.pem', 'utf8'),
			cert: fs.readFileSync('key/local.bessarion.dev.pem', 'utf8'),
		},
	},

	// --- Runtime Config --- //
	runtimeConfig: {
		public: {
			website: 'https://portfolio.bessarion.fr',
		},
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
	css: ['@/assets/styles/main.css'],

	// --- SEO --- //
	app: {
		head: {
			htmlAttrs: {
				lang: 'fr',
			},
			title: 'I am Max - Front-end Développeur',
			meta: [
				{ name: 'robots', content: 'index, follow' },
				{
					name: 'description',
					content:
						'Développeur frontend spécialisé en sites performants avec Nuxt.js, Tailwind CSS et CMS headless (Strapi, Prismic). Idéal pour e-commerce & entreprises.',
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
		},
	},
});
