const array = [1,2,3,4,5];

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

[1,2,3].forEach(function(item, index, array) {
	console.log(item, index, array);
});

[1,2,3].forEach(function(item) {
	console.log(item);
});

[1,2,3].forEach(function(item) {
	console.log(item, this);
}, [1,2,3]);

const result = [1,2,3].map(function(item) {
	return item * 2;
});
console.log(result);

const evens = [1,2,3,4,5,6].filter(function(item) {
	return item % 2 ===0;
});
console.log(evens);

const sum = [1,2,3,4,5,6].reduce(function(result, item) {
	return result + item;
}, 5); // this is the starting value
console.log(sum);

const hasNeg = [1,2,3,4,-1,6].some(function(item) {
	return item < 0;
});
console.log(hasNeg);

const allPos = [1,2,3,4,-1,6].every(function(item) {
	return item > 0;
});
console.log(allPos);

const foundObject = [{id:'1'},{id:'2'},{id:'3'}].find(function(item) {
	return item.id === '2';
});
console.log(JSON.stringify(foundObject));

const foundIndex = [{id:'1'},{id:'2'},{id:'3'}].findIndex(function(item) {
	return item.id === '2';
});
console.log(JSON.stringify(foundIndex));