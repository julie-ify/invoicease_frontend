export const toCapitalizeCase = (word) => {
	word = word
		.toLowerCase()
		.split(' ')
		.map((str) => {
			let firstLetter = str.substring(0, 1).toUpperCase();
			let remainingLetters = str.substring(1);
			let formatedWord = `${firstLetter}${remainingLetters}`;
			return formatedWord;
		});

	return word.join(' ');
};
