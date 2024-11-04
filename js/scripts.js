/* 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран */

let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

/* 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3. */

let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > -10 && arr[i] < -3) console.log(arr[i]);
};

/* 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите. */


let arr = [];

for (let i = 23; i < 58; i++) {
	arr.push(i);
};
console.log(arr);

// v2

let arr = [];
let i = 23;

while(i < 58){
arr.push(i);
i++;
}

console.log(arr);

/* 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5 */

let arr = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
		console.log(arr[i]);
	};
};

v2
let arr = ['10', '20', '30', '50', '235', '3000'];
let arrNew = arr.filter(item => {
	if (item[0] === '1' || item[0] === '2' || item[0] === '5'){
		return true;
	}
});
console.log(arrNew);


// /* 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным. */

let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arr.length; i++) {

	if (arr[i] !== 'СБ' && arr[i] !== 'ВС') {
		console.log(arr[i]);
	} else {
		console.log('%c' + arr[i], 'font-weight: bold;');
	}
};

// /* 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length. */

let arr = ['WWW', 123, 12, 'dog', true];
arr.push('Hello');

console.log(arr[arr.length-1]);

// /* 7. Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран. */

let arr = [];

while (true) {
	let num = +prompt('введите число');
	if (!num) break;
	arr.push(num);
}
console.log(arr);

arr.sort( (a, b) => a - b );
console.log(arr);

// /* 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse. */

let arr = [12, false, 'Текст', 4, 2, -5, 0];

let i = arr.length-1;
while (i >= 0) {
	console.log(arr[i]);
	i--;
}

//v2

arr.reverse();
console.log(arr);

// /* 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]. */

let arr = [5, 9, 21,,,9, 78,,,,6];
let sum = 0;

for (i = 0; i < arr.length; i++) {
	let x = arr[i];
	if (x == undefined) sum += 1
}

console.log(sum);


// /* 10.  Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
// [1,8,0,13,76,8,7,0,22,0,2,3,2]. */

let arr = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let sum = 0;

for (i = 0; i < arr.length; i++) {
	let x = arr[i];
	if (x == 0) sum += 1;
}

if (sum < 2) console.log(0);
if (sum  >= 2 ) {
	let index1 = arr.indexOf(0);
	let index2 = arr.lastIndexOf(0);
	let sum2 = 0;
	for (j = index1; j < index2; j++) {
		sum2 += arr[j];
	}
	console.log(sum2);
}

// /* 11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5, на экране: */

let h = 6;
let result = '';

for (let i = 1; i <= h; i++) {

	for (let k = 1; k <= h - i; k++) {
		result += ' ';
	}

	for (let k = 1; k <= i * 2 - 1; k++) {
		result += '*';
	}

	result += '\n';
}
console.log(result);

/* Найдите сумму элементов массива (3, -5, "23", 0, "0", 1, -9)*/
/* Посчитайте кол-во отрицательных, положительных элементов*/

let arr = [3, -5, "23", 0, "0", 1, -9];
let sum = 0;
let plus = 0;
let minus = 0;

for (let i = 0; i < arr.length; i++) {
	let num = Number(arr[i]);
	sum += num;
	if (num == 0) continue;
	if (num > 0) plus++;
	else minus++;
}
console.log('Сумма: ' + sum, '\nПоложительных: ' + plus, '\nОтрицательных: ' + minus);

//v2

let arr = [3, -5, "23", 0, "0", 1, -9];

let result = arr.reduce((prev, item) => {
	item = Number(item);
	prev[0] += item;
	if (item > 0) prev[1]++;
	if (item < 0) prev[2]++;
	return prev;
},[0, 0, 0]);

console.log(`Сумма: ${result[0]}
Положительных: ${result[1]}
Отрицательных: ${result[2]}`);


// /* Найдите максимальный и минимальный элементы массива [23, 2, 0, , -2, 56, 12, 11]. Выведите эти элементы */

let max = -Infinity;
let min = Infinity;

let arr = [23, 2, 0, , -2, 56, 12, 11];

for (let i = 0; i < arr.length; i++) {

	if (arr[i] === undefined) continue;

	console.log(arr[i]);
	if (max < arr[i]) max = arr[i];
	if (min > arr[i]) min = arr[i];
}

console.log(min, max);

//v2

let arr = [23, 2, 0, , -2, 56, 12, 11];

let arrNew = arr.reduce((prev, item) => {
	if (item > prev[0]) prev[0] = item;
	if (item < prev[1]) prev[1] = item;
	return prev;
},[-Infinity, Infinity]);

console.log(`Max: ${arrNew[0]}, Min ${arrNew[1]}`);


/* Создайте произвольный массив и выведите его перевернутую версию (создав новый массив), например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0] */

let arr = [0, 'N', 98, 'Text', 3, 5];
let arrRev = [];

for(let i = arr.length-1; i >=0; i--) {
	arrRev.push(arr[i]);
};

console.log(arrRev);

/* Есть два массива с числовыми значениями одинаковой длины. Создайте третий массив с суммами элементов данных массивов. Например:  [12,4,0] + [8,7,6] = [20, 11, 6]. */

let arr1 = [12,4,0];
let arr2 = [8,7,6];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
	arr3.push(arr1[i] + arr2[i]);
}

console.log(arr3);

v2
let arr1 = [12,4,0];
let arr2 = [8,7,6];

let arr3 = arr1.map((item, index) => item + arr2[index]);
console.log(arr3);



/* Дан массив целых чисел (минимум 6 элементов). Проверить, есть ли в нем одинаковые элементы. Вывести в консоль: “Есть повторки!”, “Нет повторов”. */

let arr = [45, 2, 9, 12, 2, 11, 7];
let check = false;

for(let i = 0; i < arr.length; i++) {

	let index = arr.indexOf(arr[i]); //45 index = 0
	if (index != -1 && index != i) check = true;
}

console.log(check ? 'повторка' : 'повторов нету');


//* Создайте массив из пяти имен и выведите их на экран те из них, которые начинаются с определенной буквы, которая вводится с клавиатуры.*//

let arr = ['Alex', 'Dima', 'Vitalik', 'Dasha', 'Vika'];
let letter = ' d    ' //prompt('Введите букву');

let seachName = arr.filter((value) => {
	return value[0] === letter.toUpperCase().trim();
});

console.log(seachName);


/* Если в одномерном массиве имеются три подряд идущих одинаковых элемента, то переменной r присвоить значение истина */

let arr = [1, 2, 2, 2, 3, 4, 5];
let r = false;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] === arr[i+1] && arr[i] === arr[i + 2]) r = true;
}

console.log(r);



/* Заданы два массива. Один содержит наименование услуг, а другой – расценки за эти услуги. Удалите из обоих массивов все элементы, которые по цене равняются n  рублей. Выведите оба массива и удаленные элементы. */

let arrServise =['Услуга1', 'Услуга2', 'Услуга3',' Услуга4'];
let arrPrice = [10, 20, 80, 40];
let n = 20;
let index = arrPrice.indexOf(n);

for(let i = 0; i < arrPrice.length; i++) {
	if (n == arrPrice[i])	index;
	console.log(`${arrServise[i]}: $${arrPrice[i]}`);
};

arrPrice.splice(index, 1);
arrServise.splice(index, 1);

console.log(`Удалена ${arrServise[index]}: $${n}`);
console.log(arrPrice, arrServise);