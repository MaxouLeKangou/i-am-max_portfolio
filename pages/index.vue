<template>
	<Header />
	<SliceZone :components="components" :slices="page?.data.slices ?? []" />
</template>

<script setup lang="ts">
import { components } from '~/slices';

const prismic = usePrismic();
const { data: page } = await useAsyncData('home', () =>
	prismic.client.getSingle('home')
);

useHead({
	title: page.value?.data.meta_title ?? '',
	meta: [
		{
			name: 'description',
			content: page.value?.data.meta_description ?? '',
		},
	],
});

defineOgImageComponent('Post', {
	title: page.value?.data.meta_title ?? '',
	description: page.value?.data.meta_description ?? '',
});
</script>
