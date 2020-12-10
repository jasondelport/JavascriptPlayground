// https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c
// https://javascript.info/map-set-weakmap-weakset
// https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_Collections

import data from "./data.js";

const a1 = [];
const a2 = new Array();
const a3 = Array();

const array1 = [1,2,3,4,5,];
const array2 = new Array(1,2,3,4,5,);
const array3 = Array(1,2,3,4,5,);
const array4 = Array.of(1,2,3,4,5,)  
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

let arr1 = [42] // Creates an array with only one element: the number 42.
let arr2 = Array(42) // Creates an array with no elements and arr.length set to 42. 
let arr3 = Array.of(42); // Creates an array with only one element: the number 42.

console.log(arr1); // [ 42 ]
console.log(arr2); // [ <42 empty items> ]
console.log(arr3); // [ 42 ]

// You can assign to the array length property.
let cats = ['Dusty', 'Misty', 'Twiggy']
console.log(cats.length)  // 3

cats.length = 2
console.log(cats)  // logs "Dusty, Misty" - Twiggy has been removed

cats.length = 0 
console.log(cats)  // logs []; the cats array is empty

cats.length = 3 
console.log(cats)  // logs [ <3 empty items> ]

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

// array functions
console.log('==========functional list operations=========')
// map creates a new array by transforming every element in an array, individually
// filter creates a new array by removing elements that don't belong
// reduce takes all of the elements in an array and reduces them into a single value.

// returns elements for new list 
const result = data.array.map(function(item) {
	return item * 2; // return value
});
//const result = data.array.map(item => item * 2);
console.log(result);

// returns elements for new list if callback return logic is true
const evens = data.array.filter(function(item) {
	return item % 2 === 0;
});
console.log("filter/evens -> " + evens);

const evens1 = data.array.filter(item => item % 2 === 0);
console.log("filter/evens1 -> " + evens1);

// returns single value
const total = data.array.reduce(function(result, item) {
	console.log(`${result} -> ${item}`)
	return result + item;
}, 5); // this is the starting value
console.log(`reduce -> ${total}`);

// returns elements for new list if callback return logic is true
const uniqueArray = data.array5.filter((item, position, array) => {
	console.log(item, position, array, array.indexOf(item) === position);
	// indexOf() method returns the first index at which a given element can be found in the array
	return array.indexOf(item) === position; // returns trues
});
console.log("unique array (filter) -> " + uniqueArray);

// combining different methods, filter and map in this case
let unique = data.array4.filter((item, position, array) => {
	return array.map(mapObj => mapObj['id']).indexOf(item['id']) === position;
});
console.log(unique);

// returns boolean
const hasNeg = data.array3.some(function(item) {
	return item < 0;
});
console.log(`some -> ${hasNeg}`);

// returns boolean
const allPos = data.array3.every(function(item) {
	return item > 0;
});
console.log(`every -> ${allPos}`);

// returns object in array
const foundObject = data.array4.find(function(item) {
	return item.id === '2';
});
console.log(`find -> ${JSON.stringify(foundObject)}`);

// returns index int
const foundIndex = data.array4.findIndex(function(item) {
	return item.id === '2';
});
console.log(`findIndex -> ${JSON.stringify(data.array4[foundIndex])}`);

// map
console.log('==========map=========')
const map = data.map;
console.log(`size => ${map.size}`) // 6
console.log(map.delete(1)) // true
console.log(`size after delete => ${map.size}`) // 5
console.log(map.has(100)) // false
console.log(map.has({id:1})) // false
console.log(map.has([1,2])) // false
console.log(map.has("0")) // false
console.log(map.get('0'));// "foo"

for (const entry of data.map.entries()) {
  console.log(`map entry -> ${entry}`);
}

data.map.forEach(function(value, key, map) {
	console.log(`key: ${key} -> value: ${value} -> map: ${map}`);
});

for (const entry of data.map) {
	console.log(`entry -> ${entry}`);
}

for (let key of data.map.keys()) {
	console.log(`key -> ${key}`);
}

for (let value of data.map.values()) {
	console.log(`value -> ${value}`);
}

for (const [key, value] of data.map) {
	// Log the keys and values of the Map with for...of
	console.log(`${key}: ${value}`)
  }

map.clear()
console.log(`size after clear => ${map.size}`); // 0