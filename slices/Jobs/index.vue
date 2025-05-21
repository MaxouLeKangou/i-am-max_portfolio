<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<h2>{{ slice.primary.title }}</h2>

		<ul>
			<li v-for="job of slice.primary.jobs">
				<NuxtImg :src="String(job.thumbnail.url)" />
				<p>
					<span>{{ job.job }}</span>
					<span> à </span>
					<span>{{ job.company }}</span>
				</p>

				<p>
					<span>{{ job.job_start_date }}</span>
					<span> - </span>
					<span>{{ job.job_end_date }}</span>
				</p>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(
	getSliceComponentProps<Content.JobsSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);
</script>
