<script lang="ts" setup>
const route = useRoute();
const client = useSupabaseClient();
const { data } = await useAsyncData('comedien', async () => {
	const { data } = await client.from('comedien').select('*').eq('slug', route.params.slug).single();
	return data;
})

const url = await client.storage.from('images').getPublicUrl(`comediens/${route.params.slug}/profil`).data.publicUrl

let comedien = data.value
console.log(data);
console.log(comedien);


</script>

<template>
	<div class="flex flex-col justify-start items-center overflow-auto pt-32">
		<div class="flex flex-col items-start justify-start rounded-3xl overflow-hidden gap-x-1 gap-y-0.5 w-[498px]">
			<div class="flex flex-row gap-0.5 w-full">
				<nuxt-img :src="url" class="w-[248px] h-[262px] aspect-square object-cover" />
				<div class="flex flex-col gap-0.5 w-full">
					<div v-for="index in 4" class="flex flex-row w-full justify-between">
						<nuxt-img v-for="index in 5" :src="url" class="h-16 w-12 object-cover" />
					</div>
				</div>
			</div>
			<div v-for="index in 3" class="flex flex-row w-full justify-between">
				<nuxt-img v-for="index in 10" :src="url" class="h-16 w-12 object-cover" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
