/* 1 Выведите числа от 1 до 50 и от 35 до 8 */

for (let i = 1; i <= 50; i++){
	document.write(i, ' ');
};

document.write('<br>');
document.write('<br>');

for (let i = 35; i >= 8; i--){
	document.write(i, ' ');
};

document.write('<br>');
document.write('<br>');

/* 2 Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку */

let i = 89;

while(i >= 11){
	document.write(i + '<br>');
	i--;
}

/* 3 С помощью цикла найдите сумму чисел от 0 до 100. */

let sum = 0;
for(let i = 0; i <= 100; i++){
	sum += i;
}
console.log(sum);

/* 4 Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3). */

let num = 5;
let sum = 0;

for (let i = 1; i <= num; i++) {
	sum += i;
}
console.log(`Сумма чисел ${num} = ${sum}`);


/* 5 Выведите чётные числа от 8 до 56. Решить задание через while и for. */

let i = 8;

while(i <= 56) {
	if(i % 2 === 0) {
	console.log(i);
	}
	i++
};

for(let i = 8; i <= 56; i++) {
	if(i % 2 !== 0) continue;
	console.log(i);
}

/* 6 Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде: */

let proiz = 1;
for(let i = 1; i < 10; i++) {
	for(let k = 1; k < 10; k++) {
		proiz = i * k;
		document.write(`${i} * ${k} = ${proiz} <br>`);
	}
	document.write('<br>');
};


/* 7 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num. */

let num = 1000;
let count = 0;
for(let i = num; i >= 50; i /= 2) {
	num /= 2;
	count++;
}

console.log('Результат: ' + num);
console.log('Количество итераций: ' + count);


/* 8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение */

let sum = 0;
let ar = 0;
let i = 1;
while (true) {
	let num = +prompt('Введите число ');

	if(isNaN(num)) {
		alert('Вы ввели не число, повторите');
		continue;
	} else if (num != '' && num != 0) {
		sum += num;
		ar = sum / i++;
	} else {
		break
	}12
}

alert(`Сумма вводимых чисел = ${sum} \nCреднее арифметическое = ${ar}`);


/* 9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл. */

//решена при помощи ИИ

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 67 ';
let max = -Infinity;
let min = Infinity;
let buf = '';

for(let i = 0; i < str.length; i++){

	if(str[i] !== ' ') {
		buf += str[i];
	} else {
		let num = Number(buf);
		if(num > max) max = num;
		if(num < min) min = num;
		buf = '';
	}
};

let lastNum = Number(buf);
if (lastNum > max) max = lastNum;
if (lastNum < min) min = lastNum;

console.log(min, max);

//v2

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 99';
let max = -Infinity;
let min = Infinity;
let buf = '';

for(let i = 0; i <= str.length; i++){

	if(str[i] !== ' ' && str[i]) {
		buf += str[i];
	} else {
		let num = Number(buf);
		if(num > max) max = num;
		if(num < min) min = num;
		buf = '';
	}
}

console.log(min, max);


/* 10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321. */

let num = 2356;
let numOne = ``;
let count = 0;
let sum = 0;
let revers = '';

num = String(num);

for (let i = 0; i < num.length; i++) {
	count++;
	sum += Number(num[i]);

	numOne += num[i];
	if (i < num.length - 1) {
		numOne += ', ';
	};
};

for (let k = num.length - 1; k >= 0; k--) {
	revers += num[k];
};

console.log(`вводится число ${num}: состоит из цифр ${numOne}; цифр в числе = ${count}; сумма = ${sum}; обратный порядок ${revers}.`);

/* 3.доп.  Необходимо вывести на экран числа от 50 до 1 с шагом 2, 5 и 10. Решите задачу двумя циклами.*/

for (let i = 50; i >= 1; i -= 10) {
	console.log(i);
}

console.log('\n');

let i = 50;
while (i >= 1) {
	console.log(i);
	i -= 5;
}

/* 4.доп Найдите сумму чисел от 1 до 50, а также сумму этих же чисел, исключая четные.
*/

for(let i = 1; i <= 50; i++){
if (i % 2 === 0) continue;
console.log(i);
};

/* 5 доп. Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа. */

let num = 8;
let numPlus = 0;
let sum = 0;
num = String(num);


for(let i = 1; i <= num; i++){
numPlus += i;
if (i < num) {
	numPlus += ' + ';
}
sum += i;

}

console.log(`Вы ввели число ${num}, сумма чисел ${numPlus} = ${sum}`);

/* 6.доп Написать с помощью цикла while «переворот» числа. Другими словами, нужно создать новое число, у которого цифры шли бы в обратном порядке (например: 472 -> 274) */

let num = 2356;
num = num.toString();
let numNew = '';

let i = num.length - 1;

while(i >= 0) {
	numNew += num[i];
	i--;
}

console.log(num, '->', numNew);

/* 7.доп. Найти самую большую цифру в целом числе. */

let num = 7874412;
num = num.toString();
let max = -Infinity;

for(let i = 0; i < num.length; i++) {
	if(num[i] > max) max = num[i];
};

console.log(max);

/* 8.доп Вычислить сумму первой и последней цифр целого числа.
 */

let num = 7874419;
num = num.toString();
let sum = 0;

for(let i = 0; i < num.length; i++) {
	sum = Number(num[0]) + Number(num[num.length - 1]);
};

console.log(sum);

/* 9.доп Посчитайте и выведете кол-во встречающихся чисел в строке “В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.” */

let text = 'В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.';

let count = 0;


for(let i = 0; i < text.length; i++){
	if (isNaN(text[i]) || text[i] == ' ') continue;
	count++;
}

console.log(count);


//V.2 (проблема с дробным числом 3.0)

let text = 'В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.';
let number = '';
let count = 0;

for (let i = 0; i < text.length; i++) {
    if (isFinite(parseFloat(text[i]))) {
        number += text[i];
    } else {
        if (number !== '') {
            console.log(number);
            count++;
            number = '';
        }
    }
}

console.log('Количество чисел:', count);


/* 14. Вывести на экран «прямоугольник», образованный из двух видов символов. Контур прямоугольника должен состоять из одного символа, а в «заливка» — из другого.


##############################
#0000000000000000000000000000#
#0000000000000000000000000000#
#0000000000000000000000000000#
#0000000000000000000000000000#
##############################

*/

let h = 6;
let l = 30;
let charB = '#';
let charW = '0';
let result = '';

for(let i = 1; i <= h; i++) {
	let line = '';
	for(let k = 1; k <= l; k++) {
		if (i == 1 || i == h || k == 1 || k == l) line += charB;
		else line += charW;
	};

	result += line + '\n';
}

console.log(result);