/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром. */

function calc(num1, num2, num3) {
	console.log((num1 - num2) / num3);
};

calc(10, 2, 2);

/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром. */

function calcCubSquare(num) {
	let square = num * num;
	let cub = square * num;

	return [cub, square];
};

let result = calcCubSquare(5);
let square = result[0];
let cub = result[1];

console.log(`в кубе: ${square} в квадрате: ${cub}`);


/* 3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b..*/

function min(a, b) {
	if (a < b) return a;
	else return b;
};

function max(a, b) {
	if (a < b) return b;
	else return a;
};

let numMin = min(9, 9);
let numMax = max(12, 12);

console.log(numMin, numMax);

/* 4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив. */

function getArr(from, to) {
	let arr = [];

	for (let i = from; i <= to; i++) {
		arr.push(i);
	};

	return arr;
};

function showArr(mass) {
	for(let i = 0; i < mass.length; i++) {
		console.log(mass[i]);
	};
};

let myArray = getArr(1, 9);

showArr(myArray);

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/

function isEven(num) {
	return num % 2 === 0 ? true : false;
};

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
	};
	return arr;
};

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

function pyramidHalf(h) {
	let result = '';

	for (let i = 1; i <= h; i++) {
		let simbol = '';

		for (let k = 1; k <= i; k++) {

			if (arguments.length > 1) {
				simbol += arguments[1];
			} else {
				simbol += i;
			}
		};

		result += simbol + '\n';
	};

	console.log(result);
};

pyramidHalf(7, '#');
pyramidHalf(9);


/* 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:
		*
	 ***
	*****
 *******
*********
Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник.  */

function pyramid(h) {

	for (let i = 1; i <= h; i++) {
		let simbol = '';
		let probel = '';

		for (let k = 1; k <= h - i; k++) {
			probel += ' ';
		};

		for (let k = 1; k <= i * 2 - 1; k++) {
			simbol += '*';
		};
		console.log(probel + simbol);
	};
};

function pyramidRevers(h) {

	for (let i = h; i >= 1; i--) {
		let simbol = '';
		let probel = '';

		for (let k = 1; k <= h - i; k++) {
			probel += ' ';
		};

		for (let k = 1; k <= i * 2 - 1; k++) {
			simbol += '*';
		};
		console.log(probel + simbol);
	};
};

pyramid(6);
pyramidRevers(6);


/* 9. Напишите ф-цию, которая возвращает массив заполненный числами
 Фибоначи от 0 до 1000. */

function fibonachi() {
	let arr = [0, 1];

	while (true) {
		let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
		if (nextNum > 1000) break;
		arr.push(nextNum);
	};
	return arr;
};
console.log(fibonachi());

// v2 рекурсия

function fibonachiRecurs() {
	let arr = [0, 1];

	function numNextRecurs() {
		let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
		if (nextNum > 1000) return;
		arr.push(nextNum);
		numNextRecurs();
	};

	numNextRecurs();
	return arr;
};
console.log(fibonachiRecurs());

v3 через цикл for

function fib() {
	let arr = [0, 1];

	for (let i = 0; ; i++) {
		let value = arr[i] + arr[i + 1]; // arr[arr.length - 1] + arr[arr.length - 2]

		if (value > 1000) break;
		arr.push(value);
	};
	return arr;
};
console.log(fib());


/* 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию. */

function recurce(num) {
	num = String(num);
	let sum = 0;

	for (let i = 0; i < num.length; i++) {
		sum += Number(num[i]);
	}

	if (sum < 10) return sum;

	return recurce(sum);
};

console.log(recurce(99));

// v2

function recurce(num) {
    let numb = num.toString().split('').map(Number);
    let sum = numb.reduce( (prev, item) => prev + item );

    if (sum < 10) return sum;

    return recurce(sum);
};

console.log(recurce(99));


/* 11. Дан массив с числами (передается параметром). Выведите
последовательно его элементы, используя рекурсию и не используя цикл. */


function showArrItem(arr, index = 0) {
	if (index < arr.length) {
		console.log(arr[index]);
		showArrItem(arr, index + 1);
	}
};

showArrItem([12, 34, 45, 2, 5, 1]);


/* 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
группы студента и выводящую введённые данные в следующем виде:
*** ************* *************
* Домашняя работа: «Функции»  *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович        *
*** ************* *************
Размер рамки должен определятся автоматически по самой длинной строке.
Рамку вывести в консоль.
*/

function card() {
	let firstName = 'Дмитрий';
	let lastName = 'Шишов';
	let secondName = 'Юрьевич';

	let groupNumber = 'FE140';

	let str1 = 'Домашняя работа: «Функции»';
	let str2 = `Выполнил: студент гр. ${groupNumber}`;
	let str3 = `${lastName} ${firstName} ${secondName}`;

	let result = '';

	let str1Length = str1.length; //26
	let str2Length = str2.length; //27
	let str3Length = str3.length; //21

	let maxLength = str1Length;
	if (maxLength < str2Length) maxLength = str2Length;
	if (maxLength < str3Length) maxLength = str3Length;

	for (let i = 1; i <= maxLength - str1Length; i++) {
		str1 += ' ';
	};
	str1 += ' *';

	for (let i = 1; i <= maxLength - str2Length; i++) {
		str2 += ' ';
	};
	str2 += ' *';

	for (let i = 1; i <= maxLength - str3Length; i++) {
		str3 += ' ';
	};
	str3 += ' *';

	for (let i = 1; i <= 5; i++) {
		let symbol = '';

		for (let k = 1; k <= maxLength + 4; k++) {
			if (i === 1 || i === 5) symbol += '*';
			if (i === 2) symbol = '* ' + str1;
			if (i === 3) symbol = '* ' + str2;
			if (i === 4) symbol = '* ' + str3;
		};

		result += symbol + '\n';
	};
	console.log(result);
};

