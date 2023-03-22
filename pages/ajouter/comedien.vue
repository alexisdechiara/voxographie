<template>
	<div class="flex flex-col items-center justify-center relative min-h-screen">
		<h2 class="pb-16 font-semibold text-4xl">
			Ajout d'un comédien
		</h2>
		<div class="flex flex-col items-center gap-8 w-1/3 pb-16 font-nunito">
			<div class="flex justify-between gap-16 w-full">
				<div class="relative w-full">
					<input type="text" id="prenom" v-model="prenom" class="form-input  font-semibold rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm placeholder-transparent text-gray-900 bg-neutral-100 border-0 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-0 peer" placeholder="Prénom" required />
					<label for="prenom" class="absolute  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:cursor-text">Prénom*</label>
				</div>
				<div class="relative w-full">
					<input type="text" id="nom" v-model="nom" class="form-input  font-semibold rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm placeholder-transparent text-gray-900 bg-neutral-100 border-0 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-0 peer" placeholder="Nom" required />
					<label for="nom" class="absolute  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:cursor-text peer-focus:scale-75 peer-focus:-translate-y-4">Nom*</label>
				</div>
			</div>
			<div class="flex items-center justify-center w-full">
				<label for="image-url" class="overflow-hidden flex flex-row items-center justify-between w-full border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 transition-all duration-300 hover:brightness-95" :class="image !== null ? 'h-full' : 'h-64'">
					<div class="flex flex-col items-center justify-center pt-5 pb-6 px-4 w-full">
						<svg class="w-10 h-10 mb-3 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
							<path d="M12 12v9"></path>
							<path d="m16 16-4-4-4 4"></path>
						</svg>
						<p class="mb-2 text-sm text-neutral-600 text-center"><span class=" font-semibold">Ajouter une photo de profil</span> en cliquant ou par glisser-déposer</p>
						<p class="text-xs text-neutral-600">PNG, JPG or WebP</p>
					</div>
					<input id="image-url" type="file" accept="image/jpg, image/jpeg, image/png, image/webp" class="form-input hidden" @change="televerserImage" />
					<img id="previsualiation" class="aspect-square object-cover object-center w-64 h-fit" :class="image !== null ? 'block' : 'hidden'">
				</label>
			</div>
		</div>
		<button type="button" @click="valider" class="absolute flex flex-row gap-2 right-8 bottom-8 rounded-lg px-3 py-2 uppercase transition-all" :class="[verifierFormulaire() ? 'bg-blue-500 text-white cursor-pointer hover:opacity-90' : 'bg-neutral-50 text-neutral-400 cursor-not-allowed']">
			Valider
		</button>
	</div>
</template>

<script lang="ts" setup>
import { useSlugify } from '~~/composables/useSlugify';
const client = useSupabaseClient();
const slugify = useSlugify();

const prenom = ref('');
const nom = ref('');
const image: any = ref(null);


function televerserImage(event: any) {
	image.value = event.target.files[0]
	previsualiserImage()
}

function previsualiserImage() {
	if (image.value !== null) {
		let src = URL.createObjectURL(image.value)
		let preview: HTMLElement = document.getElementById("previsualiation")!;
		//@ts-ignore
		preview.src = src;
	}
}


function verifierFormulaire() {
	return prenom.value !== '' && nom.value !== '' && image.value !== null
}

async function valider() {
	if (verifierFormulaire()) {

		await client
			.from('comeen')
			.insert([
				//@ts-ignore
				{
					prenom: prenom.value,
					nom: nom.value,
					slug: slugify(prenom.value + ' ' + nom.value)
				},
			])

		await client
			.storage
			.from('imas')
			.upload('/comediens/' + slugify(prenom.value + ' ' + nom.value) + '/profil', image.value)

		navigateTo('/ajouter')
	}

}
</script>