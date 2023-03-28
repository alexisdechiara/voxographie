<template>
	<div class="flex flex-col justify-start items-center">
		<h2 class="text-5xl font-semibold text-center mt-8">
			Veuillez choisir l'ajout à réaliser
		</h2>
		<div class="w-fit flex flex-col justify-start items-center mt-16 gap-8">
			<CrudButtonLink text="Comédien" url="comedien" icon="lucide:users" />
			<CrudButtonLink text="Voix" url="voix" icon="lucide:volume-2" />
			<CrudButtonLink text="Carton de doublage" url="carton-doublage" icon="lucide:file-volume-2" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>