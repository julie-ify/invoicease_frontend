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

// Converts the currency and price to human readable format e.g £2,000
export const currencyConverter = (price) => {
	const currencySymbol = '£';

	const formattedAmount = `${currencySymbol} ${price.toLocaleString('en-UK', {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
	})}`;

	return formattedAmount;
};
