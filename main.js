// Bai 1
function square(a) {
	return a * a;
}
// console.log(square(5)); // node main.js = 25

// Bai 2
function circle(r) {
	let pi = 3.14;
	let perimeter = 2 * pi * r;
	let area = r * r * pi;
	return `Perimeter is ${Math.round(perimeter)}. Area is ${Math.round(area)}`;
}
// console.log(circle(5));

// Bai 3
function factorial(x) {
	if (x == 0) {
		return 1;
	} else {
		return x * factorial(x - 1);
	}
}
// console.log(factorial(5));

// Bai 4
function isNumber(a) {
	if (typeof a === "number") {
		return true;
	}
	return false;
}
// console.log(isNumber("Something")); // false
// console.log(isNumber(5)); // true

// Bai 5
function minOfThree(b, c, d) {
	let min = b;
	if (c < min) {
		min = c;
	}
	if (d < min) {
		min = d;
	}
	return min;
}
// console.log(maxOfThree(3, 9, 5));

// Bai 6
function isPositiveInteger(a) {
	if (a > 0 && Number.isInteger(a)) {
		return true;
	}
	return false;
}
// console.log(isPositiveInteger(9.8)); // false
// console.log(isPositiveInteger(-2)); // false
// console.log(isPositiveInteger(4)); // true

// Bai 7
function swap(a, b) {
	let temp = a;
	a = b;
	b = temp;
	return [a, b];
}
// console.log(swap(4, 8)); // [8, 4]

// Bai 8
function swapArr(arr) {
	let temp = arr[0];
	arr[0] = arr[1];
	arr[1] = temp;
	return arr;
}
// console.log(swapArr([9, 8])); // [ 8, 9 ]

// Bai 9
function findIndex(x, arr) {
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === x) {
			arr2.push(i);
		}
	}
	return arr2;
}

console.log(findIndex(1, [1, 2, 1, 3]));
