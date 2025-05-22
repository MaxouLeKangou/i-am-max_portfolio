<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="my-52"
	>
		<h2 class="text-center">{{ slice.primary.title }}</h2>

		<ul
			class="grid grid-cols-[repeat(auto-fit,_minmax(13.4375rem,_1fr))] gap-5 max-w-[var(--spacing-minwrap)] mx-auto"
		>
			<li v-for="(expertise, index) of slice.primary.expertise">
				<p>
					<NuxtLink
						:to="String(expertise.link.url)"
						:target="expertise.link.target"
						class="flex flex-col items-center gap-4 py-6 bg-dark-800 rounded-xl transition-all hover:scale-105"
						:class="{
							'opacity-50':
								hoverIndex !== index && hoverIndex !== null,
						}"
						@mouseenter="hoverIndex = index"
						@mouseleave="hoverIndex = null"
					>
						<NuxtImg
							:src="String(expertise.thumbnail.url)"
							class="w-14 h-14"
						/>
						<span class="uppercase text-xs tracking-min">{{
							expertise.name
						}}</span>
					</NuxtLink>
				</p>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(
	getSliceComponentProps<Content.ExpertisesSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);

const hoverIndex = ref<number | null>(null);
</script>
