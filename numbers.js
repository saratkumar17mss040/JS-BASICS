// Numbers

const sum = (num1, num2) => num1 + num2;

console.log(sum(20, 40));

const simpleInterest = (p, t, r) => {
	const si = (p * t * r) / 100;
	return si;
};

console.log(simpleInterest(100, 6, 2));

const kineticEnergy = (m, v) => 0.5 * m * v * v;

console.log(kineticEnergy(5, 10));

const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

console.log(fahrenheitToCelsius(56));

const calcDifferentArea = (a) => {
	const area = a * a;
	const perimeter = 4 * a;
	const surface = 6 * Math.pow(a, 2);
	const volume = Math.pow(a, 3);
	return [
		`Area = ${area}`,
		`Perimeter = ${perimeter}`,
		`Surface = ${surface}`,
		`Volume = ${volume}`,
	];
};

console.log(calcDifferentArea(3));

const calcProfitOrLoss = (costPrice, sellingPrice) => {
	if (sellingPrice > costPrice) {
		return `${sellingPrice - costPrice} Profit`;
	} else if (sellingPrice < costPrice) {
		return `${costPrice - sellingPrice} Loss`;
	}
	return 'No profit or loss';
};

console.log(calcProfitOrLoss(3125, 1125));

const sumOfNaturalDigits = (n) => {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
};

console.log(sumOfNaturalDigits(100));

const oddNumbers = (n) => {
	const arr = [];
	let oddCounter = 0;
	for (let i = 1; n !== oddCounter; i++) {
		if (i % 2 !== 0) {
			arr.push(i);
			oddCounter++;
		}
	}
	return arr;
};

console.log(oddNumbers(4));

const sumOfDigits = (str) => {
	return str
		.split('')
		.map((num) => +num)
		.reduce((sum, num) => sum + num);
};

console.log(sumOfDigits('1234'));

const reverseNumber = (num) => {
	return num.toString().split('').reverse().join('');
};

console.log(reverseNumber(32243));

const rotate = (num, rotations) => {
	const numStr = num.toString();
	return parseInt(numStr.slice(rotations) + numStr.slice(0, rotations));
};

console.log(rotate(1234, 2));

const decimalToBinary = (num) => parseInt(num.toString(2));

console.log(decimalToBinary(5));

const octalToDecimal = (num) => parseInt(num.toString(), 8);

console.log(octalToDecimal(116));
