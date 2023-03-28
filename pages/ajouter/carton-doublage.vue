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
				<div class="opacity-0 group-hover:opacity-100 flex w-16 gap-2 items-center rounded-lg transition-all font-semibold">
					<CartonDoublageModal :index="index" @nouvelles-valeurs="changerValeurs" @supprimer="supprimerLigne" :valeurs="[ligne.metier, ligne.nom]" :labels="['Métier', 'Nom']" :listes="[metiers]">
						<template v-slot:openButton>
							<Icon name="lucide:edit" />
						</template>
					</CartonDoublageModal>
					<button class="bg-red-500 text-white rounded-md px-2 py-1" @click="supprimerLigne(index)">
						<Icon name="lucide:trash-2" />
					</button>
				</div>
			</div>
			<CartonDoublageModal btn-class="bg-neutral-100 flex justify-center text-center rounded-md p-2 mt-8 w-32 mx-auto hover:bg-neutral-200 transition-all duration-300" :index="lignes.length" @nouvelles-valeurs="changerValeurs" @supprimer="supprimerLigne" :labels="['Métier', 'Nom']" :listes="[metiers]">
				<template v-slot:openButton>
					<Icon name="lucide:plus" class="text-2xl" />
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