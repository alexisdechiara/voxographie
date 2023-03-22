/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
	theme: {
		extend: {
			fontFamily: {
				handwriting: ["pacifico"],
				nunito: ["nunito"],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class', // only generate classes
  		}),
	],
};
