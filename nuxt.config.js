// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/devtools", "@nuxt/image-edge", "@nuxtjs/tailwindcss", "nuxt-meilisearch", "@nuxtjs/supabase","nuxt-icon"],
	meilisearch: {
		hostUrl: process.env.MEILISEARCH_HOST_URL,
		searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY,
		adminApiKey: process.env.MEILISEARCH_ADMIN_API_KEY,
		serverSideUsage: true,
		instantSearch: {
			theme: "reset",
		},
		clientOptions: {
			placeholderSearch: true,
			finitePagination: true,
		},
	},
	supabase: {
		url: process.env.SUPABASE_URL,
		key: process.env.SUPABASE_KEY,
		serviceKey: process.env.SUPABASE_SERVICE_KEY
  }
});
