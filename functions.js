const fun = function() {
	console.log(arguments);
}

fun(1,2,3,4,5);
fun("hello",12,"world");

const fun1 = function(...numbers) {
	console.log(numbers);
	return numbers.reduce((e, large) => e > large ? e : large);
}

console.log(fun1(1,12,2,3,4,5));


const array = [1,2,12,3,4,6];

console.log(fun1(...array));

const array2 = [21,22,23,34,45];

console.log([...array,55,56,...array2]);

const name = "Jason";

console.log("Hello %s", name);
console.log(`Hello ${name}`);