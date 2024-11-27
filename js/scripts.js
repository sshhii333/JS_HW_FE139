/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены. */

let str = 'aaa@bbb@ccc';
let newStr = str.replace(/@/g, '!');
console.log(newStr);

/* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025 */

let date = '2025-12-31';
let dateNew = date.replace(/2025-12-31/, '31/12/2025');
// let dateNew = date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1');
// let dateNew = date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1');
// let dateNew = date.split('-').reverse().join('/');
console.log(dateNew);

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
		koren += Math.pow(arr[i],3);
};
koren = Math.sqrt(koren).toFixed(2);

console.log(koren);

//v2

let arr = [4, 2, 5, 19, 13, 0, 10];
let arrNew = Math.sqrt( arr.reduce( (acc, item) => acc + Math.pow(item, 3), 0 ) ).toFixed(2);
console.log(arrNew);

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

function showDateTime() {

	function addZero(item) {
		return item < 10 ? '0' + item : item;
	};

	let dateTime = new Date();

	let time = [addZero(dateTime.getHours()), addZero(dateTime.getMinutes()), addZero(dateTime.getSeconds())];
	let date = [addZero(dateTime.getDate()), addZero(dateTime.getMonth() + 1), addZero(dateTime.getFullYear())];

	console.log(`${time.join(':')} ${date.join(':')}`);
};

showDateTime();


/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a' */

let str = 'aa aba abba abbba abca abea';
let strNew = /ab+a/g;

console.log(str.match(strNew));


/* 8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения. */

function validatePhone(value) {
	if (!value) return false;

	let str = /^\+?375 ?\(?(?:29|44|33|25)\)? ?[1-9]\d{2} ?-?\d{2} ?-?\d{2}$/gm;

	return console.log(str.test(value));
};

validatePhone('+375 33 779 72 30');
validatePhone('+375 29 7779286');
validatePhone('375 (44) 248-93-45');
validatePhone('37529456675567000'); // false
validatePhone('8 29 4566789'); // false

/* 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.

Функция должна возвращать true или false. Используйте регулярные
выражения.
*/

function validateEmail(value) {
	if (!value) return false;

	let str = /^[a-z0-9]{2}[a-z0-9._-]{0,28}[a-z0-9]@[a-z0-9][a-z0-9.-]{0,9}[a-z0-9]\.[a-z]{2,11}$/gm;

	return console.log(str.test(value));
};

validateEmail('naaaaaaaaaaaaame@gmail.com');
validateEmail('name@l1234567890.com');
validateEmail('ndf_fr_al@gmial.com');
validateEmail('name-tutw2gmail.ru'); // false
validateEmail('naaa.aaaaaaaaaame@gmail.c'); // false

/*10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив.

https://
tech.onliner.by/
2018/04/26/smart-do-200/
?utm_source=main_tile&utm_medium=smartdo200
		можно еще разбить
    utm_source=main_tile
		&
		utm_medium=smartdo200
#zag3
 */

function parceUrl(value) {
	if (!value) return false;
	let str = /^(https?:\/\/)([a-z0-9][a-z.-]+[a-z0-9]\.[a-z]{2,11})(\/[^&#\s]+\/?)?\/?(\?[^#\s]+)?(#\w+)?$/m;

		return value.match(str);
};

console.log(parceUrl('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));


/*доп Напишите функцию, которая принимает дату рождения и возвращает, сколько лет человеку на данный момент. */
function birthday(date) {
	let format = date.split('.');
	let str = `${format[2]}-${format[1]}-${format[0]}`;

	let dateNow = new Date();
	let dateNew = new Date(str);


	let year = dateNow.getFullYear() - dateNew.getFullYear();
	let month = dateNow.getMonth() - dateNew.getMonth();

	console.log(`Вам ${year} лет и ${month} месяцев`);
};

birthday('20.06.1988');

