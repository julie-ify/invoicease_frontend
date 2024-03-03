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

// formarts date "2021-08-19" to "19 Aug 2021"
export const dateFormat = (date) => {
	let dateString;
	if (typeof date !== 'string' || !date) {
		dateString = new Date();
	} else {
		dateString = new Date(date);
	}

	let formatedDate = dateString.toLocaleString('default', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});

	return formatedDate;
};
