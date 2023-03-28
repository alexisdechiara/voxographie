<template>
	<button :class="[!btnClass ? 'flex justify-center text-center bg-blue-500 text-white rounded-md p-2' : btnClass]" @click="ouvrirModale">
		<slot name="openButton">
		</slot>
	</button>
	<div v-if="estOuvert" class="fixed inset-0">
		<div class="bg-neutral-500 opacity-25 fixed inset-0 z-0" @click="fermerModale"></div>
		<div class="flex flex-col fixed bg-white rounded-lg shadow-md top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2  p-8">
			<div class="relative w-full h-full">
				<h3 class=" text-center pb-6 text-xl">Ajouter / modifier une ligne du carton de doublage</h3>
				<div class="flex w-full gap-8">
					<CustomInput v-model="nouvellesValeurs[0]" :label="labels[0]" :datalist="listes[0]" />
					<CustomInput v-model="nouvellesValeurs[1]" :label="labels[1]" :datalist="listes[1]" />
				</div>
				<div class="flex items-center justify-between absolute bottom-0 inset-x-0 h-fit font-medium text-sm">
					<button class="p-2 bg-red-500 uppercase w-fit text-white rounded-lg" @click="$emit('supprimer', index)">
						<Icon name="lucide:trash-2" class="text-lg" />
					</button>
					<div class="flex gap-4">
						<button class="px-4 py-2 bg-neutral-200 uppercase w-fit rounded-lg" @click="fermerModale">Annuler</button>
						<button class="px-4 py-2 uppercase w-fit rounded-lg transition-colors duration-300 bg-blue-500 text-white disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400" :disabled="!verifierValeurs" @click="emettreNouvellesValeurs">Valider</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default defineComponent({
	data() {
		return {
			estOuvert: false,
			nouvellesValeurs: Array(),
		}
	},
	props: {
		valeurs: Array,
		labels: Array,
		listes: Array,
		index: Number,
		btnClass: String,
	},
	emits: ["supprimer", "nouvellesValeurs"],
	mounted() {
		this.initialiserValeurs();
	},
	methods: {
		initialiserValeurs() {
			if (this.valeurs) {
				this.nouvellesValeurs[0] = this.valeurs[0] == null ? '' : this.valeurs[0];
				this.nouvellesValeurs[1] = this.valeurs[1] == null ? '' : this.valeurs[1];
			} else {
				this.nouvellesValeurs = ['', '']
			}
		},
		fermerModale() {
			this.estOuvert = false;
			this.initialiserValeurs();
		},
		ouvrirModale() {
			this.estOuvert = true;
		},
		emettreNouvellesValeurs() {
			this.$emit('nouvellesValeurs', this.index, this.nouvellesValeurs[0], this.nouvellesValeurs[1]);
			this.fermerModale();
		}
	},
	computed: {
		verifierValeurs(): boolean {
			return this.nouvellesValeurs! && this.nouvellesValeurs[0] != '' && this.nouvellesValeurs[1] != ''
		}
	}
})
</script>
