'use strict';
// simple callback example

function fullName(name, callback) {
	callback(name);
}

fullName('sam', (name) => {
	console.log('Hello ' + name);
});

// callback hell example

first(2, (firstResult, err) => {
	if (!err) {
		console.log(firstResult);
		second(firstResult, (secondResult, err) => {
			if (!err) {
				console.log(secondResult);
				third(secondResult, (thirdResult, err) => {
					if (!err) {
						console.log(thirdResult);
					}
				});
			}
		});
	}
});

function first(value, callback) {
	callback(value + 2, false);
}

function second(value, callback) {
	callback(value + 2, false);
}

function third(value, callback) {
	callback(value + 2, false);
}
