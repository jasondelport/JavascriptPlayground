//https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c
// https://javascript.info/map-set-weakmap-weakset
//https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

// for iterating properties of an array OR string
for (let item of array) {
	console.log(item);
}

let object = {
	id: '1',
	type: 'Code',
	name: 'Jason'
};
// for iterating properties of an object OR string
for (let key in object) {
	console.log(key + " -> " + object[key]);
}

for (let [key, value] of Object.entries(object)) {
 console.log(`${key} -> ${value}`);
}

[1, 2, 3].forEach(function(item, index, array) {
	console.log(item, index, array);
});

[1, 2, 3].forEach(function(item) {
	console.log(item);
});

[1, 2, 3].forEach(function(item) {
	console.log(item, this);
}, [1, 2, 3]);

const result = [1, 2, 3].map(function(item) {
	return item * 2; // return value
});
console.log(result);

const evens = [1, 2, 3, 4, 5, 6].filter(function(item) {
	return item % 2 === 0;
});
console.log("filter/evens -> " + evens);

const evens1 = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 0);
console.log(evens1);

const sum = [1, 2, 3, 4, 5, 6].reduce(function(result, item) {
	return result + item;
}, 5); // this is the starting value
console.log(sum);

const uniqueArray = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6].filter((item, position, array) => {
	console.log(item, position, array, array.indexOf(item) === position);
	// indexOf() method returns the first index at which a given element can be found in the array
	return array.indexOf(item) === position; // returns trues
});
console.log("unique array -> " + uniqueArray);

const hasNeg = [1, 2, 3, 4, -1, 6].some(function(item) {
	return item < 0;
});
console.log(hasNeg);

const allPos = [1, 2, 3, 4, -1, 6].every(function(item) {
	return item > 0;
});
console.log(allPos);

const foundObject = [{
	id: '1'
}, {
	id: '2'
}, {
	id: '3'
}].find(function(item) {
	return item.id === '2';
});
console.log(JSON.stringify(foundObject));

const foundIndex = [{
	id: '1'
}, {
	id: '2'
}, {
	id: '3'
}].findIndex(function(item) {
	return item.id === '2';
});
console.log(JSON.stringify(foundIndex));

var map = new Map();
map.set("0", "foo");
map.set(1, "bar");
map.set({}, "baz");

for (const entry of map.entries()) {
  console.log(entry);
}

map.forEach(function(value, key, map) {
	console.log(`${key} -> ${value}`)
});

for (const entry of map) {
  console.log(entry);
}


for (let key of map.keys()) {
	console.log(key);
}

for (let value of map.values()) {
	console.log(value);
}

let objArray = [{id:1},{id:2},{id:1}];

// combining
let unique = objArray.filter((item, position, array) => {
	return array.map(mapObj => mapObj['id']).indexOf(item['id']) === position;
});
console.log(unique);

