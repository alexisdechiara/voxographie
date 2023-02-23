<template>
  <div class="flex flex-col justify-start items-center w-1/3">
    <template v-for="result in results">
      <Result :title="result.prenom + ' ' + result.nom" :description="result.metiers" :image="result.image" :slug="result.slug"/>
    </template>
  </div>
</template>

<script setup lang="ts">
var results = [
  {
    prenom: "Donald",
    nom: "Reignoux",
    genre: "Homme",
    metiers: "Comédien et directeur artistique",
    image: "https://www.parismanga.fr/wp-content/uploads/2022/01/Donald-Reignoux-e1641289592513.jpeg",
    slug: "donald-reignoux"
  },
  {
    prenom: "Dorothée",
    nom: "Pousséo",
    genre: "Femme",
    metiers: "Comédienne et directrice artistique",
    image: "https://diffusionph.cccommunication.biz/jpgok/RepGR/741/741412_50.jpg",
    slug: "dorothee-pousseo"
  },
  {
    prenom: "Adeline",
    nom: "Chetail",
    genre: "Femme",
    metiers: "Comédienne et directrice artistique",
    image: "https://pbs.twimg.com/profile_images/1617297754119708676/oFp0vkAS_400x400.jpg",
    slug: "adeline-chetail"
  },
]
</script>