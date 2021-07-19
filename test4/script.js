const arr = [1, 5, 10, 20];

// const filteredArr = arr.filter(item => item > 10);
// console.log(filteredArr);

// как метод
arr.myFilter = function(cbFn) {
	const newArr = [];

	this.forEach(item => {
		if (cbFn(item)) {
			newArr.push(item);
		}
	});

	return newArr;
};

const myFilteredArr = arr.myFilter(item => item > 10);

// console.log(myFilteredArr);

// как функция
const myFilter = (arr, cbFn) => {
	const newArr = [];

	arr.forEach(item => {
		if (cbFn(item)) {
			newArr.push(item);
		}
	});

	return newArr;
};

const myFilteredArr2 = myFilter(arr, item => item > 10);
console.log(myFilteredArr2);

arr.mySome = function(cbFn) {
	let result = false;

	this.forEach(item => {
		if (cbFn(item)) {
			result = true;
		}
	});
	
	return result;
};

console.log(arr.mySome(item => item === 20));

arr.myMap = function(cbFn) {
	const newArr = [];

	this.forEach(item => {
		newArr.push(cbFn(item));
	});

	return newArr;
};

const mapped = arr.myMap(item => item = item * 2);
console.log(mapped);