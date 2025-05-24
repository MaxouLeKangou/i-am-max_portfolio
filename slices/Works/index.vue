<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<pre>{{ slice }}</pre>
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(
	getSliceComponentProps<Content.WorksSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);
</script>
