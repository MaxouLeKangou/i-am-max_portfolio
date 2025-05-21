<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
	>
		<h2>{{ slice.primary.title }}</h2>

		<ul>
			<li v-for="expertise of slice.primary.expertise">
				<p>
					<NuxtLink
						:to="String(expertise.link.url)"
						:target="expertise.link.target"
					>
						<NuxtImg :src="String(expertise.thumbnail.url)" />
						<span>{{ expertise.name }}</span>
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
</script>
