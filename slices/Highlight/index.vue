<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="my-52"
	>
		<h2>{{ slice.primary.title }}</h2>
		<p
			v-html="parsedDescription"
			class="text-md font-semibold leading-base"
		></p>

		<HomeWord
			:variable="String(slice.primary.variable)"
			v-model="word"
			class="mt-16"
		/>
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

const parsedDescription = computed(() => {
	return useParseDynamicText(props.slice.primary.description || '', {
		year: birthday.value,
		variable: word.value,
	});
});
</script>
