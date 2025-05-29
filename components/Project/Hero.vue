<template>
	<!-- <pre>{{ data }}</pre> -->

	<section
		class="flex flex-col justify-between min-h-[calc(100vh_-_var(--spacing-mb-header))] md:min-h-[calc(100vh_-_var(--spacing-desk-header))]"
	>
		<div class="flex flex-col gap-0.5 uppercase mt-36">
			<h1 class="text-lg font-secondary leading-[100%]">
				{{ data.data.meta_title }}
			</h1>
			<p>{{ data.data.meta_subtitle }}</p>
		</div>
		<div class="flex justify-end my-10">
			<NuxtImg
				:src="String(data.data.meta_image.url)"
				alt=""
				class="aspect-video max-w-4/5 md:max-w-1/2"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

const props = defineProps<{
	data: Content.WorkDocument;
}>();
</script>
