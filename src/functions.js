// http://es6-features.org/

/*
// arrow function
parameters => expression
// is equivalent to:
function (parameters){
  return expression;
}
*/

const fun = function() {
	console.log(arguments);
}

fun(1, 2, 3, 4, 5);
fun("hello", 12, "world");

// rest operator, collects all remaining elements into an array. PACKS
// rest parameters have to be at the last argument
const fun1 = function(name, ...numbers) {
	console.log(name);
	console.log(numbers);
	return numbers.reduce((e, large) => e > large ? e : large);
}

console.log(fun1("Jason", 1, 12, 2, 3, 4, 5));

let date = "20/10/2019";

let [day, month, year] = date.split('/');

const array = [1, 2, 12, 3, 4, 6];

console.log(fun1(...array));

const array2 = [21, 22, 23, 34, 45];

// spread operator, allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. UNPACKS
console.log([...array, 55, 56, ...array2]);

const name = "Jason";

console.log("Hello %s", name);
console.log(`Hello ${name}`);

var elements = [
	'Hydrogen',
	'Helium',
	'Lithium',
	'Beryllium'
];

elements.map(function(element) {
	return element.length;
}); // this statement returns the array: [8, 6, 7, 9]

// The regular function above can be written as the arrow function below
elements.map((element) => {
	return element.length;
}); // [8, 6, 7, 9]

// When there is only one parameter, we can remove the surrounding parenthesies:
elements.map(element => {
	return element.length;
}); // [8, 6, 7, 9]

// When the only statement in an arrow function is `return`, we can remove `return` and remove
// the surrounding curly brackets
elements.map(element => element.length); // [8, 6, 7, 9]

// destructuring
let obj = {
	id: 22,
	name: "Jason",
	surname: "Delport"
}
let {
	id,
	surname
} = obj;
console.log(`${id} ${surname}`);


// object literals
function showInfo(id, name, surname) {
	return {
		id,
		name,
		surname
	}
}
console.log(showInfo(22, "Jason", "Delport"));


const isUnd = value => value === 0 ? 0 : value || '';

console.log(isUnd(0));
console.log(isUnd(undefined));
console.log(isUnd('hello'));
console.log(isUnd(5));
console.log(isUnd());
console.log(isUnd(null))
	

