/*1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке. */

let arr = ['Гродно'];

function sityAdd (cities = prompt('Введите название города')) {
	let citi = cities.split(',');

	for(let i = 0; i < citi.length; i++){
		arr.push(citi[i].trim());
	};

	arr.sort();
	return arr;
};

sityAdd('Минск, Брест, Витебск, Могилев');
sityAdd();
console.log(arr);


/* 2. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.*/

let arr = [
	['Иван', 'Катя', 'Ольга', 'Максим'],
	['Минск', 'Брест', 'Гродно', 'Могилев']
];

for (let i = 0; i < arr[0].length; i++) {
  console.log(`${arr[0][i]} из ${arr[1][i]}`);
};

// v2
// for (let i = 0; i < arr[0].length; i++) {
//   for (let k = 0; k < arr[1].length; k++) {
//     if (i === k) {
//       console.log(`${arr[0][i]} из ${arr[1][k]}`);
//     };
//   };
// };

let distance = [0, 327, 246, 181] // Минск, Брест, Гродно, Могилев

// let indexIvan = arr[0].indexOf('Иван');
// let indexMaksim = arr[0].indexOf('Максим');

// let resalt = distance[indexIvan] + distance[indexMaksim];
// console.log(`Расстояние между ${arr[0][0]} и ${arr[0][3]} составляет ${resalt} км.`);


function getDistance (name) {
	if (!name) return;
	let indexIvan = arr[0].indexOf('Иван');
	let indexName = arr[0].indexOf(name);

	if (indexIvan === -1 || indexName === -1) {
    console.log('Одно имя не найдено');
    return;
  };

	let resalt = distance[indexIvan] + distance[indexName];
	console.log(`Расстояние между Иваном и ${name} составляет ${resalt} км.`);
};

getDistance('Ольга');

/* 3. Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней). */

function getDate (date1, date2) {
	if (!date1 || !date2) return;

	date1 = date1.split('.');
  let format1 = `${date1[2]}-${date1[1]}-${date1[0]}`;
  let date1New = new Date(format1);

	date2 = date2.split('.');
  let format2 = `${date2[2]}-${date2[1]}-${date2[0]}`;
  let date2New = new Date(format2);

	let resalt;

	if (date2New > date1New) {
		resalt = (date2New - date1New) / 86400000; // перевод в дни
	} else {
		resalt = (date1New - date2New) / 86400000;
	};

	if (resalt < 3) console.log("дата уже близко");
	if (resalt >= 3 && resalt <= 7 ) console.log("еще есть время");
	if (resalt > 7) console.log("далековато еще");

	return console.log(`Осталось дней до события: ${resalt}`);
};

getDate('21.08.2024', '27.08.2024');

/* 4. Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).*/

function celsiusToFahrenheit (celsius) {
	let fahrenheit = Math.round(celsius * 1.8 + 32);

	if (celsius > 5 && celsius <= 10) console.log("сегодня прохладнее, чем обычно");
	if (celsius >= 0 && celsius <= 5 ) console.log("одевайтесь теплее");
	if (celsius < 0 && celsius >= -5) console.log("сегодня очень холодно");
	if (celsius < -5) console.log("оставайтесь дома");

	return fahrenheit + '\u00B0' + 'F';
};

console.log(celsiusToFahrenheit (-20));

/* 5. Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.*/

function randomElement(arr) {
	if (arr.length < 1) return;

	let random;

	for (let i = 0; i <= arr.length; i++) {
		random = arr[Math.floor(Math.random() * i)];
	};

	return console.log(random);
};

randomElement([12, 24, 45, 56, 17, 2]);

/* 6. Шифр Цезаря: Напишите функцию, которая шифрует латинскую строку с помощью шифра Цезаря с заданным сдвигом. Например: "table" со сдвигом 2 будет "vcdng". Каждая буква "table" имеет свой номер в таблице ASCI (116, 97, 98, 108, 101). Создайте вторую функцию, которая будет расшифровывать текст, если передать правильный ключ сдвига. */

