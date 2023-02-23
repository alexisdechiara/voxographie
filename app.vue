<template>
  <div class="relative inset-0">
    <h1 class="transition-all duration-500 absolute font-bold" :class="[value != '' ? 'text-left text-lg left-2 top-2 ' : 'top-64 left-1/2 -translate-x-1/2 text-center text-6xl pb-12']"> <span class="font-handwriting" :class="[value != '' ? 'pr-0.5' : 'pr-2']">V</span>oxographie</h1>
    <div class="transition-transform duration-500 absolute w-1/3 left-1/2 top-2 -translate-x-1/2" :class="[value != '' ? 'translate-y-0' : 'translate-y-[50vh]']">
      <div class="relative">
        <input type="text" v-model="value" class="transition-all duration-500 font-nunito font-semibold rounded-full w-full bg-neutral-100 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-0 focus:ring-0 p-3" :class="[value != '' ? 'h-8 pl-10 text-sm' : 'h-12 pl-12']" placeholder="Rechercher un comédien de doublage" id="searchbar">
        <Search class="absolute inset-y-0 h-full left-3 flex items-center pointer-events-none text-neutral-900" :size="value != '' ? 18 : 24" stroke-width="2" id="searchIcon" />
        <X v-if="value != ''" @click="value = ''" class="absolute inset-y-0 h-full right-3 flex items-center text-neutral-900 cursor-pointer" :size="18" stroke-width="2" id="removeIcon" />
      </div>
    </div>
    <div v-if="value != ''" class="absolute inset-0 flex top-24 px-24 min-h-screen">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { X } from 'lucide-vue-next';

const value = ref('')
</script>