card();

/*доп. Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Необходимо найти и вывести наименьшее число в массиве
используйте внутри функции уже созданные функции для создания массива и поиска мин значения*/

function createArr(from, to) {
	let arr = [];

	for (let i = from; i <= to; i++) {
		arr.push(i);
	};
	return arr;
};

function min(a, b) {
	return a > b ? b : a;
};


function minNumberArr(array) {
	let minNum = Infinity;
	for (let i = 0; i < array.length; i++) {
		return min(minNum, array[i]);
	}
};

let newArr = createArr(5, 8);
console.log(minNumberArr(newArr));


/*доп. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательные функции isEven и createArr из предыдущих задач. */

function createArr(from, to) {
	let arr = [];

	for (let i = from; i <= to; i++) {
		arr.push(i);
	};
	return arr;
};

function isEven(num) {
	return num % 2 === 0;
};


function isEvenNewArray(array) {
	let newArr = [];

	for (let i = 0; i < array.length; i++) {

		if (isEven(array[i])) {
			newArr.push(array[i]);
		};
	};
	return newArr;
};

let NewArr = createArr(-4, 8);
let result = isEvenNewArray(NewArr);
console.log(result);

/*доп. Напишите функцию findLongestWord(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.*/

function findLongestWord(str) {
	str = str.split(' ');
	let wordMax = '';

	for (let i = 0; i < str.length; i++) {
		if (str[i].length > wordMax.length) wordMax = str[i];
	};

	console.log(wordMax);
};

let str1 = "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию";

findLongestWord(str1);


/*доп. Напишите функцию, которая проверяет, является ли переданная строка палиндромом. */

function poldrom(str) {
    let word = str.toLowerCase();
    let wordRevers = word.split('').reverse().join('');

    return word === wordRevers;
};

console.log(poldrom('Анна'));

/*доп. Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся. */

function anagramm(str1, str2) {
	let word1 = str1.toLowerCase().split('');
	let word2 = str2.toLowerCase().split('');

	for (let elem of word2) {
		if (word1.includes(elem) === false) return false;
	};

	return true;
};

console.log(anagramm('Привет', 'тервu'));

/* Функция обратного порядка: Создайте функцию reverseString(str), которая принимает строку и возвращает её в обратном порядке */

function reverseString(str) {
	str = str.split('').reverse().join('');
	return str;
};

let str1 = reverseString('Привет');
console.log(str1);

/* Функция находит общие элементы в двух массивах: Напишите функцию intersection(arr1, arr2), которая находит и возвращает общие элементы в двух массивах */

function intersection(arr1, arr2) {

	return arr1.filter((elem) => {

		if (arr2.includes(elem)) {
			arr2.splice(arr2.indexOf(elem), 1);
			return true;
		};

		return false;
	});
};

let array1 = [12, 32, 1, 4, 5, 8, 5, 3, 6, 5];
let array2 = [4, 5, 6, 7, 5, 8];
let newArr = intersection(array1, array2);
console.log(newArr);

/* Функция поиска элемента в массиве: Напишите функцию contains(arr, value), которая проверяет, содержится ли значение в массиве */

function contains(arr, value) {
	return arr.includes(value);
};

let array = [12, 56, 3, 2, 6, 'Привет'];

let valueArr = 12;
let valueArr1 = 1;
let valueArr2 = 'Привет';

let resultArr = contains(array, valueArr);
let resultArr1 = contains(array, valueArr1);
let resultArr2 = contains(array, valueArr2);

console.log(resultArr);
console.log(resultArr1);
console.log(resultArr2);


/* Функция конвертации температуры: Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта */


function celsiusToFahrenheit(celsius) {
	let fahrenheit = celsius * 1.8 + 32;
	return Math.round(fahrenheit) + ' \u00B0' + 'F';
};

let cels = 12;
let cels1 = -23;

let fahrenheit = celsiusToFahrenheit(cels);
let fahrenheit1 = celsiusToFahrenheit(cels1);

console.log(fahrenheit);
console.log(fahrenheit1);

/* Напишите функцию createArr(), которая создает массив, заполняемый "руками" (например, через prompt()), пока пользователь не введет пустую строку. Функция должна вернуть созданный массив.*/

function arrPrompt() {
	let arr = [];
	let num;

	while (true) {
		num = Number(prompt('введите число'));

		if (isNaN(num)) {
			alert('не число, нужно ввести число');
		} else if (num == ' ') {
			alert("Вы закончили");
			break;
		} else {
			arr.push(num);
		}
	};
	return arr;
};

console.log(arrPrompt());