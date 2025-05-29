<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="text-end spacing-block"
	>
		<h2
			class="text-sm font-semibold uppercase tracking-base md:tracking-min mb-5"
		>
			{{ slice.primary.title }}
		</h2>

		<ul class="flex flex-col gap-5 md:gap-10">
			<li v-if="slice.primary.clients.length">
				<p class="uppercase font-semibold mb-1.5">Client(s)</p>
				<ul>
					<li v-for="client of slice.primary.clients">
						<p class="font-light">{{ client.name }}</p>
					</li>
				</ul>
			</li>

			<li v-if="slice.primary.contributors.length">
				<p class="uppercase font-semibold mb-1.5">Contributeur(s)</p>
				<ul>
					<li v-for="contributor of slice.primary.contributors">
						<p class="font-light">{{ contributor.name }}</p>
					</li>
				</ul>
			</li>

			<li v-if="slice.primary.tools.length">
				<p class="uppercase font-semibold mb-1.5">Outil(s)</p>
				<ul>
					<li v-for="tool of slice.primary.tools">
						<p class="font-light">{{ tool.name }}</p>
					</li>
				</ul>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(
	getSliceComponentProps<Content.CreditSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);
</script>
