<template>
	<header
		class="wrapper w-full pt-5 flex items-center justify-between md:pt-10"
	>
		<component
			:is="route.path === '/' ? 'span' : NuxtLink"
			:to="route.path === '/' ? undefined : '/'"
		>
			<NuxtImg
				:src="header?.data.logo.url"
				class="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
			/>
		</component>

		<button @click="toggleMenu">
			<p class="">
				afficherLeMenu<span class="text-light-300">( )</span>
			</p>
		</button>

		<!-- Menu -->
		<button
			aria-label="Fermer le menu"
			@click="toggleMenu"
			class="fixed z-40 w-screen inset-0 bg-black/50 transition-all duration-300"
			:class="isVisible ? 'translate-x-0' : 'translate-x-full'"
		></button>
		<section
			class="fixed z-50 w-96 max-w-full top-0 right-0 bottom-0 flex flex-col bg-dark-900 pt-5 pr-5 pb-10 pl-10 transition-all duration-300 lg:w-[500px] lg:pt-10 lg:pr-10 lg:pb-14"
			:class="isVisible ? 'translate-x-0' : 'translate-x-full'"
		>
			<div class="flex-grow">
				<div
					class="flex gap-2 flex-wrap justify-between items-center h-10"
				>
					<p>
						<NuxtLink
							:to="`https://bff.ecoindex.fr/redirect/?url=${website}`"
							target="_blank"
						>
							<NuxtImg
								:src="`https://bff.ecoindex.fr/badge/?theme=light&url=${website}`"
								alt="Ecoindex Badge"
								class="h-8"
							/>
						</NuxtLink>
					</p>
					<button @click="toggleMenu">
						<p class="text-light-300">
							menuVisible =
							<span
								class="animate-pulse text-light-100 font-medium"
								>oui</span
							>
						</p>
					</button>
				</div>
				<div class="my-16 flex flex-col gap-3">
					<span class="text-light-300">const menu = [</span>
					<nav class="pl-5 lg:pl-8">
						<ul
							class="animation inline-flex flex-col gap-3 text-sm font-semibold"
						>
							<li v-for="item of header?.data.navigation">
								<p>
									<component
										:is="
											route.path === item.link?.url ||
											item.link?.url === undefined
												? 'span'
												: NuxtLink
										"
										:to="item.link?.url"
										@click="
											route.path !== item.link?.url &&
											toggleMenu()
										"
										:class="
											route.path === item.link?.url
												? 'text-primary'
												: 'text-light-100'
										"
									>
										<span>{{ item.label }}</span>
									</component>
								</p>
							</li>
						</ul>
					</nav>
					<span class="text-light-300">]</span>
				</div>
			</div>

			<div class="flex gap-1.5">
				<div class="flex flex-col gap-1.5 text-base lg:text-desk-sm">
					<p class="text-primary font-semibold tracking-first">
						SITEWEB
					</p>
					<div class="flex flex-col text-white-300 font-light">
						<p>Génération du site réussi le</p>
						<p class="">
							<span>{{ date.date }}</span>
							<span> à </span>
							<span>{{ date.time }}</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	</header>
</template>

<script setup lang="ts">
const route = useRoute();
const prismic = usePrismic();
const website = useRuntimeConfig().public.website;

const { data: header } = await useAsyncData('header', () =>
	prismic.client.getSingle('header')
);

const NuxtLink = resolveComponent('NuxtLink');

const isVisible = ref(false);
const toggleMenu = () => {
	isVisible.value = !isVisible.value;
};

const date = ref({
	date: '',
	time: '',
});

onMounted(() => {
	const now = new Date();
	date.value.date = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
	date.value.time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
});
</script>
