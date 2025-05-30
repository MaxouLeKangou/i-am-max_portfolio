<template>
	<ProjectHero :data="work" />

	<SliceZone :components="components" :slices="work?.data.slices ?? []" />
</template>

<script setup>
import { components } from '~/slices';

const prismic = usePrismic();

const route = useRoute();

const { data: work } = await useAsyncData('work', () =>
	prismic.client.getByUID('work', route.params.slug)
);
</script>
