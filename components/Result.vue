<template>
	<NuxtLink :to="'/' + props.slug" class="w-full h-24 border-b-[1px] rounded-md border-neutral-100 flex flex-row gap-3 p-4 cursor-pointer hover:bg-slate-100 transition last:border-0">
		<img :src="props.image" class="rounded-lg w-16 h-16 aspect-square object-cover object-top"/>
		<div class="flex flex-col">
			<h2 class="text-slate-900 text-xl font-bold">{{ props.title }}</h2>
			<div class="text-slate-500 overflow-hidden text-ellipsis inline-block first-letter:uppercase">
				<span v-for="(metier, index) in props.description" :key="metier">
					<span v-if="index > 0 && index < props.description.length - 1">, </span>
					<span v-if="index > 0 && index >= props.description.length - 1"> et</span>
					{{ metier }}
				</span>
			</div>
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