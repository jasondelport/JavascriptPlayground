class Info {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getName() {
		return this.name;
	}

	getSurname() {
		return this.surname;
	}
}


class ExtendedInfo extends Info {
	constructor(name, surname, age) {
		super(name, surname);
		this.age = age;
	}

	getAge() {
		return this.age;
	}
}
let info = new ExtendedInfo('Jason', 'Delport', 45);
console.log(info.getSurname());


function doit(count) {
	let array = [];
	array.push(0);
	array.push(1);
	while(array.length < count) {
		array.push((array[array.length-2] + array[array.length-1]))
	}
	return array;
}



console.log(doit(15))