function encryptCaesar(text, flag = false) {
	if (!text) return;
	let indexTextInChars;
	let newText;
	let newArray = [];

	let asciiCodes = [];
	for (let i = 32; i <= 126; i++) {
		asciiCodes.push(i);
	};

	let asciiChars = [];
	for (let i = 0; i < asciiCodes.length; i++) {
		asciiChars.push(String.fromCharCode(asciiCodes[i]));
	};

	// console.log("Коды ASCII:", asciiCodes);
	// console.log("Символы ASCII:", asciiChars);

	let arrEncrypt = text.split('');
	for (let i = 0; i < arrEncrypt.length; i++) {
		indexTextInChars = asciiChars.indexOf(arrEncrypt[i]);
		if (flag) {
      indexTextInChars -= 2;
    } else {
      indexTextInChars += 2;
    };
		newArray.push(asciiChars[indexTextInChars]);
	};

	newText = newArray.join('');
	return console.log(newText);
};

function decodingCaesar(text, key) {
	if (!text || key != 2) return;
	text = encryptCaesar(text, flag = true);
};

encryptCaesar('table'); // зашифровали
decodingCaesar("vcdng", 2); //расшифровали
decodingCaesar("vcdng", 8);


/* 7. Напишите программу, которая генерирует случайным образом новый пароль, состоящий из 8 чисел (параметром можно задавать длину) и возвращает результат. По желанию, доработайте функцию: сделайте генератор паролей из латинских символов, целых чисел и специальных символов: _-,.&*^$#@+=!; минимум один большой символ, одна цифра, один спец. символ.*/

