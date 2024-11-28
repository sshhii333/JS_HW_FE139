/*
--------Мультиварка-------
1. вкл/выкл
2. выбор режима:
	1. Разогрев
	2. Варка
	3. Жарка
	4. Суп
	5. круппы
	6. мультиповор (ввод в ручную времени и температуры)
3. Запуск программы
4. Время готовки в зависимости от заданной программы (вывести сколько прошло времени)

команды:
this.on() - включение
this.off() - выключение
this.status - проверка включена или выключена микроволновка
this.run() - выбор программы
this.timeAdd() - увеличить время приготовления с шагом 2 минуты
this.timeReduce() - уменьшить время приготовления с шагом 2 минуты
this.programmStart() - запуск/отмена программы
this.checkTime() - количество мин,сек до зовершения программы (жмем постоянно)
*/


function Multivarka() {
	this.status = false;
	this.timeAddReduse = false;

	this.on = function () {
		this.status = true;
		console.log("Мультиварка включена");
	};

	this.off = function () {
		this.status = false;
		console.log("Мультиварка выключена");
	};

	this.run = function () {
		if (this.status == false) return;

		this.prog = parseInt(prompt(`Введите № программы:
    1 - Разогрев
    2 - Варка
    3 - Жарка
    4 - Суп
    5 - Круппы
    6 - Мультиповор
    `));

		this.programm();
	};

	this.show = function () {
		console.log(`Время приготовления = ${this.time} мин.
Температура приготовления = ${this.temp} градусов`);
	};

	this.programm = function () {
		if (this.status == false) return;


		switch (this.prog) {
			case 1:
				this.time = 1;
				this.temp = 180;
				console.log(`Выбранна программа Разогрев:`);
				this.show();
				break;
			case 2:
				this.time = 2;
				this.temp = 100;
				console.log(`Выбранна программа Варка:`);
				this.show();
				break;
			case 3:
				this.time = 3;
				this.temp = 170;
				console.log(`Выбранна программа Жарка:`);
				this.show();
				break;
			case 4:
				this.time = 4;
				this.temp = 105;
				console.log(`Выбранна программа Суп:`);
				this.show();
				break;
			case 5:
				this.time = 5;
				this.temp = 80;
				console.log(`Выбранна программа Круппы:`);
				this.show();
			case 6:
				this.time = +prompt('Введите количество минут: ');
				if (!this.time) {
					console.log('Вы ввели не число, инициирован выход из программы');
					break;
				};
				this.temp = +prompt('Введите температуру приготовления блюда: ');
				if (!this.temp) {
					console.log('Вы ввели не число, инициирован выход из программы');
					break;
				};
				console.log(`Выбранна программа Мультиповар:`);
				this.show();
				break;
			default:
				console.log('Неверный номер программы. Пожалуйста, выберите от 1 до 6');
		}
	};

	this.timeAdd = function () {
		
		this.time += 2;
		console.log(`Вы увеличили время приготовления на 2 минуты.`);
		this.show();
	};

	this.timeReduce = function () {

		this.time -= 2;
		console.log(`Вы уменьшили время приготовления на 2 минуты.`);
		this.show();
	};

	this.programmStart = function () {
		if (this.status == false) return;

		if (confirm("Вы хотите начать выполнение выбранной программы? Да/Нет")) {
			this.onProg = new Date();
			this.offProg = new Date(this.onProg.getTime() + this.time * 60000);
			console.log(`Запуск программы в ${this.onProg.toLocaleTimeString()}, закончится выполнение программы в ${this.offProg.toLocaleTimeString()}.`);
		} else {
			console.log("Программа отменена.");
		}
	};

	this.formatTime = function (sec) {
		let hours = String(Math.floor(sec / 3600)).padStart(2, '0');
		let minutes = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
		let sek = String(sec % 60).padStart(2, '0');
		return `${hours}:${minutes}:${sek}`;
	};

	this.checkTime = function () {
		if (this.status == false) return;

		let time = new Date();
		let diffTime = Math.floor((time.getTime() - this.onProg.getTime()) / 1000);
		let progTime = this.time * 60;

		let formatted = this.formatTime(progTime - diffTime);


		if (diffTime <= progTime) {
			console.log(`Осталось ${formatted} сек.`);
		} else {
			console.log("Программа выполнена");
		};
	};
};

