<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="spacing-block"
	>
		<NuxtImg
			:src="String(slice.primary.picture.url)"
			alt=""
			class="object-cover w-full max-w-[25rem] mx-auto aspect-[335/490] md:aspect-video md:max-w-none"
		/>
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(
	getSliceComponentProps<Content.ImageSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);
</script>
