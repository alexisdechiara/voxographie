export const useSlugify = () => {
   return function slugify(text: string) {
		return text
			.toString()					// Conversion en chaîne de caractères
			.normalize('NFKD')			// La méthode normalize() utilisant NFKD renvoie la forme de normalisation Unicode d'une chaîne donnée.
			.toLowerCase()				// Convertit la chaîne en lettres minuscules
			.trim() 					// Supprime les espaces blancs des deux côtés d'une chaîne
			.replace(/\s+/g, '-') 		// Remplace les espaces par -
			.replace(/[^\w\-]+/g, '')   // Retire tous les caractères non-alphanumériques sauf les tirets
			.replace(/\_/g, '-') 		// Remplace _ par -
			.replace(/\-\-+/g, '-') 	// Remplace plusieurs - par un seul -
			.replace(/^-+/, '')         // Retire les tirets de début de texte
			.replace(/\-$/g, ''); 		// Supprime les tirets de fin de texte
   }
}
