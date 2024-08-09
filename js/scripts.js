/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены. */

let str = 'aaa@bbb@ccc';
let newStr = str.replace(/@/g, '!');
console.log(newStr);

/* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025 */

let date = '2025-12-31';
let newDane = date.split('-').reverse().join('/')
console.log(newDane);

let date = '2025-12-31';
console.log( date.replace(/(2025-12-31)/, '31/12/2025') );

/* 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice) */

let str = 'Я учу javascript!';

console.log(str.substr(0, 1));
console.log(str.substring(0, 1));
console.log(str.slice(0, 1));

/* 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

let arr = [4, 2, 5, 19, 13, 0, 10];

let koren = 0;
for (let i = 0; i < arr.length; i++) {
	koren += Math.pow(arr[i], 3);
	console.log(koren);
}

console.log(Math.sqrt(koren));

/* 5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1. */

let a = 3;
let b = 5;

let c = a - b;
c = Math.abs(c);

console.log(c);

/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014). */

function date(num) {
	if (num < 10) {
		return '0' + num;
	} else {
		return num;
	}
}

let dateNew = new Date();

const hours = date(dateNew.getHours());
const minutes = date(dateNew.getMinutes());
const seconds = date(dateNew.getSeconds());
const day = date(dateNew.getDate());
const month = date(dateNew.getMonth() + 1);
const year = date(dateNew.getFullYear());


console.log(`${hours}:${minutes}:${seconds} ${day}.${month}.${year}`);

/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a' */

let str = 'aa aba abba abbba abca abea';
let strNew= /ab+a/g;

console.log(str.match(strNew));

