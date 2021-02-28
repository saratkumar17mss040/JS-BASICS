const { log } = require("async");

const strLength = async (name) => {
	return `OMG! my name is ${name.length} char long!`;
};

const wrapper = async () => {
	const displayStrLength = async (name) => {
		try {
			const res = await strLength(name);
			console.log(res);
			// const data = await res;
			// console.log(res);
			return res;
		} catch (err) {
			console.error(err);
		}
	};
	const data = await displayStrLength('sam');
    return data;
};

// wihout .then ? -> how ?
console.log(wrapper());
