// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/devtools", "@nuxtjs/tailwindcss", "nuxt-meilisearch"],
	meilisearch: {
		hostUrl: "https://ms-adf78ae33284-106.lon.meilisearch.io",
		searchApiKey: "a63da4928426f12639e19d62886f621130f3fa9ff3c7534c5d179f0f51c4f303",
		serverSideUsage: false,
		instantSearch: {
			theme: "reset",
		},
		clientOptions: {
			placeholderSearch: true,
			finitePagination: true,
		},
	},
});
