import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: ['@nuxt/image', '@nuxt/fonts', "@nuxtjs/prismic"],

    // --- Module Image --- //
    image: {
		loading: 'lazy',
	},

    // --- Module Fonts --- //
    fonts: {
		families: [
			{
				name: 'Inter',
				provider: 'google',
				weights: [300, 400, 500, 600, 700],
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

    prismic: {
        endpoint: apiEndpoint || repositoryName
    }
});