<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="flex flex-col gap-14 spacing-block md:flex-row-reverse md:items-center"
	>
		<p class="text-sm leading-base md:w-1/2">
			{{ slice.primary.paragraph }}
		</p>

		<NuxtImg
			:src="String(slice.primary.picture.url)"
			alt=""
			class="object-cover w-full max-w-[25rem] mx-auto aspect-[335/490] md:aspect-video md:w-1/2 md:max-w-none"
		/>
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(
	getSliceComponentProps<Content.TextImageSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);
</script>
