<template>
	<div class="relative inset-0" id="homepage-container">
		<h1 class="transition-all duration-300 absolute font-bold text-left text-lg left-2 top-2"> <span class="font-handwriting pr-0.5">V</span>oxographie</h1>																																												<div class="transition-transform duration-300 absolute w-1/3 left-1/2 top-2 -translate-x-1/2 translate-y-0 [&:has(#empty-search)]:translate-y-[50vh]" id="meilisearch-container">
			<ais-instant-search :search-client="searchClient" index-name="steam-video-games">
				<ais-search-box placeholder="Rechercher un comédien de doublage" :class-names="{
					'ais-SearchBox-form': 'relative',
					'ais-SearchBox-input': 'transition-all duration-300 font-nunito font-semibold rounded-full w-full bg-neutral-100 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-0 focus:ring-0 p-3 h-8 pl-10 text-sm big-search',
					'ais-SearchBox-submitIcon': 'absolute w-4 inset-y-0 h-full left-4 flex items-center text-neutral-900',
					'ais-SearchBox-resetIcon': 'absolute inset-y-0 h-full right-4 flex items-center text-neutral-900'
				}" >
				</ais-search-box>
					<ais-state-results>
						<template v-slot="{ results: { hits, query } }">
							<div v-if="query.length > 0" class="pt-8 bg-white">
									<ais-hits v-if="hits.length > 0">
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
</script>

<style lang="scss">

#homepage-container{
	&:has(#empty-search) .ais-SearchBox-input {
	height: 3rem;
	padding-left: 3rem;
	font-size: 1rem;
	}

	&:has(#empty-search) h1 {
		top: 16rem; 
		left: 50%; 
		padding-bottom: 3rem; 
		transform: translateX(-50%); 
		font-size: 3.75rem;
		line-height: 1; 
		text-align: center; 

		&>span {
			padding-right: 0.5rem;
		}
	}
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