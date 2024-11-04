/*   task №1  Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8, true, «true», соответственно. При помощи оператора определения типа (typeof) убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в консоль (console.log()) типы операторов. */

let str = "Привет",
	sum = 123,
	num = 15.8,
	flag = true,
	txt = "true";

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);


/*   task №2  Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль результат выражений:5 % 3; 3 % 5; 5 + '3'; '5' – 3; 75 + 'кг'; 785 * 653; 100 / 25; 0 * 0; 0 / 2; 89 / 0; 98 + 2; 5 – 98; (8 + 56 * 4) / 5; (9 - 12) * 7 / (5 + 2); +"123"; 1 || 0; false || true; true > 0. Проверьте (выведите в консоль) каким типам принадлежат переменные.  */
let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653;
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0;
let a11 = 98 + 2;
let a12 = 5 - 98;
let a13 = (8 + 56 * 4) / 5;
let a14 = (9 - 12) * 7 / (5 + 2);
let a15 = +'123';
let a16 = 1 || 0;
let a17 = false || true;
let a18 = true > 0;
console.log(a1, typeof(a1)); /* 2 'number' */
console.log(a2, typeof(a2)); /* 3 'number' */
console.log(a3, typeof(a3)); /* 53 string */
console.log(a4, typeof(a4)); /* 2 'number' */
console.log(a5, typeof(a5)); /* 75кг string */
console.log(a6, typeof(a6)); /* 512605 'number' */
console.log(a7, typeof(a7)); /* 4 'number' */
console.log(a8, typeof(a8)); /* 0 'number' */
console.log(a9, typeof(a9)); /* 0 'number' */
console.log(a10, typeof(a10)); /* Infinity 'number' */
console.log(a11, typeof(a11)); /* 100 'number' */
console.log(a12, typeof(a12)); /* -93 'number' */
console.log(a13, typeof(a13)); /* 46.4 'number' */
console.log(a14, typeof(a14)); /* -3 'number' */
console.log(a15, typeof(a15)); /* 123 'number' */
console.log(a16, typeof(a16)); /* 1 'number' */
console.log(a17, typeof(a17)); /*  true 'boolean' */
console.log(a18, typeof(a18)); /* true 'boolean' */

/*   task №3  Напишите скрипт, который находит площадь прямоугольника высотой 23см и шириной 10см, значение высоты и ширины должны хранится в width и height, соответственно, а значение площади должно хранится в числовой переменной SPryam.  */

let width = '10см',
		height = '23см';

let SPryme =  parseFloat(width) * parseFloat(height);
console.log(SPryme + 'см', typeof(SPryme)); /* 230см SPryme=number */

/*   task №4  Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром основания равным значению переменной a7 из задания 2, результат поместите в переменную VCilindra. */
let W = '10м',
		D = a7;

let V = 3.1415926535 * ((D / 2) * (D / 2)) * parseFloat(W); /*  V = π × r² × h */
console.log(V + 'м'); /*  125.66370614м */

/*   task №5  Найдите площадь круга (SKruga) с радиусом 5см (r) */
let r = '5см';

let SKruga = 3.1415926535 * (parseFloat(r) * parseFloat(r)); /*  S = π × r2 */
console.log(SKruga + 'cм'); /*  78.5398163375cм */

/*   task №6  Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см (h). */
var a = '5см',
		b = '7см',
		h = '10см';

let STrap = (parseFloat(a) + parseFloat(b)) * parseFloat(h) / 2; /*  S = (a + b) * h / 2 */
console.log(STrap + 'cм'); /*  60cм */


/*   task №7   Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной Pereplata */
let S = '2 млн. руб.',
		p = '10 %',
		yers = '6';

let Pereplata = parseFloat(S) * parseFloat(p)/100 * yers; /* Pereplata = S * p * yers */
console.log(Pereplata + ' млн. руб.'); /*1.2000000000000002 млн. руб. */

/*   task №8  Решите уравнения (найдите неизвестный x), где a = 8, b = 3: a+2(x-b)=16; b(x+15)=a+6x; x+2x+ax+bx=23780.  */
var a = 8,
		b = 3;

var x = (16 + 2 * b - a) / 2; /* a+2(x-b)=16 => a+2x-2b=16 => 2x=16+2b-a */
console.log(x); /* 7 */

var x = (a - 15 * b) / (b - 6); /* b(x+15)=a+6x => bx+15b=a+6x; => bx–6x=a–15b  => x(b-6)=a–15b */
console.log(x); /* 12.333333333333334 */

var x = 23780 / (3 + a + b); /* x+2x+ax+bx=23780 => x(1+2+a+b)=23780 */
console.log(x); /* 1698.5714285714287 */

/*   task №9  Выведите в консоль стихотворение (соблюдайте все переносы и абзацы):  */

console.log('Бывало, спит у ног собака,\nкостер занявшийся гудит,\nи женщина из полумрака\nглазами зыбкими глядит.\n\nПотом под пихтою приляжет\nна куртку рыжую мою\nи мне, задумчивая, скажет:\n\n"А ну-ка, спой!.."- и я пою.');


/*   task №10  Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по смыслу предложения (1 абзац, переменная text): 1. «индо земля зашаталась под ногами-и вырос,»; 2. «и заревел он голосом диким...»; 3. «блеснула молния и ударил гром,»; 4. «а так какое-то чудище, страшное и мохнатое,»; 5. «как будто из-под земли, перед купцом:»; 6. «Он подошёл и сорвал аленький цветочек.»; 7. «зверь не зверь, человек не человек,»; 8. «В ту же минуту, безо всяких туч,»*/

let str1 = `индо земля зашаталась под ногами-и вырос,`;
let str2 = `и заревел он голосом диким...`;
let str3 = `блеснула молния и ударил гром,`;
let str4 = `а так какое-то чудище, страшное и мохнатое,`;
let str5 = `как будто из-под земли, перед купцом:`;
let str6 = `Он подошёл и сорвал аленький цветочек.`;
let str7 = `зверь не зверь, человек не человек,`;
let str8 = `В ту же минуту, безо всяких туч,`;

let text = str6 + str8 + str3 + str1 + str5 + str7 + str4 + str2;

console.log(text);