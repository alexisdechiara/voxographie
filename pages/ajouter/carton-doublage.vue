<template>
	<div class="flex flex-col items-center relative min-h-screen">
		<h2 class="pb-8 font-semibold text-4xl">
			Ajout d'un carton de doublage
		</h2>
		<div class="flex flex-col gap-2 min-w-1/3 w-fit font-nunito">
			<div class="flex group gap-x-4 ml-16" v-for="(ligne, index) in lignes" :key="ligne.nom">
				<div class="flex w-full gap-8 items-center group-hover:bg-neutral-100 rounded-lg px-4 py-2 transition-all duration-300 font-semibold">
					<span class="w-full text-right text-xl whitespace-nowrap">{{ ligne.metier }}</span>
					<span class="w-full text-left text-xl whitespace-nowrap">{{ ligne.nom }}</span>
				</div>
				<div class="opacity-0 group-hover:opacity-100 flex w-16 gap-2 items-center rounded-lg transition-all duration-300 font-semibold">
					<CartonDoublageModal :index="index" @nouvelles-valeurs="changerValeurs" @supprimer="supprimerLigne" :valeurs="[ligne.metier, ligne.nom]" :labels="['Métier', 'Nom']" :listes="[metiers]">
						<template v-slot:openButton>
							<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
								<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
							</svg>
						</template>
					</CartonDoublageModal>
					<button class="bg-red-500 text-white rounded-md p-2" @click="supprimerLigne(index)">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 6h18"></path>
							<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
							<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
							<line x1="10" y1="11" x2="10" y2="17"></line>
							<line x1="14" y1="11" x2="14" y2="17"></line>
						</svg>
					</button>
				</div>
			</div>
			<CartonDoublageModal btn-class="bg-neutral-100 flex justify-center text-center rounded-md p-2 mt-8 w-32 mx-auto hover:bg-neutral-200 transition-all duration-300" :index="lignes.length" @nouvelles-valeurs="changerValeurs" @supprimer="supprimerLigne" :labels="['Métier', 'Nom']" :listes="[metiers]">
				<template v-slot:openButton>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="12" y1="5" x2="12" y2="19"></line>
						<line x1="5" y1="12" x2="19" y2="12"></line>
					</svg>
				</template>
			</CartonDoublageModal>
		</div>

	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: "CartonDoublage",
	data() {
		return {
			lignes: Array(),
			metiers: ["Direction artistique", "Studio", "Studio de mixage", "Mixage", "Enregistrement", "Gestion de projet"],
		}
	},
	mounted() {
		this.lignes.push({
			metier: "Direction artistique",
			nom: "Donald reignoux",
		})
		this.lignes.push({
			metier: "Direction artistique",
			nom: "Dorothée Pousséo",
		})
	},
	methods: {
		supprimerLigne(index: number) {
			this.lignes.splice(index, 1)
		},
		changerValeurs(index: number, metier: string, nom: string) {
			if (metier != null || nom != null) {
				this.lignes[index] = { metier: metier, nom: nom }
			}
		},
		nouvelleLigne() {
			this.lignes.push({ metier: "", nom: "" })
		}
	}
})
</script>