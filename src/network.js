// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// https://developer.mozilla.org/en-US/docs/Web/API/Response


// should probably use axios instead!!
// https://github.com/axios/axios
const fetch = require('node-fetch');

async function fetchUsers(endpoint) {
	console.log(endpoint);
	const response = await fetch(endpoint, {
          mode: "cors",
          headers: { "Content-Type": "application/json" }
        }).catch(error => console.error(error));
		
	console.log("is ok? " + response.ok);
		
	let data = await response.json();

	console.log('size -> ', data.length);

	data = data.map(user => user.username);

	// this is returned as a promise by default;
	return data;
}

async function fetchData(endpoint) {
	//document.getElementById('spinner').style.visibility='visible';

	fetch(endpoint, { mode: "cors", headers: { 'Content-Type': 'application/json' } })
	.then(function(response) {
		if (!response.ok) {
			throw Error(response.status + " " + response.statusText);
		} else {
			//console.log(response.status + " " + response.statusText + "//");
		}
		return response.json();
	})
	.then(json => {	
		
		let count = json.length;
		console.log("count -> " + count);

	})
	.catch(err => {
		console.error(err);
		//alert(err);
	}).finally(() => {
		//document.getElementById('spinner').style.visibility='hidden';
	});
}



async function fetchUsersBroken(endpoint) {
	console.log(endpoint);
	const response = await fetch(endpoint, {
          mode: "cors",
          headers: { "Content-Type": "application/json" }
        });
		
	console.log("is ok? " + response.ok);
	
	
	if (response.ok) {
		return "ok";
	} else {
		return "non";
	}
	/*
		
	let data = await response.json();

	console.log('size -> ', data.length);

	data = data.map(user => user.username);

	// this is returned as a promise by default;
	return data;
	*/
}

const data = fetchUsers('https://jsonplaceholder.typicode.com/users');
data.then(resp => console.log('response -> ', resp));

fetchUsersBroken('https://jsonplaceholder.typicode.com/usersxxx').then(resp => console.log(resp)).catch(error => console.error(error));

fetchData('https://jsonplaceholder.typicode.com/usersxxx');
