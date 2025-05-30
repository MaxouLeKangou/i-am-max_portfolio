<template>
	<div class="my-20">
		<h1 class="font-secondary text-lg uppercase text-center my-10">
			Projets
		</h1>
		<!-- <pre>{{ works }}</pre> -->
		<ul
			class="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-5 sm:grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))]"
		>
			<li v-for="work of works" class="aspect-[335/490] md:aspect-video">
				<NuxtLink
					:to="`work/${work.uid}`"
					class="relative flex flex-col justify-end w-full h-full p-5 md:p-10 md:flex-row md:justify-between md:items-end"
				>
					<h2 class="font-secondary uppercase text-sm">
						{{ work.data.meta_title }}
					</h2>

					<NuxtImg
						:src="work.data.meta_image.url ?? undefined"
						alt=""
						class="absolute inset-0 w-full h-full -z-10 object-cover rounded-3xl"
					/>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const prismic = usePrismic();

const { data: works } = await useAsyncData('works', () =>
	prismic.client.getAllByType('work', {
		pageSize: 20,
	})
);

useHead({
	title: 'I am Max - Projets',
});
</script>
