<template>
	<NuxtLink :to="'/' + url" class="bg-neutral-100 w-full rounded-2xl font-nunito flex flex-row items-center gap-6 px-8 py-4 text-4xl font-semibold hover:bg-neutral-200 cursor-pointer duration-150 transition-colors ">
		<!-- <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx="9" cy="7" r="4"></circle>
			<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
			<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
		</svg> -->
		{{ text }}
	</NuxtLink>
</template>

<script lang="ts">
export default {
	props: {
		text: String,
		url: String
	}
}
</script>
