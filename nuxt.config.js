// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/devtools", "@nuxtjs/tailwindcss", "nuxt-meilisearch"],
	meilisearch: {
		hostUrl: process.env.meilisearch_hostUrl,
		searchApiKey: process.env.meilisearch_searchApiKey,
		adminApiKey: process.env.meilisearch_adminApiKey,
		serverSideUsage: true,
		instantSearch: {
			theme: "reset",
		},
		clientOptions: {
			placeholderSearch: true,
			finitePagination: true,
		},
	},
});
