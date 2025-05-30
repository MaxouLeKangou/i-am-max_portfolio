<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="spacing-block max-w-[31.25rem] mx-auto md:max-w-[46.875rem]"
	>
		<h2
			class="text-sm font-semibold uppercase tracking-base md:tracking-min mb-5"
		>
			{{ slice.primary.title }}
		</h2>
		<div class="flex flex-col gap-5">
			<p v-for="paragraph of slice.primary.paragraph">
				{{ paragraph.text }}
			</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(
	getSliceComponentProps<Content.AboutSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);
</script>
