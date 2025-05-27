<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="spacing-block"
	>
		<h2 class="home-title text-center">{{ slice.primary.title }}</h2>

		<ul
			class="grid sm:grid-cols-[repeat(auto-fit,_minmax(21.875rem,_1fr))] gap-5 max-w-[var(--spacing-minwrap)] mx-auto"
		>
			<li
				v-for="job of slice.primary.jobs"
				class="flex gap-5 items-center py-5 px-3 md:py-10 md:px-5 border-b border-dark-800"
			>
				<div
					class="w-14 h-14 md:w-18 md:h-18 xl:w-20 xl:h-20 flex justify-center items-center bg-dark-800 rounded-xl"
				>
					<NuxtImg
						:src="String(job.thumbnail.url)"
						class="md:w-10 md:h-10"
					/>
				</div>
				<div class="flex flex-col gap-0.5">
					<p>
						<span>{{ job.job }}</span>
						<span> chez </span>
						<span class="uppercase font-bold">{{
							job.company
						}}</span>
					</p>
					<p class="text-xs font-extralight text-light-200">
						<span>{{ useFormatedDate(job.job_start_date) }}</span>
						<span> - </span>
						<span>{{ useFormatedDate(job.job_end_date) }}</span>
					</p>
				</div>
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
