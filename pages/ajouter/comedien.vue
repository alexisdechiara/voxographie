<template>
	<div class="flex flex-col items-center justify-center relative min-h-screen">
		<h2 class="pb-16 font-semibold text-4xl">
			Ajout d'un comédien
		</h2>
		<div class="flex flex-col items-center gap-8 w-1/3 pb-16 font-nunito">
			<div class="flex justify-between gap-16 w-full">
				<CustomInput v-model="prenom" label="Prénom" required />
				<CustomInput v-model="nom" label="Nom" required />
			</div>
			<div class="flex items-center justify-center w-full">
				<label for="image-url" class="group overflow-hidden flex flex-row items-center justify-between w-full border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 transition-all duration-300 hover:brightness-95" :class="image !== null ? 'h-full' : 'h-64'">
					<div class="flex flex-col items-center justify-center pt-5 pb-6 px-4 w-full">
						<Icon name="lucide:upload-cloud" class="text-6xl text-neutral-500 group-hover:text-neutral-600 transition-colors duration-300" />
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