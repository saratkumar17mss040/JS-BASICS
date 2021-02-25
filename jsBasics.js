// Operators, Branching, Loops

const add = (num1, num2, num3, num4, num5) => {
	return num1 + num2 + num3 + num4 + num5;
};

console.log(add(1, 2, 3, 4, 5));

const oddorEven = (num) => {
	if (num % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
};

console.log(oddorEven(5));

const maxAndMin = (num1, num2) =>
	num1 > num2
		? `Max = ${num1} and Min = ${num2}`
		: `Max = ${num2} and Min = ${num1}`;

console.log(maxAndMin(10, 15));

const maxOutofThree = (num1, num2, num3) => {
	if (num1 > num2) {
		if (num1 > num3) {
			return num1;
		} else {
			return num3;
		}
	} else {
		if (num2 > num3) {
			return num2;
		} else {
			return num3;
		}
	}
};

console.log(maxOutofThree(4, 2, 2));

const minOutOfThree = (num1, num2, num3) => {
	if (num1 < num2 && num1 < num3) {
		return num1;
	} else if (num2 < num3) {
		return num2;
	} else return num3;
};

console.log(minOutOfThree(1, 0, -3));

const daysOfMonth = (mon) => {
	const monthObj = {
		jan: 31,
		feb: 28,
		mar: 31,
		apr: 30,
		may: 31,
		jun: 30,
		jul: 31,
		aug: 31,
		sep: 30,
		oct: 31,
		nov: 30,
		dec: 31,
	};

	for (let key in monthObj) {
		if (key === mon) {
			return monthObj[key];
		}
	}
	return 'Invalid';
};

console.log(daysOfMonth('jan'));

const fizzBuzz = () => {
	let arr = [];
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push('FizzBuzz');
		} else if (i % 3 === 0) {
			arr.push('Fizz');
		} else if (i % 5 === 0) {
			arr.push('Buzz');
		} else {
			arr.push(i);
		}
	}
	return arr;
};

console.log(fizzBuzz());

const triangle = (num) => {
	for (let i = 0; i < num; i++) {
		let str = '';
		for (let j = 0; j < i; j++) {
			str += '*';
		}
		console.log(str);
	}
};

triangle(6);

const multiplicationTable = (num) => {
	for (let i = 1; i <= 12; i++) {
		console.log(`${i} * ${num} = ${i * num}`);
	}
};

multiplicationTable(4);

const fibo = (num) => {
	let arr = [0, 1];
	let n1 = 0,
		n2 = 1;
	for (i = 2; i < num; i++) {
		n3 = n1 + n2;
		arr.push(n3);
		n1 = n2;
		n2 = n3;
	}
	return arr;
};

console.log(fibo(10));

function factorial(num) {
	if (num === 0 || num === 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

console.log(factorial(5));

const primeNumber = (num) => {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return 'Not Prime';
		}
	}
	return 'Prime Number';
};

console.log(primeNumber(12));

const weekDayOrWeekEnd = (day) => {
	const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
	const index = days.indexOf(day);
	return index === 5 || index === 6 ? 'weekEnd' : 'weekDay';
};

console.log(weekDayOrWeekEnd('mon'));
