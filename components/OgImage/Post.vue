<template>
	<div class="h-full w-full flex items-start justify-start bg-dark-900">
		<div class="flex items-start justify-start h-full">
			<div class="flex flex-col gap-4 w-full h-full">
				<h1
					class="text-[5rem] p-20 font-black text-left text-light-100"
				>
					{{ title }}
				</h1>
				<p class="text-2xl font-light pb-10 px-20 mb-0 text-light-200">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		headline?: string;
		title?: string;
		description?: string;
		image?: string;
	}>(),
	{
		headline: 'I am Max',
		title: 'I am Max - Développeur Web',
		description:
			'Développeur web frontend spécialisé en sites performants avec Nuxt.js, Tailwind CSS et CMS headless (Strapi, Prismic). Idéal pour e-commerce & entreprises',
		image: '/img/logo.webp',
	}
);
</script>
