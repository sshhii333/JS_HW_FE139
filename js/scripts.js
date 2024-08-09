/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром. */

function calc(num1, num2, num3) {
	console.log((num1 - num2) / num3);
}

calc(10, 2, 2);

/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром. */

function calcCubSquare(num) {
	let square = num * num;
	let cub = num * square;

	return [square, cub];
}

let result = calcCubSquare(2);
let square = result[0];
let cub = result[1];


console.log(square, cub);

/* 3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b..*/

function min(a, b) {
	if (a < b) return a;
	else return b;
}

function max(a, b) {
	if (a < b) return b;
	else return a;
}

let numMin = min(9, 9);
let numMax = max(12, 12);

console.log(numMin, numMax);

/* 4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив. */

function getArr(from, to) {
	arr = [];
	for (let i = from; i <= to; i++) {
		arr.push(i);
	}

	return arr;
}

function showArr(arr) {
	console.log(arr);
}


let a = 14;
let b = 25;
let myarray = getArr(a, b);

showArr(myarray);

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/

function isEven(num) {
	return num % 2 === 0 ? true : false;
}

let result = isEven(12);
console.log(result);

/*  6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи. */

function createArr (array) {
	let arr = [];

	for(i = 0; i < array.length; i++){
		if (isEven(array[i]))	arr.push(array[i]);
	}
	return arr;
}

let newArr = createArr([22,12,34,17,11,24]);
console.log(newArr);

/* 7 Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999

Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
кроме пробела, то пирамида должна быть нарисована этим символом,
например:

*
**
***
****
*****
******
*******
******** */

function drawPyramid(num) {


	for (let i = 1; i <= num; i++) {
		let row = '';

		for (let j = 1; j <= i; j++) {
			if (arguments.length > 1) {
				row += arguments[1];
			} else {
				row += i;
			}
		}

		console.log(row);
	}
}

drawPyramid(9, '&')

/* 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:
		*
	 ***
	*****
 *******
*********
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник.  */

function drowPiramidaIsosceles(num) {

	for (let i = 1; i <= num; i++){

		let probel = '';
		let simbol = '';
		for (let j = 0; j < i * 2 - 1; j++) {
			simbol += '*';
		}
		for (let j = 0; j < num - i; j++) {
			probel += ' ';
		}
		document.write('<pre>' + probel + simbol + '<pre>');
	}
}

function drowPiramidaIsoscelesRevers(num) {

	for (let i = num; i >= 1; i--){

		let probel = '';
		let simbol = '';
		for (let j = 0; j < i * 2 - 1; j++) {
			simbol += '*';
		}
		for (let j = 0; j < num - i; j++) {
			probel += ' ';
		}
		document.write('<pre>' + probel + simbol + '<pre>');
	}
}

drowPiramidaIsosceles(7);
drowPiramidaIsoscelesRevers(7);

/* 9. Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000. */

function fib() {
	let arr = [0, 1];

	for (let i = 0; ; i++) {
		let value = arr[i] + arr[i + 1];

		if (value > 1000) break;
		arr.push(value);
	}
	return arr;
}
console.log(fib());


/* 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию. */


function recurce(num) {
	let a = num;
	a = String(a).split('');
	let sum = 0;

	for (let i = 0; i < a.length; i++) {
		sum += Number(a[i]);
	}

	if (sum > 10) {
		recurce(sum)
	}

	console.log(sum);
}

recurce(23465)

/* 11. Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл. */


function displayArrSeriatim(arr, index = 0) {
	if (index < arr.length) {
		console.log(arr[index]);
		displayArrSeriatim(arr, index + 1);
	}
};

displayArrSeriatim([12, 34, 45, 2, 5, 1])


