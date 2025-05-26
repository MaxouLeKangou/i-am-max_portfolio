<template>
	<footer class="wrapper pt-24 pb-10 text-center">
		<h2 class="home-title max-w-lg mx-auto">
			{{ footer?.data.title }}
		</h2>

		<div class="flex flex-col gap-10 items-center md:gap-14">
			<p class="animation font-secondary text-md uppercase text-primary">
				<NuxtLink :to="`mailto:${footer?.data.mail}`">
					{{ footer?.data.mail }}
				</NuxtLink>
			</p>
			<ul class="flex gap-6">
				<li v-for="(network, index) of footer?.data.networks">
					<p>
						<NuxtLink
							:to="String(network.link.url)"
							:target="network.link.target"
							class="w-12 h-12 flex justify-center items-center bg-dark-800 rounded-md md:w-16 md:h-16 transition-all hover:scale-105"
							:class="{
								'opacity-50':
									hoverIndex !== index && hoverIndex !== null,
							}"
							@mouseenter="hoverIndex = index"
							@mouseleave="hoverIndex = null"
						>
							<NuxtImg
								:src="String(network.thumbnail.url)"
								alt=""
								class="w-5 h-5 md:w-7 md:h-7"
							/>
						</NuxtLink>
					</p>
				</li>
			</ul>
			<p class="whitespace-pre-wrap text-light-300">
				{{ footer?.data.copyright[0]?.text }}
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
const prismic = usePrismic();

const { data: footer } = await useAsyncData('footer', () =>
	prismic.client.getSingle('footer')
);

const hoverIndex = ref<number | null>(null);
</script>
