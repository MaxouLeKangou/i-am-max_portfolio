<template>
	<SliceZone :components="components" :slices="page?.data.slices ?? []" />
</template>

<script setup lang="ts">
import { components } from '~/slices';

const prismic = usePrismic();
const { data: page } = useAsyncData('home', () =>
	prismic.client.getSingle('home')
);

useHead({
	title: prismic.asText(page.value?.data.title),
});
</script>
