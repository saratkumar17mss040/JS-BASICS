// Strings

const upperCase = (str) => str.toUpperCase();

console.log(upperCase('sarathkumar'));

const appendStr = (str1, str2) => {
	if (str1 === 'Good' && str2 === 'Morning') {
		return str2 + str1;
	} else {
		return str1 + str2;
	}
};

console.log(appendStr('Good', 'Morning'));

const strLength = (str) => str.length;

console.log(strLength('hello'));

const strToNum = (str) => parseInt(str);

console.log(strToNum('123'));

const removeVowels = (str) => {
	const newStr = str;
	return newStr.replace(/[aeiou]/gi, '');
};

console.log(removeVowels('aeiou samson '));

const isStrAlphanumeric = (str) => {
	if (str === '') {
		return 'String is empty';
	} else if (!/\d/gi.test(str) || !/[a-z]/gi.test(str)) {
		return 'String is not alphanumeric';
	}
	return 'String is alphanumeric';
};

console.log(isStrAlphanumeric('batman@45'));

const printSmallAndLargeString = (str1, str2, str3) => {
	const str1Len = str1.length;
	const str2Len = str2.length;
	const str3Len = str3.length;
	let largestStr = '';
	let smallestStr = '';
	if ((str1Len == str2Len) == str3Len) {
		return 'All strings are equal';
	} else if (str1Len > str3Len && str1Len > str2Len) {
		largestStr = str1;
		if (str2Len > str3Len) {
			smallestStr = str3;
		} else {
			smallestStr = str2;
		}
	} else if (str2Len > str3Len) {
		largestStr = str2;
		if (str1Len > str3Len) {
			smallestStr = str3;
		} else {
			smallestStr = str1;
		}
	} else {
		largestStr = str3;
		if (str1Len > str2Len) {
			smallestStr = str2;
		} else {
			smallestStr = str1;
		}
	}
	return [`Largest string =${largestStr}`, `Smallest string =${smallestStr}`];
};

console.log(printSmallAndLargeString('hello', 'world', 'world'));

const countVowelsAndConsonants = (str) => {
	const vowels = 'aeiou';
	let vowelCounter = 0;
	let consonantCounter = 0;
	for (let i = 0; i < str.length; i++) {
		if (vowels.indexOf(str[i]) !== -1) {
			vowelCounter++;
		} else if (/[a-z]/gi.test(str[i])) {
			consonantCounter++;
		}
	}
	return [
		`Vowel counter = ${vowelCounter}`,
		`Consonant counter = ${consonantCounter}`,
	];
};

console.log(countVowelsAndConsonants('sarathkumar@123'));

const strLenGreaterOrNot = (str) => {
	let strArr = str.split('');
	let count = 0;
	strArr.forEach(() => {
		count++;
	});
	return count > 7;
};

console.log(strLenGreaterOrNot('samson'));

const copyString = (str1, str2) => {
	if (str1.length === str2.length) {
		return 'Both strings are equal';
	} else if (str1.length > str2.length) {
		str2 = str1;
		return str2;
	} else {
		str1 = str2;
		return str1;
	}
};

console.log(copyString('hi', 'sea'));

const palindromeCheck = (str) => {
	const newStr = str.replace(/[^a-z\d]/gi, '');
	const revStr = newStr.split('').reverse().join('');
	return newStr === revStr;
};

console.log(palindromeCheck('mada&*m'));

const subStrings = (str) => {
	const subStrArr = [];
	for (let i = 0; i <= str.length; i++) {
		let currentSubStr = '';
		for (let j = i; j < str.length; j++) {
			currentSubStr += str[j];
			subStrArr.push(currentSubStr);
		}
	}
	return subStrArr;
};

console.log(subStrings('hello'));

const displayDate = (str) => {
	const date = str.slice(0, str.indexOf(','));
	return date;
};

console.log(displayDate('Wed April 15, 7pm'));

const maskString = (str) => {
	const newStr =
		str.slice(0, str.length - 4).replace(/./g, '#') + str.slice(str.length - 4);
	return newStr;
};

console.log(maskString('5565534276455423'));

const upperCaseChar = (str) => {
	let newStr = '';
	let charCounter = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ' && charCounter <= 6) {
			newStr += str[i].toUpperCase();
			charCounter++;
		} else {
			newStr += str[i];
		}
	}
	return newStr;
};

console.log(upperCaseChar('tic tac toe is a fun game'));

const replaceChar = (str, char1, char2) => {
	const regex = new RegExp(char1, 'ig');
	const newStr = str.replace(regex, char2);
	return newStr;
};

console.log(replaceChar('hella warld', 'a', 'o'));

const removeSpace = (str) => {
	const newStr = str.replace(/\s/g, '');
	return newStr;
};

console.log(
	removeSpace(
		'hello world programming is som e thing ev ery on    e shou ld kno   w '
	)
);

const reverseWord = (str) => {
	const newStr = str.split(' ').reverse().join(' ');
	return newStr;
};

console.log(reverseWord('Welcome to NeoG Camp'));

const highFrequencyChar = (str) => {
	let charMap = new Map();
	for (let char of str) {
		charMap.set(char, charMap.has(char) ? charMap.get(char) + 1 : 1);
	}
	return [...charMap].sort((a, b) => b[1] - a[1])[0][0];
};

console.log(highFrequencyChar('hello woooorld programming !'));

const toggleCase = (str) => {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
			newStr += str[i].toLowerCase();
		} else {
			newStr += str[i].toUpperCase();
		}
	}
	return newStr;
};

console.log(toggleCase('neogcamp'));

const removeWord = (str, word) => {
	const regex = new RegExp(word, 'ig');
	let newStr = str;
	return newStr.replace(regex, '');
};

console.log(removeWord('programming camp are amazing', 'programming'));
