// Objects and Oops

const studentDetails = [
	{
		roll: '1',
		name: 'Rohan Singh',
		maths: 86,
		science: 90,
		english: 75,
		computer: 85,
	},
	{
		roll: '2',
		name: 'Ritvik Patel',
		maths: 27,
		science: 30,
		english: 35,
		computer: 30,
	},
	{
		roll: '3',
		name: 'Neha Maurya',
		maths: 75,
		science: 69,
		english: 40,
		computer: 75,
	},
	{
		roll: '4',
		name: 'Mohit Verma',
		maths: 21,
		science: 31,
		english: 45,
		computer: 40,
	},
	{
		roll: '5',
		name: 'Karan Trivedi',
		maths: 70,
		science: 80,
		english: 35,
		computer: 60,
	},
];

class Students {
	constructor(studentDetails) {
		this.studentDetails = studentDetails;
	}

	displayNameAndTotal() {
		const studentTotalMarks = [];
		for (let i = 0; i < this.studentDetails.length; i++) {
			let total = 0;
			for (let key in this.studentDetails[i]) {
				if (typeof this.studentDetails[i][key] === 'number') {
					total += this.studentDetails[i][key];
				}
			}
			studentTotalMarks.push({
				Name: this.studentDetails[i].name,
				Total: total,
			});
		}
		return studentTotalMarks;
	}

	highestTotal() {
		const studentsTotal = this.displayNameAndTotal();
		const { Name, Total } = Object.entries(studentsTotal).sort(
			(a, b) => b[1].Total - a[1].Total
		)[0][1];
		return `Highest Total: Name = ${Name}, Total = ${Total}`;
	}

	lowestTotal() {
		const studentsTotal = this.displayNameAndTotal();
		const { Name, Total } = Object.entries(studentsTotal).sort(
			(a, b) => a[1].Total - b[1].Total
		)[0][1];
		return `Lowest Total: Name = ${Name}, Total = ${Total}`;
	}

	averageOfSubject(subject) {
		let sum = 0;
		for (let i = 0; i < this.studentDetails.length; i++) {
			if (this.studentDetails[i].hasOwnProperty(subject)) {
				sum += this.studentDetails[i][subject];
			}
		}
		return sum / this.studentDetails.length;
	}

	displayGrades() {
		const nameAndTotal = this.displayNameAndTotal();
		return nameAndTotal.map((student) => {
			if ((student.Total / 400) * 100 >= 75) {
				return { Name: student.Name, Grade: 'A' };
			} else if ((student.Total / 400) * 100 >= 60) {
				return { Name: student.Name, Grade: 'B' };
			} else if ((student.Total / 400) * 100 >= 35) {
				return { Name: student.Name, Grade: 'C' };
			}
			return { Name: student.Name, Grade: 'D' };
		});
	}

	passedStudentsDetails() {
		const studentGrades = this.displayGrades();
		const passedStudents = studentGrades.filter(
			(student) => student.Grade !== 'D'
		);
		return {
			'Number of passed students': passedStudents.length,
			'Passed students details': passedStudents,
		};
	}
}

const student = new Students(studentDetails);
console.log(student.displayNameAndTotal());
console.log(student.highestTotal());
console.log(student.lowestTotal());
console.log(student.averageOfSubject('computer'));
console.log(student.displayGrades());
console.log(student.passedStudentsDetails());

class Employee {
	constructor(id, name, basicSalary, hra) {
		this.id = id;
		this.name = name;
		this.basicSalary = basicSalary;
		this.hra = hra;
	}

	getSalary() {
		return `Net salary for ${this.name} is ${this.basicSalary + this.hra}`;
	}
}

const sam = new Employee(1, 'sam', 14500, 2500);
const ram = new Employee(2, 'ram', 17500, 4500);
console.log(sam.getSalary());
console.log(ram.getSalary());

let customerDetails = [];

class BankAccount {
	constructor(name, accountNo, accountBalance, accountType, ifsc) {
		this.name = name;
		this.accountNo = accountNo;
		this.accountBalance = accountBalance;
		this.accountType = accountType;
		this.ifsc = ifsc;
		this.pushCustomerDetails = this.pushCustomerDetails(
			this.name,
			this.accountNo,
			this.accountBalance,
			this.accountType,
			this.ifsc
		);
	}

	pushCustomerDetails(name, accountNo, accountBalance, accountType, ifsc) {
		customerDetails = [
			...customerDetails,
			{
				name,
				accountNo,
				accountBalance,
				accountType,
				ifsc,
			},
		];
	}

	static displayCustomerDetails() {
		if (customerDetails.length !== 0) {
			return customerDetails.map((customer) => {
				return {
					Name: customer.name,
					AccountBalance: customer.accountBalance,
				};
			});
		} else {
			return "No cutomer's exist in our bank :(";
		}
	}

	static averageAccountBalance() {
		if (customerDetails.length !== 0) {
			const total = customerDetails.reduce(
				(average, customerAverage) => average + customerAverage.accountBalance,
				0
			);
			const avg = (total / customerDetails.length).toFixed(2);
			return `Overall Average = ${avg}`;
		} else {
			return `No cutomer's exist in our bank :(`;
		}
	}
}

const samAccount = new BankAccount('sam', 1234, 23000, 'savings account', 3456);
const ramAccount = new BankAccount(
	'ram',
	2214,
	25670,
	'business account',
	5376
);
const salimAccount = new BankAccount(
	'salim',
	2314,
	25570,
	'business account',
	8336
);

console.log(BankAccount.displayCustomerDetails());
console.log(BankAccount.averageAccountBalance());

const cartItems = [
	{
		id: '101',
		name: 'Oreo',
		count: 2,
		price: 30.0,
		discount: 0.18,
	},
	{
		id: '102',
		name: 'Red Bull',
		count: 1,
		price: 99.0,
		discount: 0.15,
	},
	{
		id: '103',
		name: 'Dairy Milk Silk',
		count: 3,
		price: 175.0,
		discount: 0.05,
	},
	{
		id: '104',
		name: 'Pulse Candy Pack',
		count: 1,
		price: 135.0,
		discount: 0.2,
	},
];

const totalCartItems = (cartItems) => cartItems.length;

const totalCartValue = (cartItems) => {
	return cartItems.reduce((total, cart) => total + cart.price, 0);
};

const totalDiscountValue = (cartItems) => {
	return cartItems.reduce((total, cart) => total + cart.discount, 0);
};

console.log(`Total Cart Items: ${totalCartItems(cartItems)}`);
console.log(`Total Cart Value: ${totalCartValue(cartItems)}`);
console.log(`Total Discount Value: ${totalDiscountValue(cartItems)}`);

const totalTaxAmount = () => {
	const tax = 18;
	const total = totalCartValue(cartItems);
	const totalTaxAmount = (total / cartItems.length) * tax;
	return `Total tax amount = ${totalTaxAmount}`;
};

console.log(totalTaxAmount());
