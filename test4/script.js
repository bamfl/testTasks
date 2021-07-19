const arr = [1, 5, 10, 20];

// const filteredArr = arr.filter(item => item > 10);
// console.log(filteredArr);

arr.myFilter = cbFn => {
	const newArr = [];

	arr.forEach(item => {
		if (cbFn(item)) {
			newArr.push(item);
		}
	});

	return newArr;
};

const myFilteredArr = arr.myFilter(item => item > 10);

console.log(myFilteredArr);
