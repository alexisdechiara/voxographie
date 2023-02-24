<template>
	<NuxtLink :to="'/' + props.slug" class="w-full h-24 border-b-[1px] border-neutral-100 flex flex-row gap-3 p-4 cursor-pointer hover:bg-slate-100 transition last:border-0">
		<img :src="props.image" class="rounded-lg w-16 h-16 aspect-square object-cover object-top"/>
		<div class="flex flex-col">
			<h2 class="text-slate-900 text-xl font-bold">{{ props.title }}</h2>
				<span class="text-slate-600 overflow-hidden text-ellipsis inline-block">{{ props.description }}</span>
		</div>
	</NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
	title: String,
	description: String,
	image: String,
	slug: String
});
</script>