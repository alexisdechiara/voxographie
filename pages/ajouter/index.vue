<template>
	<div class="flex flex-col justify-start items-center">
		<h2 class="text-5xl font-semibold text-center mt-8">
			Veuillez choisir l'ajout à réaliser
		</h2>
		<div class="w-fit flex flex-col justify-start items-center mt-16 gap-8">
			<NuxtLink :to="route.path + '/comedien'" class="bg-neutral-100 w-full rounded-2xl font-nunito flex flex-row items-center gap-6 px-8 py-4 text-4xl font-semibold hover:bg-neutral-200 cursor-pointer duration-150 transition-colors ">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
					<circle cx="9" cy="7" r="4"></circle>
					<line x1="19" y1="8" x2="19" y2="14"></line>
					<line x1="22" y1="11" x2="16" y2="11"></line>
				</svg>
				Comédien
			</NuxtLink>
			<NuxtLink :to="route.path + '/voix'" class="bg-neutral-100 w-full rounded-2xl font-nunito flex flex-row items-center gap-6 px-8 py-4 text-4xl font-semibold hover:bg-neutral-200 cursor-pointer duration-150 transition-colors ">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
					<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
					<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
				</svg>
				Voix
			</NuxtLink>
			<NuxtLink :to="route.path + '/carton-doublage'" class="bg-neutral-100 w-full rounded-2xl font-nunito flex flex-row items-center gap-6 px-8 py-4 text-4xl font-semibold hover:bg-neutral-200 cursor-pointer duration-150 transition-colors ">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
					<polyline points="14 2 14 8 20 8"></polyline>
					<line x1="16" y1="13" x2="8" y2="13"></line>
					<line x1="16" y1="17" x2="8" y2="17"></line>
					<line x1="10" y1="9" x2="8" y2="9"></line>
				</svg>
				Carton de doublage
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>