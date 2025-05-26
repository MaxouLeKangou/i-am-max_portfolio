<template>
	<section
		:data-slice-type="slice.slice_type"
		:data-slice-variation="slice.variation"
		class="min-h-screen spacing-block"
	>
		<h2 class="home-title text-center sticky -z-10 top-20">
			{{ slice.primary.title }}
		</h2>

		<div>
			<ul class="flex flex-col gap-[50vh]">
				<li
					v-for="work of works"
					class="sticky top-32 w-full aspect-[335/490] max-h-[75vh] md:aspect-video"
				>
					<NuxtLink
						:to="`work/${work.uid}`"
						class="relative flex flex-col justify-end w-full h-full p-5 sm:p-10 md:p-20 md:flex-row md:justify-between md:items-end"
					>
						<h3 class="font-secondary uppercase text-lg">
							{{ work.data.meta_title }}
						</h3>

						<ul
							v-if="work.tags.length"
							class="flex gap-2 text-xs xl:mb-5"
						>
							<li
								v-for="tag of work.tags.slice(0, 2)"
								class="py-1.5 px-5 bg-dark-900/20 rounded-full backdrop-blur-md lg:py-2 lg:px-8"
							>
								<span>{{ tag }}</span>
							</li>
						</ul>

						<NuxtImg
							:src="work.data.meta_image.url ?? undefined"
							alt=""
							class="absolute inset-0 w-full h-full -z-10 object-cover rounded-3xl"
						/>
					</NuxtLink>
				</li>
			</ul>
		</div>

		<div class="pt-14 md:pt-28 bg-dark-900">
			<p class="flex justify-center">
				<NuxtLink
					:to="slice.primary.link[0]?.href.url"
					class="link-container w-fit bg-dark-800 rounded-full flex gap-3 items-center py-3.5 px-5 lg:py-4 lg:px-8"
				>
					<span
						class="circle w-5 h-5 bg-primary rounded-full lg:w-7 lg:h-7"
					/>
					{{ slice.primary.link[0]?.label }}
				</NuxtLink>
			</p>
		</div>

		<!-- <pre>{{ works }}</pre> -->
	</section>
</template>

<script setup lang="ts">
import type { Content } from '@prismicio/client';

const prismic = usePrismic();

const props = defineProps(
	getSliceComponentProps<Content.WorksSlice>([
		'slice',
		'index',
		'slices',
		'context',
	])
);

const { data: works } = await useAsyncData('works', () =>
	prismic.client.getAllByType('work', {
		pageSize: props.slice.primary.works ?? undefined,
	})
);
</script>

<style scoped>
@reference "@/assets/styles/main.css";

.link-container {
	position: relative;
	overflow: hidden;
	transition: color 0.3s;
	cursor: pointer;
}

.link-container {
	position: relative;
	transition: color 0.3s;
	z-index: 2;
}

.circle {
	transition:
		transform 0.5s ease-in-out,
		background-color 0.3s;
	z-index: -1;
	border-radius: 50%;
}

.link-container:hover .circle {
	transform: translateY(-50%) scale(20);
}

.link-container:hover {
	@apply text-dark-900;
}
</style>
