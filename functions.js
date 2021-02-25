// Functions

const power = (num1, num2) => {
	let temp = num1;
	for (let i = 1; i < num2; i++) {
		num1 = num1 * temp;
	}
	return num1;
};

console.log(power(3, 5));

const areaOfHexagon = (len) => {
	return ((3 * Math.sqrt(3)) / 2) * len * len;
};

console.log(areaOfHexagon(10));

const noOfWords = (sentence) => {
	const word = sentence.split(' ');
	return word.length;
};

console.log(noOfWords('we are neogrammers'));

const minimumNumber = (...num) => {
	return Math.min.apply(null, num);
};

console.log(minimumNumber(1, 2, 3, 4, 5, 56, -6, 7));

const maxNumber = (...num) => {
	return Math.max.apply(null, num);
};

console.log(maxNumber(1044, 55, 6588, 879));

function findTriangle(angle1, angle2, angle3) {
	if (angle1 + angle2 + angle3 !== 180) {
		return 'Not a triangle';
	} else if ((angle1 === angle2) === angle3) {
		return 'Equilateral triangle';
	} else if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) {
		return 'Isoceles triangle';
	} else if ((angle1 !== angle2) !== angle3) {
		return 'Scalen triangle';
	}
}

console.log(findTriangle(30, 30, 190));

const arrayLength = (arr) => {
	let count = 0;
	arr.forEach(() => {
		count++;
	});
	return count;
};

console.log(arrayLength([1, 2, 3, 4]));

const findIndex = (arr, ele) => arr.indexOf(ele);

console.log(findIndex([1, 3, 4], 3));

const replace = (arr, currvalue, replaceval) => {
	let arrCopy = arr.slice();
	for (let i = 0; i < arrCopy.length; i++) {
		if (arrCopy[i] === currvalue) {
			arrCopy[i] = replaceval;
		}
	}
	return arrCopy;
};

console.log(replace([1, 2, 3, 3, 5, 3], 3, 7));

const mergeArray = (arr1, arr2) => arr1.concat(arr2);

console.log(mergeArray([12, 3, 7], [23, 56, 5]));

const charAt = (str, index) => str[index];

console.log(charAt('neogcamp', 4));

const minDates = (date1, date2) => {
	const [date11, month1, year1] = date1.split('/');
	const [date22, month2, year2] = date2.split('/');

	if (year1 > year2) {
		return date2;
	} else if (year1 === year2) {
		if (month1 > month2) {
			return date2;
		} else if (month1 === month2) {
			if (date11 > date22) {
				return date2;
			} else if (date1 === date2) {
				return 'Both are same dates';
			} else {
				return date1;
			}
		} else {
			return date1;
		}
	} else {
		return date1;
	}
};

console.log(minDates('21/01/2021', '23/01/2021'));

const encodeString = (str, n) => {
	for (let i = 0; i < str.length; i++) {
		// let newStr = str.slice();
		// let temp = newStr[i+n];
		// newStr[i] =
	}
};

// console.log(encodeString("neogcamp",2));

const toSentenceCase = (str) => {
	const newStr = str
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
	return newStr;
};

console.log(toSentenceCase('we are neoGrammers'));

const sortArray = (arr) => {
	return arr.sort((a, b) => a - b);
};

console.log(sortArray([100, 83, 32, 9, 45, 61]));

const reverseCharacterOfWord = (str) => {
	const newArr = str.split(' ');
	return newArr.map((ele) => ele.split('').reverse().join('')).join(' ');
};

console.log(reverseCharacterOfWord('we are neoGrammers'));
