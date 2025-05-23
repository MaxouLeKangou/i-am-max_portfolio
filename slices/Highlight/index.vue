<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		v-if="slice.variation === 'default'"
		class="spacing-block"
	>
		<h2 class="home-title">{{ slice.primary.title }}</h2>
		<p
			class="text-md font-semibold leading-base"
			v-html="parsedDescription"
		></p>

		<HomeWord
			:variable="String(slice.primary.variable)"
			v-model="word"
			class="mt-16"
		/>
	</section>

	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		v-else-if="slice.variation === 'hero'"
		class="min-h-screen flex flex-col justify-between py-10"
	>
		<div class="flex flex-col items-center justify-center flex-grow">
			<h1 class="home-title text-center">{{ slice.primary.title }}</h1>
			<p
				class="uppercase text-center text-lg font-bold leading-min mt-4"
				v-html="parsedDescription"
			></p>
		</div>

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

// Initial word from {{variable}}
const match = props.slice.primary.description?.match(/\{\{(.*?)\}\}/);
const initialWord = match ? match[1].trim() : '';
const word = ref(initialWord);

const baseParsed = computed(() =>
	useParseDynamicText(props.slice.primary.description || '', {
		year: birthday.value,
		variable: word.value,
	})
);

const parsedDescription = computed(() => {
	if (props.slice.variation === 'hero') {
		const text = baseParsed.value;

		// Detect dynamic parts
		const dynamicRegex = /<span class="dynamic-content">(.*?)<\/span>/g;
		const parts: string[] = [];
		let lastIndex = 0;
		let match;

		while ((match = dynamicRegex.exec(text)) !== null) {
			const before = text.slice(lastIndex, match.index).trim();
			if (before) {
				parts.push(
					...before
						.split(/\s+/)
						.map(word => `<span class="block">${word}</span>`)
				);
			}

			const dynamicWords = match[1].trim().split(/\s+/);
			parts.push(
				...dynamicWords.map(
					w => `<span class="block dynamic-content">${w}</span>`
				)
			);

			lastIndex = match.index + match[0].length;
		}

		const after = text.slice(lastIndex).trim();
		if (after) {
			parts.push(
				...after
					.split(/\s+/)
					.map(word => `<span class="block">${word}</span>`)
			);
		}

		return parts.join('');
	}

	return baseParsed.value;
});
</script>
