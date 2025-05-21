<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<h2>{{ slice.primary.title }}</h2>
		<p>{{ parsedDescription }}</p>

		<HomeWord :variable="String(slice.primary.variable)" v-model="word" />
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

const props = defineProps(
	getSliceComponentProps<Content.HighlightSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);

const birthday = useBirthday();

// Extract word between {{ }}
const match = props.slice.primary.description?.match(/\{\{(.*?)\}\}/);
const initialWord = match ? match[1].trim() : '';
const word = ref(initialWord);

// Dynamic description
const parsedDescription = computed(() => {
	let description = props.slice.primary.description || '';

	// Replace ||year||
	description = description.replace(
		/\|\|year\|\|/g,
		birthday.value.toString()
	);

	// Replace {{...}}
	description = description.replace(/\{\{.*?\}\}/g, word.value);

	return description;
});
</script>
