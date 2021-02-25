// Arrays

const sumOfArray = (arr) => arr.reduce((acc, ele) => acc + ele);

console.log(sumOfArray([10, 4, 5, 2, 5, 6, 9]));

const avgOfArray = (arr) => arr.reduce((acc, ele) => acc + ele) / arr.length;

console.log(avgOfArray([1, 2, 3, 4, 5]));

const maxAndMinOfArray = (arr) => [
	`Max = ${Math.max.apply(null, arr)}`,
	`Min = ${Math.min.apply(null, arr)}`,
];

console.log(maxAndMinOfArray([1, 2, 3, 44, 5, 566, 343, -75, 43]));

const Median = (arr) => {
	let median = 0;
	if (arr.length % 2 === 0) {
		median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
	} else {
		median = arr[arr.length - 1] / 2;
	}
	return median;
};

console.log(Median([1, 2, 3, 4, 5]));

const mode = (arr) => {
	let numMap = new Map();
	for (let num of arr) {
		numMap.set(num, numMap.has(num) ? numMap.get(num) + 1 : 1);
	}
	return [...numMap].sort((a, b) => b[1] - a[1])[0][0];
};

console.log(mode([1, 3, 4, 5, 2, 5, 2, 2, 2, 4, 64, 21, 1, 24, 4, 32, 56, 7]));

const sumOfTwoArrays = (arr1, arr2) => {
	const sumArr = (arr) => arr.reduce((acc, ele) => acc + ele);
	return sumArr(arr1) + sumArr(arr2);
};

console.log(sumOfTwoArrays([3, 5, 2, 9, 4], [6, 2, 8, 1, 3]));

const countVowelsAndConsonants2 = (str) => {
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

console.log(countVowelsAndConsonants2('hello world programming 133343$$'));

const rightShift = (arr, x) => {
	for (let i = 0; i < x; i++) {
		arr.unshift(arr.pop());
	}
	return arr;
};

console.log(rightShift([1, 2, 3, 4, 5], 1));

const sumOfTwoMatrix = (arr1, arr2) => {
	const arr1ColLen = arr1[0].length;
	const arr2ColLen = arr2[0].length;
	if (
		arr1.length === arr2.length &&
		arr1.every((subArray) => subArray.length === arr2ColLen) &&
		arr2.every((subArray) => subArray.length === arr1ColLen)
	) {
		const sumArray = [];
		for (let i = 0; i < arr1.length; i++) {
			let currentRow = arr1[i];
			let newRowArray = [];
			for (let j = 0; j < currentRow.length; j++) {
				newRowArray.push(currentRow[j] + arr2[i][j]);
			}
			sumArray.push(newRowArray);
		}
		return sumArray;
	}
	return 'Given two matrices are of different dimensions. No addition possible';
};

console.log(
	sumOfTwoMatrix(
		[
			[1, 2, 3],
			[4, 5, 6],
		],
		[
			[1, 2, 3],
			[4, 5, 6],
		]
	)
);

const transposeMatrix = (arr) => {
	return Object.keys(arr[0]).map((col) => {
		return arr.map((row) => {
			return row[col];
		});
	});
};

console.log(
	transposeMatrix([
		[1, 2, 3],
		[4, 5, 6],
	])
);

const diagonalMatrix = (arr) => {
	const arrLen = arr.length;
	const isSameDimension = arr.every((subArray) => {
		return subArray.length == arrLen;
	});
	if (isSameDimension) {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				if ((arr[i][j] === 1 && i !== j) || (arr[i][j] !== 1 && i === j)) {
					return 'Given matrix is not an identity matrix';
				}
			}
		}
		return 'Given matrix is an identity matrix';
	}
	return 'Given matrix is not a square matrix as identity matrix needed to be a square matrix';
};

console.log(
	diagonalMatrix([
		[1, 0],
		[0, 1],
	])
);
