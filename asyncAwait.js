'use strict';

const strLength = (name) => {
	return `OMG! my name is ${name.length} char long!`;
};

const displayStrLength = async (name) => {
	try {
		const res = await strLength(name);
		console.log(res);
		return res;
	} catch (err) {
		console.error(err);
	}
};

displayStrLength('sam').then(console.log);

const failure = () => {
	return 'Give my bose speakers and headphones to my sister';
};

const success = () => {
	return 'Yay! I am alive !';
};

const willThanosKillMe = async (name, success, failure) => {
	try {
		if (name.length % 2 === 0) {
			const res = await success();
			console.log(res);
			return res;
		} else {
			const res = await failure();
			console.log(res);
			return res;
		}
	} catch (err) {
		console.error(err);
	}
};

willThanosKillMe('sama', success, failure).then(console.log);

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

const accessAsyncData = async () => {
	try {
		const res = await fakeFetch(true, 'hi');
		console.log(res);
		return res;
	} catch (err) {
		console.error(err);
	}
};

accessAsyncData().then(console.log);

const getServerResponseLength = async (msg) => {
	try {
		const res = await fakeFetch(true, msg);
		console.log(res.length);
		return res.length;
	} catch (err) {
		console.error(err);
	}
};

getServerResponseLength('hi').then(console.log);

const syncCallsToServer = async (msg1, msg2) => {
	try {
		const data1 = await fakeFetch(true, msg1);
		const data2 = await fakeFetch(true, data1 + msg2);
		console.log(data2);
		return data2;
	} catch (err) {
		console.log(err);
	}
};

syncCallsToServer('hi', ' bye').then(console.log);
