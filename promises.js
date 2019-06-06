// https://alligator.io/js/async-functions/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

function helloWorld(input = "") {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(input);
		}, 2000);
	});
}

function breakWorld() {
	return new Promise(function(resolve, reject) {
		reject('oh no you don\'t')
	});
}

function loopExample() {
	let promises = [];
	[1, 2, 3, 4, 5].forEach(item => {
		// notice the chained promises here
		let chain = helloWorld('-' + item + '-')
			.then(response => helloWorld('-' + response + '-'))
			.then(response => {
				console.log('finished ', item, response);
				return '-' + response + '-';
			});
		promises.push(chain);
	});
	return Promise.all(promises);
}

// async functions always return a promise
async function main() {
	const msg = await helloWorld('hello1');
	console.log('Message -> ', msg);

	await helloWorld('hello2').then((result) => {
		console.log(result)
	});

	await helloWorld('hello3').then(() => breakWorld()).then((result => console.log(result))).catch((error) => console.error(error));

	const [a,b,c,d,e] = await loopExample().then(console.log('completed'));
	console.log('results -> ', e);
	
	return "done";
}

main().then(result => console.log(result));
