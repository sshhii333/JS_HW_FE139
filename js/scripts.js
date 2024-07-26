/* 1.	Найдите сумму элементов (типа number) массива. */

let arr = [12, 5, 16, 3, 7, 2];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}

console.log(sum);

/* 2.	Найти номер и значение первого найденного отрицательного элемента массива. */

let arr = [12, 5, 16, -3, 7, -2];

for (let i = 0; i < arr.length; i++) {

	if (arr[i] < 0) {
		console.log('число = ' + arr[i] + ' под индексом = ' + i);
		break;
	}

}

/* 3.	Найдите максимальный и минимальный элементы массива. Выведите эти элементы и их сумму. */

let arr = [0, 5, 16, 3, 7, -2];

let min = Infinity;
let max = -Infinity;
let sum;

for (let i = 0; i < arr.length; i++) {

	if (min > arr[i]) min = arr[i];
	if (max < arr[i]) max = arr[i];
}

sum = min + max;

console.log(min, max, sum);

/* 4.	Создайте произвольный массив и выведите его перевернутую версию (создав новый массив), например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0] */

let arr = [0, 'N', 98, 'Text', 3, 5];
let arrNew = [];

for (let i = arr.length - 1; i >= 0; i--) {
	arrNew.push(arr[i])
}

console.log(arrNew);

/* 5.	Есть два массива с числовыми значениями одинаковой длины. Создайте третий массив с суммами элементов данных массивов. Например:  [12,4,0] + [8,7,6] = [20, 11, 6]. */

let arr1 = [12,4,0];
let arr2 = [8,7,6];
let arr3 = [];
let sum;

for (let i = 0; i < arr1.length; i++){
	sum = arr1[i] + arr2[i];
	arr3.push(sum);

}

console.log(arr3);

/*  6.	Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку. Например, задан массив [1, -5, 0, 3, -4]. После преобразования должно получиться [-1, 5, 0, -3, 4].*/

let arr = [1, -5, 0, 3, -4];
let arrNew = [];

for (let elem of arr) {
	if (elem == 0) {
		arrNew.push(elem);
	} else {
		arrNew.push(elem * (-1))
	}
}

console.log(arrNew);

/* 7.	Поменяйте местами максимальный и минимальных элементы в массиве. */

let arr = [1, -5, 0, 3, -4, 24, 16, 2];

let min = Infinity;
let max = -Infinity;
let countMin = Infinity;
let countMax = -Infinity;

for (let i = 0; i < arr.length; i++) {

	if (arr[i] > max) {
		max = arr[i];
		countMax = i;
	}

	if (arr[i] < min) {
		min = arr[i];
		countMin = i;
	}
}

arr[countMin] = max;
arr[countMax] = min;

console.log(min, countMin, max, countMax);
console.log(arr);

/* 8.	Посчитайте кол-во отрицательных, положительных элементов, а также  элементов со строчным типом данных. */

let arr = [1, -5, 0, 3, -4, 'hello', 16, '2', [1, -5, 0], true];

let numMinus = 0;
let numPlus = 0;
let numString = 0;

for (let elem of arr) {

	if (typeof elem !== "number" && typeof elem !== "string" ) continue;

	if (typeof elem === "string" ) {
		numString++;
	} else if (elem >= 0) {
		numPlus++;
	} else {
		numMinus++;
	}
}

console.log(`кол-во положительных элементов = ${numPlus}
кол-во отрицательных элементов = ${numMinus}
кол-во элементов строчного типа = ${numString}`);

/* 9.	Дан массив целых чисел. Проверить, есть ли в нем одинаковые элементы. Вывести в консоль: “Есть повторки!”, “Нет повторок”*/

let arr = [2, 4, 57, 1, 4, 14];

let flag = false;

for (let i = 0; i < arr.length; i++) {

	for (let j = i + 1; j < arr.length; j++) {

		if (arr[i] === arr[j]) {
			flag = true;
		}
	}
}

console.log(flag ? 'Есть повторки!' : "Нет повторок" );

/* 10.	Выполните сортировку массива с разными числовыми элементами. */

let arr = [2, 4, 57, 1, 4, 14];

// arr.sort((a, b) => a - b);
// console.log(arr);


for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr.length - i; j++) {
		if (arr[j] > arr[j + 1]) {
			[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
		}
	}
}

console.log(arr);

/* 11.	Создайте массив из пяти имен и выведите их на экран те из них, которые начинаются с определенной буквы, которая вводится с клавиатуры. */

let arr = ['Дима', 'Даша', 'Сергей', 'Саша', 'Юра'];
let letter = prompt('Введите первую букву, для вывода имен только с этой буквы');
let newName = '';

for (let i = 0; i < arr.length; i++){

if (arr[i][0] === letter) {
	newName += arr[i] + ' ';
}
}

console.log(newName);

/* 12.	Если в одномерном массиве имеются три подряд идущих одинаковых элемента, то переменной r присвоить значение истина. */

let arr = [5, 4, 2, 1, 12, 45, 45, 45];
let r = false;

for (let i = 0; i < arr.length - 2; i++) {
	if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
		r = true;
		break;
	}
}

console.log(r);


/* 13.	Заданы два массива. Один содержит наименование услуг, а другой – расценки за эти услуги. Удалите из обоих массивов все элементы, которые по цене равняются n  рублей */

let arrName = ['Бассеин', 'Баня', 'Тренажерный зал', 'Бильярд'];
let arrCost = [30, 10, 10, 20];
let del = 10;

for (let i = 0; i < arrName.length; i++) {
	if (arrCost[i] === del) {
		arrName.splice(i, 1);
		arrCost.splice(i, 1);
		i--;
	}
}

console.log(arrName, arrCost);