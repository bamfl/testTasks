const width = +prompt('Кол-во элементов по ширине', '');
const height = +prompt('Кол-во элементов по высоте', '');

let matrix = new Array(height).fill().map(() => new Array(width).fill(''));

let colStart = 0;
let colEnd = width - 1;
let rowStart = 0;
let rowEnd = height - 1;

let counter = 1;

const addZero = (num) => {
	if (+num < 10) {
		return `0${num}`;
	} else {
		return `${num}`;
	}
};

while (colStart <= colEnd && rowStart <= rowEnd) {
	for (let i = colStart; i <= colEnd; i++) {
		matrix[rowStart][i] = addZero(counter);
		counter++;
	}
	rowStart++;

	for (let i = rowStart; i <= rowEnd; i++) {
		matrix[i][colEnd] = addZero(counter);
		counter++;
	}
	colEnd--;

	for (let i = colEnd; i >= colStart; i--) {
		matrix[rowEnd][i] = addZero(counter);
		counter++;
	}
	rowEnd--;

	for (let i = rowEnd; i >= rowStart; i--) {
		matrix[i][colStart] = addZero(counter);
		counter++;
	}
	colStart++;
}

console.log(matrix);
