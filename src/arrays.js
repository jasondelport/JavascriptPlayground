//https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c
// https://javascript.info/map-set-weakmap-weakset
//https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b

import data from "./data.js";

for (let i = 0; i < data.array.length; i++) {
	console.log(data.array[i]);
}

// for iterating properties of an array OR string
for (let item of data.array) {
	console.log(item);
}

// for iterating properties of an object OR string
for (let key in data.object) {
	console.log(key + " -> " + data.object[key]);
}

for (let [key, value] of Object.entries(data.object)) {
 console.log(`${key} -> ${value}`);
}

data.array.forEach(function(item, index, array) {
	console.log(item, index, array);
});

data.array.forEach(function(item) {
	console.log(item);
});

data.array.forEach(function(item) {
	console.log(item, this);
}, data.array);

const result = data.array.map(function(item) {
	return item * 2; // return value
});
console.log(result);

const evens = data.array.filter(function(item) {
	return item % 2 === 0;
});
console.log("filter/evens -> " + evens);

const evens1 = data.array.filter(item => item % 2 === 0);
console.log(evens1);

const sum = data.array.reduce(function(result, item) {
	return result + item;
}, 5); // this is the starting value
console.log(sum);

const uniqueArray = data.array5.filter((item, position, array) => {
	console.log(item, position, array, array.indexOf(item) === position);
	// indexOf() method returns the first index at which a given element can be found in the array
	return array.indexOf(item) === position; // returns trues
});
console.log("unique array -> " + uniqueArray);

const hasNeg = data.array3.some(function(item) {
	return item < 0;
});
console.log(hasNeg);

const allPos = data.array3.every(function(item) {
	return item > 0;
});
console.log(allPos);

const foundObject = data.array4.find(function(item) {
	return item.id === '2';
});
console.log(JSON.stringify(foundObject));

const foundIndex = data.array4.findIndex(function(item) {
	return item.id === '2';
});
console.log(JSON.stringify(foundIndex));

for (const entry of data.map.entries()) {
  console.log(entry);
}

data.map.forEach(function(value, key, mp) {
	console.log(`${key} -> ${value}`)
});

for (const entry of data.map) {
  console.log(entry);
}

for (let key of data.map.keys()) {
	console.log(key);
}

for (let value of data.map.values()) {
	console.log(value);
}

// combining
let unique = data.array4.filter((item, position, array) => {
	return array.map(mapObj => mapObj['id']).indexOf(item['id']) === position;
});
console.log(unique);

