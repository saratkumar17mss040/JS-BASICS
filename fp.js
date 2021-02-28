'use strict';

const arr = [1, 2, 3, 4, 5, 11, 20, 30];

Array.prototype.map1 = (callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i], i, arr));
	}
	return newArr;
};

const mapArr = arr.map1((n) => n + 2);
console.log(mapArr);

Array.prototype.filter1 = (callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

const filterArr = arr.filter1((ele) => ele < 3);
console.log(filterArr);

Array.prototype.reduce1 = (callback, accumulator = arr[0]) => {
	for (let i = accumulator === arr[0] ? 1 : 0; i < arr.length; i++) {
		accumulator = callback(accumulator, arr[i], arr);
	}
	return accumulator;
};

const reduceValue1 = arr.reduce1((acc, ele) => acc + ele, 0);
const reduceValue2 = arr.reduce1((acc, ele) => acc + ele);
console.log(reduceValue1);
console.log(reduceValue2);

Array.prototype.some1 = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return true;
		}
	}
	return false;
};

const isSome = arr.some1(arr, (ele) => ele === 5);
console.log(isSome);

Array.prototype.every1 = (callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (!callback(arr[i], i, arr)) {
			return false;
		}
	}
	return true;
};

const isEvery = arr.every1((ele) => ele > 2);
console.log(isEvery);

Array.prototype.find1 = (callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return arr[i];
		}
	}
	return undefined;
};

const findElement = arr.find1((ele) => ele > 3);
console.log(findElement);

Array.prototype.forEach1 = (callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
};

let forEachValue = arr.forEach1((ele) => console.log(ele + 2));
console.log(forEachValue);

const siblingObject = (myObject, ageDifference) => ({
	...myObject,
	age: myObject.age - ageDifference,
});

console.log(siblingObject({ name: 'maha', age: 28 }, 3));

const addColors = (arr, colors) => {
	const newArr = arr.slice();
	return [...newArr, ...colors];
};

console.log(addColors(['red', 'blue', 'green'], ['yellow', 'pink']));

const birthday = (object) => ({ ...object, age: object.age + 1 });

console.log(birthday({ name: 'sam', age: 28 }));

const isNumberLessThan10 = (ele) => ele < 10;
const numbersArrLessThan10 = arr.filter(isNumberLessThan10);

console.log(numbersArrLessThan10);

const arrToObject = (ele) => ({ [ele]: ele });
const arrToObjectMap = arr.map(arrToObject);

console.log(arrToObjectMap);

const sumOfArray = (acc, ele) => acc + ele;
const sum = arr.reduce(sumOfArray);

console.log(sum);

const oddNumberFilter = (ele) => ele % 2 !== 0;
const oddNumberAccumulate = (acc, ele) => acc + ele;

const oddNumberArray = arr.filter(oddNumberFilter);
const sumOfOddNumbers = oddNumberArray.reduce(oddNumberAccumulate);

console.log(sumOfOddNumbers);

const oddNumberFilterIndices = (_, i) => i % 2 !== 0;
const oddNumberIndicesAccumulate = (acc, ele) => acc + ele;

const oddNumberIndicesArray = arr.filter(oddNumberFilterIndices);
const sumOfOddIndicesNumbers = oddNumberIndicesArray.reduce(
	oddNumberIndicesAccumulate
);

console.log(sumOfOddIndicesNumbers);

const biggestNumber = arr.sort((a, b) => b - a)[0];

console.log(biggestNumber);

const numberDivisibleBy10Filter = (ele) => ele % 10 === 0;

const numbersDivisibleBy10Array = arr.filter(numberDivisibleBy10Filter);

console.log(numbersDivisibleBy10Array);

const incrementDecrement = (ele) => (ele % 2 === 0 ? --ele : ++ele);

const changedArray = arr.map(incrementDecrement);

console.log(changedArray);

const sumOfOddEven = (arr) => {
	return arr.reduce(
		(object, ele) => {
			if (ele % 2 === 0) {
				return { ...object, sumOfOdd: object.sumOfOdd + ele };
			} else {
				return { ...object, sumOfEven: object.sumOfEven + ele };
			}
		},
		{ sumOfOdd: 0, sumOfEven: 0 }
	);
};

console.log(sumOfOddEven(arr));

const items = [
	'apple',
	'mango',
	'orange',
	'banana',
	'papaya',
	'jackfruit',
	'kiwi',
];

const countLength = (items) => {
	return items.reduce((countObject, item) => {
		if ([item.length].hasOwnProperty(countObject)) {
			return { ...countObject, [item.length]: countObject[item.length] + 1 };
		} else {
			return { ...countObject, [item.length]: 1 };
		}
	}, {});
};

console.log(countLength(items));

const strArray = ['ae', 'hello', 'mno', 'mn', 'people', 'code', 'vb'];

const vowelsArray = strArray.filter((str) => /[aeiou]/gi.test(str));

console.log(vowelsArray);

const itemsWithSameLength = items.map((item) => ({ [item]: item.length }));

console.log(itemsWithSameLength);

const giveName = (name) => (msg) => `${name} ${msg}`;

console.log(giveName('sam')('is good'));

const giveMsg = giveName('ram');
console.log(giveMsg('is bad'));

const logMessage = (username, msg) =>
	`Username: ${username} and his Message: ${msg}`;
const logId = (fullMsg, id) => `${fullMsg} and his id = ${id}`;

const logger = (id, username, msg) => {
	return logId(logMessage(username, msg), id);
};

console.log(logger(1, 'sam', 'hi'));

const increment = (n) => n + 1;
const square = (n) => n * n;

const compose = (...functions) => (args) =>
	functions.reduce((arg, fn) => fn(arg), args);

const incrementThenSquare = compose(increment, square);
console.log(incrementThenSquare(2));
