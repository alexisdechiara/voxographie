<template>
	<NuxtLink :to="route.path + '/' + url" class="bg-neutral-100 w-full rounded-2xl font-nunito flex flex-row items-center gap-6 px-8 py-6 text-3xl font-semibold hover:bg-neutral-200 cursor-pointer duration-150 transition-colors ">
		<Icon v-if="icon" :name="icon" class="text-4xl" />
		{{ text }}
	</NuxtLink>
</template>

<script lang="ts" setup>
const route = useRoute();
defineProps<{
	text: String
	url: String
	icon?: String
}>()
</script>
