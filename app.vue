<template>
	<div class="relative inset-0">
		<h1 class="transition-all duration-300 absolute font-bold" :class="[isEmpty ? 'text-left text-lg left-2 top-2 ' : 'top-64 left-1/2 -translate-x-1/2 text-center text-6xl pb-12']"> <span class="font-handwriting" :class="[isEmpty ? 'pr-0.5' : 'pr-2']">V</span>oxographie</h1>
		<div class="transition-transform duration-300 absolute w-1/3 left-1/2 top-2 -translate-x-1/2" :class="[isEmpty ? ' translate-y-[50vh]' : 'translate-y-0']" id="meilisearch-container">
			<ais-instant-search :search-client="searchClient" index-name="steam-video-games">
				<ais-search-box placeholder="Rechercher un comédien de doublage" :class-names="{
					'ais-SearchBox-form': 'relative',
					'ais-SearchBox-input': 'transition-all duration-300 font-nunito font-semibold rounded-full w-full bg-neutral-100 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-0 focus:ring-0 p-3 h-12 pl-12',
					'ais-SearchBox-submitIcon': 'absolute w-4 inset-y-0 h-full left-4 flex items-center text-neutral-900',
					'ais-SearchBox-resetIcon': 'absolute inset-y-0 h-full right-4 flex items-center text-neutral-900'
				}" >
				</ais-search-box>
				<ais-state-results>
					<template v-slot="{ results: { hits, query } }">
						<div v-if="checkAndUpdateSearch(query)">
							<ais-hits v-if="hits.length > 0" class="pt-3 bg-white">
								<template v-slot:item="{ item }">
									<Result :title="item.name" :description="item.releaseDate" :image="item.image"></Result>
								</template>
							</ais-hits>
							<div v-else>
								No results have been found for {{ query }}.
							</div>
						</div>
						<div v-else id="empty-search">
						</div>
					</template>
				</ais-state-results>
			</ais-instant-search>
		</div>
	</div>
</template>

<script setup lang="ts">
const searchClient = useMeilisearchClient();
let isEmpty: Boolean = true;
function checkAndUpdateSearch(query: String) {
	isEmpty != query.length > 0
	return query.length > 0
}

</script>

<style>
.typing .ais-SearchBox-input {
padding-left: 2.5rem; 
font-size: 0.875rem;
line-height: 1.25rem; 
height: 2rem; 
}

.v-enter-active {
	transition-delay: 300ms;
}

.v-leave-active {
	transition: none;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>