/* 1 Выведите числа от 1 до 50 и от 35 до 8 */

let i = 1;
while (i <= 50) {
	console.log(i);
	i++;
}

i = 35;
while (i >= 8) {
	console.log(i);
	i--;
}

/* 2 Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку */

let i = 89;
while (i >= 11) {
	document.write(i + '<br />');
	i--;
}

/* 3 С помощью цикла найдите сумму чисел от 0 до 100. */

let sum = 0;

for (let i = 0; i <= 100; i++) {
	sum += i;
}

console.log(`Сумма чисел от 0 до 100 = ${sum}`);

/* 4 Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3). */

for (let i = 1; i <= 5; i++) {
	let sum = 0;
	for (let j = 1; j <= i; j++) {
		sum += j;
	}
	console.log(`Сумма числа ${i} = ${sum}`);
}


/* 5 Выведите чётные числа от 8 до 56. Решить задание через while и for. */

let i = 8;

while(i <= 56) {
	if(i % 2 == 0) console.log(i);
	i++;
}

for(let i = 8; i <= 56; i++) {
	if(i % 2 == 0) console.log(i);
}

/* 6 Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде: */

for(let i = 2; i <= 10; i++) {
		document.write('<br>');
	for(let j = 1; j <= 10; j++){
		document.write(`${i} * ${j} = ${i*j}<br>`);
	}
}


/* 7 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num. */

let n = 1000;
let num = 0;

for (let i = n; i >= 50; i/=2) {
	num += 1;
	console.log(i);
}

console.log(`Число ${n} проходит ${num} итераций до выполнения условия задачи`);


/* 8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение */

let sum = 0;
let ar = 0;

for (let i = 1;;) {
	let num = +prompt('Введите число ');

	if (isNaN(num)) {
		alert('Вы ввели не число, повторите');
		continue;
	} else	if (num != '' && num != 0) {
		sum += num;
		ar = sum / i++;
	} else {
		break
	}
}

alert(`Сумма вводимых чисел = ${sum}, а произведение = ${ar}`);


/* 9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл. */

//решена при помощи ИИ

let strNum = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57 99';
let min = 100; // первоначальное число для сравнения с мин infinity
let max = 0; // первоначальное число для сравнения с мах -Infinity
let buf = ''; // буфер - временное хранилище для цифр извлеченных из строки

for (let i = 0; i < strNum.length; i++) {
	let strChar = strNum[i]; //записываем каждый символ 4 98 4....

	if (strChar !== ' ') { //если не встречается пробел
		buf += strChar; //то записываем в буфер символ и собираем число, пока не встретим пробел

	} else {//если встречаем пробел,
			let num = parseInt(buf); //то функция записывает число до пробела в num

			if (num > max) max = num; // 4 > 0 ---4, 98 > 4---98, 4 > 98---98, 6 > 98---98, 1 > 98---98,
			if (num < min) min = num; // 4 < 100 ---4, 98 < 4---4, 4 < 4---4, 6 < 4---6, 1 < 4---1,
			buf = ''; //обнуляем буфер при каждой итерации
		}
	}

let lastNum = parseInt(buf); //Последнее число в строке не встречает пробел, а след мы не можем сравнить его

if (lastNum > max) max = lastNum;
if (lastNum < min) min = lastNum;

document.write(`min =  ${min}, max = ${max}`);


/* 10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321. */

let num = '174453';
let sum = 0;
let rev = '';

for (let i = 0; i < num.length; i++) {
	sum += +num[i];
}

for (let j = num.length-1; j >= 0; j--) {
	rev += num[j];
}

document.write(`Дано число ${+num}: цифр в числе = ${num.length}, сумма чисел = ${sum}, обратный порядок = ${+rev}`);


