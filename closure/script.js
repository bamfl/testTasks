function add(n) {
	return function(num) {
		return n + num;
	};
}

const addOne = add(1);
console.dir(addOne);

console.log(addOne(10));




function logPersone() {
	console.log(`${this.name}, ${this.age}, ${this.job}`);
}

function bind(obj, callback) {
	callback.call(obj);
}

const persone1 = {name: 'Dima', age: 27, job: 'IT'};
const persone2 = {name: 'Ksenia', age: 30, job: 'Mother'};

bind(persone1, logPersone);
bind(persone2, logPersone);
