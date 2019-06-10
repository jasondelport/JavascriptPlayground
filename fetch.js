const fetch = require('fetch');

async function fetchUsers(endpoint) {
	console.log(endpoint);
	const response = await fetch(endpoint, {
          mode: "cors",
          headers: { "Content-Type": "application/json" }
        }).catch(error => console.error(error));
	let data = await response.json();

	console.log('size -> ', data.length);

	data = data.map(user => user.username);

	return data;
}

const data = fetchUsers('https://jsonplaceholder.typicode.com/users');
data.then(resp => console.log('response -> ', resp));
