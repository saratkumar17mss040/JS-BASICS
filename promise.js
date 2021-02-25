// ex-1 Answer - callbacks have been used in event handlers in react, adding listeners in vanillajs and while making fetch requests

// ex-8 Answer - Promises are way more cleaner then callbacks and when more asynchronous callbacks will lead to callback hell which will not be good to read the code and in promises we just need to attach the callbacks using .then

// ex-9 Answer - There are three states for promises in js - they are fulfilled, rejected, pending in which fulfilled will give the data as result,rejected will give the error as result,pending will give the data as undefined

const strLength = (name, callback) => {
	const nameLength = name.length;
	callback(nameLength);
};

strLength('sam', (nameLen) => console.log(`OMG! my name is ${nameLen} long! `));

const willThanosKillMe = (name, success, failure) => {
	if (name.length % 2 === 0) {
		success();
	} else {
		failure();
	}
};

willThanosKillMe(
	'samson',
	() => console.log('Live'),
	() => console.log('Die')
);

const displayAfterDelay = (msg, delay) => {
	setTimeout(() => {
		console.log(msg);
	}, delay);
};

displayAfterDelay('super mario', 2000);

// Answer - ACB

setTimeout(() => console.log('A'), 0);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('B'), 0);

// Answer - ABC

setTimeout(() => console.log('A', 1000));
setTimeout(() => console.log('B', 400));
setTimeout(() => console.log('C', 1300));

// Answer - ADB0C0

console.log('A');
setTimeout(() => console.log('B', 0));
setTimeout(() => console.log('C', 0));
console.log('D');

const displayAfterEveryInterval = (msg, delay) => {
	setInterval(() => {
		console.log(msg);
	}, delay);
};

displayAfterEveryInterval('hi sam !', 3000);

const countDown = (count, delay) => {
	let myInterval = setInterval(() => {
		if (count < 1) {
			console.log('Bang Bang !');
			clearInterval(myInterval);
		} else {
			console.log(count--);
		}
	}, delay);
};

countDown(5, 1000);

const fakeFetch = (isResolve, msg) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isResolve) {
				resolve('from server: resolved ' + msg);
			} else {
				reject('from server: rejected ' + msg);
			}
		}, 1000);
	});
};

console.log(
	fakeFetch(true, 'sam')
		.then((data) => console.log(data))
		.catch((err) => console.log(err))
);

console.log(
	fakeFetch(true, 'sam')
		.then((data) => console.log(data))
		.catch((err) => console.err(err))
);

const getServerResponseLength = (msg) => {
	return fakeFetch(true, msg).then((data) => data.length);
};

getServerResponseLength('samson').then((data) => console.log(data));

const syncCallsToServer = (msg1, msg2) => {
	return fakeFetch(true, msg1)
		.then((data) => fakeFetch(true, data + msg2))
		.then((data) => data);
};

syncCallsToServer('hi', 'bye').then((data) => console.log(data));

const syncCallsToServer = async (msg1, msg2) => {
	try {
		const data1 = await fakeFetch(true, msg1);
		const data2 = await fakeFetch(true, data1 + msg2);
		console.log(data2);
	} catch (err) {
		console.log(err);
	}
};

syncCallsToServer('hi', 'bye');

const fetchWithAsyncAwait = async (msg, isResolve) => {
	try {
		const data = await fakeFetch(msg, isResolve);
		console.log(data);
	} catch (err) {
		console.error(err);
	}
};

console.log(fetchWithAsyncAwait('hi', true));
