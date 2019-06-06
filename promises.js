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
	[1,2,3,4,5].forEach(item => {
		promises.push(helloWorld(item).then(console.log('finished ', item)));
	});
	return Promise.all(promises);
}

async function main() {
	const msg = await helloWorld('hello1');
	console.log('Message -> ', msg);

	await helloWorld('hello2').then((result) => {
		console.log(result)
	});

	await helloWorld('hello3').then(() => breakWorld()).then((result => console.log(result))).catch((error) => console.error(error));
	
	const results = await loopExample().then(console.log('completed'));
	console.log(results);
}

main();