let readmond = new Multivarka();


/* выполнено на занятие */
/* Калькулятор */
// let Calculator = function () {

// 	this.enter = function () {
// 		this.a = this.enterNumber('Введите число а');
// 		if (this.a === null) return;

// 		this.b = this.enterNumber('Введите число b');
// 		if (this.b === null) return;

// 		this.oper = this.enterOperator('Введите нужную операцию +  -   *  /');
// 		if (this.oper === null) return;

// 		this.operation();
// 	};

// 	this.enterNumber = function (promptMess) {
// 		let number;

// 		while (true) {
// 			let num = prompt(promptMess);

// 			if (num === null) {
// 				alert('Вы вышли из программы');
// 				return null;
// 			};

// 			if (num.trim() === '') {
// 				alert('Ошибка: Вы не ввели число. Пожалуйста, введите правильное число.');
// 				continue; 			}

// 			number = Number(num);

// 			if (!isNaN(number)) {
// 				return number;
// 			};

// 			alert('Ошибка введите правильное число');
// 		}
// 	}

// 	this.enterOperator = function (promptMess) {
// 		let oper;

// 		while (true) {
// 			oper = prompt(promptMess);

// 			if (oper === null) {
// 				alert('Вы вышли из программы');
// 				return null;
// 			};

// 			if (['+', '-', '*', '/'].includes(oper)) {
// 				return oper; // Возвращаем корректную операцию
// 			}

// 			alert('Ошибка: Пожалуйста, введите корректную операцию: +, -, *, /');
// 		}
// 	}


// 	this.operation = function () {
// 		switch (this.oper) {
// 			case '+':
// 				this.resalt = this.a + this.b;
// 				break;
// 			case '-':
// 				this.resalt = this.a - this.b;
// 				break;
// 			case '*':
// 				this.resalt = this.a * this.b;
// 				break;
// 			case '/':
// 				if (this.b === 0) {
// 					alert('Ошибка: Деление на ноль не допускается.');
// 					return;
// 				}
// 				this.resalt = this.a / this.b;
// 				break;
// 			default:
// 				this.resalt = 0;
// 		}
// 		this.show();
// 	};

// 	this.show = function () {
// 		alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.resalt);
// 	};
// }

// let kalc1 = new Calculator();
// kalc1.enter()

/* Лампочка*/
// function Lamp(brand, power) {
// 	this.brand = brand;
// 	this.power = power;
// 	this.status = false;
// 	this.timeStart = null;
// 	this.timeEnd = null;
// 	this.timeAll = 0;

// 	this.on = function () {
// 		this.status = true;

// 		this.timeStart = new Date().getTime();
// 		this.timeEnd = null; // сброс на 0
// 	};

// 	this.off = function () {
// 		this.status = false;

// 		this.timeEnd = new Date().getTime();

// 		if (this.timeStart && this.timeEnd) {
// 			let diffTime = ((this.timeEnd - this.timeStart) / 1000 / 1200).toFixed(3);
// 			this.timeAll += +diffTime;
// 		}
// 	};

// 	this.showTime = function () {
// 		if (this.status) {
//       console.log("Лампочка в данный момент включена.");
//       return;
//     }

// 		let timeStart = new Date(this.timeStart);
// 		let timeEnd = new Date(this.timeEnd);

// 		let diffTime = ((this.timeEnd - this.timeStart) / 1000 / 1200).toFixed(3); // разница


// 		console.log(`Лампочка была включена в ${timeStart.toLocaleTimeString()}`);
// 		console.log(`Лампочка была выключенa в ${timeEnd.toLocaleTimeString()}`);
// 		console.log(`Лампочка работала последнию сессию ${diffTime} часа`);
// 		console.log(`Лампочка работала всего ${this.timeAll} часа`);
// 	};

// 	this.price = function () {
// 		console.log(this.power / 1000 * this.timeAll * 0.45888 + 'руб');
// 	};
// };

// let lamp1 = new Lamp('inhome', 20);
// let lamp2 = new Lamp('philips', 50);
// let lamp3 = new Lamp('xiaomi', 100);