function validatePhone(value) {
	if (value <= 7 || value > 30 || !value) {
		return console.log('Длина пароля должна быть больше 7 и меньше 30');
	};

	let lettersMax = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let lettersMin = 'abcdefghijklmnopqrstuvwxyz';
	let numbers = '0123456789';
	let characters = '_-,.&*^$#@+=!';
	let result = lettersMax + lettersMin + numbers + characters;

	function generatePassword(length) {
		let arrNew = [];
		arrNew.push(lettersMax[Math.floor(Math.random() * lettersMax.length)]);
		arrNew.push(lettersMin[Math.floor(Math.random() * lettersMin.length)]);
		arrNew.push(numbers[Math.floor(Math.random() * numbers.length)]);
		arrNew.push(characters[Math.floor(Math.random() * characters.length)]);

		for (let i = 4; i < length; i++) {
			arrNew.push(result[Math.floor(Math.random() * result.length)]);
		};

		let password = arrNew.sort(() => Math.random() - 0.5).join('');

		let regex = /^[A-Z]([\w\-,.&*^$#@+=!]+)?$/; // добавлена строгая проверка: первый знак в пароле должен начинаться, с заглавной буквы, для тренировки рекурсии (если начинается не с заглавной, то повторить)

		if (regex.test(password)) {
			return password;
		} else {
			console.log(password);
			return generatePassword(length);
		};
	};

	let password = generatePassword(value);
	return console.log(password);
};

validatePhone(9);


/* 8. Создайте функцию, которая создает произвольный HTML-элемент в <body> в виде круга/овала/квадрата/прямоугольника. Функция должна принимать параметры: width, height, radius, color; создавать запись "<div style="width: 200px; height: 100px, border-radius: 5px; background-color: red;"></div>". Данное значение добавляйте через document.write. Подумайте о том, как сделать случайную генерацию фигур по вызову функции без параметров.*/

function randomFigure(width, height, radius, color) {
	if (width && height && radius && color) {
		let resalt = `<div style="width: ${width}px; height:${height}px; border-radius: ${radius}%; background-color: ${color};"></div>`;
		document.write(resalt);
	} else {
		let width1 = Math.floor(50 + Math.random() * (250 + 1 - 50));
		let height1 = Math.floor(50 + Math.random() * (250 + 1 - 50));

		let colorRandom = function() {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);
			return `rgb(${r}, ${g}, ${b})`;
		};

		let circle = `<div style="width: ${width1}px; height:${width1}px; border-radius: ${50}%; background-color: ${colorRandom()};"></div>`;
		let box = `<div style="width: ${width1}px; height:${width1}px; border-radius: ${0}%; background-color: ${colorRandom()};"></div>`;
		let oval = `<div style="width: ${width1}px; height:${height1}px; border-radius: ${50}%; background-color: ${colorRandom()};"></div>`;
		let rectangle = `<div style="width: ${width1}px; height:${height1}px; border-radius: ${0}%; background-color: ${colorRandom()};"></div>`;

		let arrFigure = [circle, box, oval, rectangle];
		let randomArr;

		for (let i = 0; i <= arrFigure.length; i++) {
			randomArr = arrFigure[Math.floor(Math.random() * i)]
		};

		document.write(randomArr);
	};
};

randomFigure(200, 300, 50, 'red');
randomFigure(); // рандом


/* 9. [18+] Создайте функцию-цензор, которая проверяет текст на наличие нецензурных слов и заменяет их на "#".

Пример текста:

"В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. "Какая же нахрен жизнь!" – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. "Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?" Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. "Да нахрен с ним, может, стоит просто сбежать?" – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала её настоящая сказка."

Нецензурные слова: "нахрен", "черт", "бляха".

Предусмотрите возможность расширения проверяемых слов в тексте.*/

let arr = ["нахрен", "черт", "бляха"];
let text = "В сером городе, где каждый день напоминал предыдущий, одиночество казалось нестерпимым. Люди сливались в одну серую массу, а Яна, сжав кулаки, прокладывала путь сквозь толпу. 'Какая же нахрен жизнь!' – думала она, чувствуя, как ветер шутит с ее волосами. Бросив взглянуть на небо, она заметила, что даже облака выглядят опустошенно. 'Почему у всех так легко? Почему я, черт побери, должна каждый раз зажмуриваться от этой скуки?' Она присела на старую скамейку в парке и, посмотрев на прохожих, вдруг почувствовала, как на душе легло тяжелое бремя. 'Да нахрен с ним, может, стоит просто сбежать?' – прошептала она, уже представляя, как дерзко покидает этот серый мир. В её сердце разгорелось пламя, и, поднимаясь, она с готовностью шагнула навстречу жизни. Ей не нужны были никакие фальшивые улыбки, лишь свобода и возможность быть собой. Бляха, она заслуживала этого! И, стиснув зубы, уверенно направилась в неизвестность, где ждала ее настоящая сказка."

function getCencor(text, word = '') {
	let wordSplit = word ? word.split(',') : [];

	if (wordSplit.length > 0) {
		for (let i = 0; i < wordSplit.length; i++) {
			arr.push(wordSplit[i].trim());
		};
	};

	let wordArr = text.match(/[А-Яа-я]+|[!?.,;:'"“”–]+/gm);

	for (let k = 0; k < arr.length; k++) {
		let badWord = arr[k];
		let censoredWord = "#".repeat(badWord.length);

		for (let j = 0; j < wordArr.length; j++) {
      if (wordArr[j].toLowerCase() === badWord.toLowerCase()) {
        wordArr[j] = censoredWord;
      };
    };
	};

	let textNew = wordArr.join(' ');

	textNew = textNew.replace(/\s+(?=[!?.,;:"“”]+)/gm, '');
  textNew = textNew.replace(/(?<=[;:'"“”]+)\s+/g, '');
	console.log(textNew);
};

getCencor(text, 'она, сказка');


/* 10. Создайте функцию-конструктор или отдельный простой объект "Тамагочи" с минимальным набором функций: включение, выключение, вывод общей информации о состоянии (имя, дата рождения, здоровье по 5-бальной шкале, сытость по 5 шкале, сон в часах от 0 до 8), покормить, спать. При включении "друга" запрашивается имя, автоматически добавляется дата рождения, и все показатели состояния устанавливаются в максимальные значения. Каждую минуту (или 1 час, как вы захотите), показатель сытости уменьшается на одну единицу. Каждый раз, когда сытость доходит до 1 и меньше, то уменьшается здоровье на 1 единицу. Если "друг" не спал больше 6 часов, то каждый последующий час здоровье уменьшается на 1 единицу. Чтобы восстановить здоровье, нужно быть сытым и хорошо спать: при каждом вызове метода "покормить" или "спать" соотв. параметры увеличиваются на 1 единицу. Каждый раз, когда параметры сон и сытость приходят к значению 5, то здоровье увеличивается на 1 единицу, но не может превышать максимального значения. По вашему желанию, функции тамагочи могут быть улучшены или добавлены новые. Проявите фантазию!
 */