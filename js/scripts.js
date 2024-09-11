/* Калькулятор */
let Calculator = function () {

	this.enter = function () {
		this.a = this.enterNumber('Введите число а');
		if (this.a === null) return;

		this.b = this.enterNumber('Введите число b');
		if (this.b === null) return;

		this.oper = this.enterOperator('Введите нужную операцию +  -   *  /');
		if (this.oper === null) return;

		this.operation();
	};

	this.enterNumber = function (promptMess) {
		let number;

		while (true) {
			let num = prompt(promptMess);

			if (num === null) {
				alert('Вы вышли из программы');
				return null;
			};

			if (num.trim() === '') {
				alert('Ошибка: Вы не ввели число. Пожалуйста, введите правильное число.');
				continue; 			}

			number = Number(num);

			if (!isNaN(number)) {
				return number;
			};

			alert('Ошибка введите правильное число');
		}
	}

	this.enterOperator = function (promptMess) {
		let oper;

		while (true) {
			oper = prompt(promptMess);

			if (oper === null) {
				alert('Вы вышли из программы');
				return null;
			};

			if (['+', '-', '*', '/'].includes(oper)) {
				return oper; // Возвращаем корректную операцию
			}

			alert('Ошибка: Пожалуйста, введите корректную операцию: +, -, *, /');
		}
	}


	this.operation = function () {
		switch (this.oper) {
			case '+':
				this.resalt = this.a + this.b;
				break;
			case '-':
				this.resalt = this.a - this.b;
				break;
			case '*':
				this.resalt = this.a * this.b;
				break;
			case '/':
				if (this.b === 0) {
					alert('Ошибка: Деление на ноль не допускается.');
					return;
				}
				this.resalt = this.a / this.b;
				break;
			default:
				this.resalt = 0;
		}
		this.show();
	};

	this.show = function () {
		alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.resalt);
	};
}

let kalc1 = new Calculator();
kalc1.enter()

/* Лампочка*/
function Lamp(brand, power) {
	this.brand = brand;
	this.power = power;
	this.status = false;
	this.timeStart = null;
	this.timeEnd = null;
	this.timeAll = 0;

	this.on = function () {
		this.status = true;

		this.timeStart = new Date().getTime();
		this.timeEnd = null; // сброс на 0
	};

	this.off = function () {
		this.status = false;

		this.timeEnd = new Date().getTime();

		if (this.timeStart && this.timeEnd) {
			let diffTime = ((this.timeEnd - this.timeStart) / 1000 / 1200).toFixed(3);
			this.timeAll += +diffTime;
		}
	};

	this.showTime = function () {
		if (this.status) {
      console.log("Лампочка в данный момент включена.");
      return;
    }

		let timeStart = new Date(this.timeStart);
		let timeEnd = new Date(this.timeEnd);

		let diffTime = ((this.timeEnd - this.timeStart) / 1000 / 1200).toFixed(3); // разница


		console.log(`Лампочка была включена в ${timeStart.toLocaleTimeString()}`);
		console.log(`Лампочка была выключенa в ${timeEnd.toLocaleTimeString()}`);
		console.log(`Лампочка работала последнию сессию ${diffTime} часа`);
		console.log(`Лампочка работала всего ${this.timeAll} часа`);
	};

	this.price = function () {
		console.log(this.power / 1000 * this.timeAll * 0.45888 + 'руб');
	};
};

let lamp1 = new Lamp('inhome', 20);
let lamp2 = new Lamp('philips', 50);
let lamp3 = new Lamp('xiaomi', 100);

/*
--------Мультиварка-------
1. вкл/выкл
2. выбор режима:
	1. Разогрев
	2. Варка
	3. Жарка
	4. Суп
	5. круппы
3. Запуск программы
4. Время готовки в зависимости от заданной программы (вывести сколько прошло времени)
*/


function Multivarka() {
  this.status = false;
  this.onProg = null;
  this.offProg = null;
  this.time = 0;
  this.temp = 0;

  this.on = function () {
    this.status = true;
    this.get();
  };

  this.off = function () {
    this.status = false;
    this.onProg = null;
    this.offProg = null;
    this.time = 0;
    this.temp = 0;
    console.log("Мультиварка выключена");
  };

  this.get = function () {
    this.prog = parseInt(prompt(`Введите № программы:
    1 - Разогрев
    2 - Варка
    3 - Жарка
    4 - Суп
    5 - Круппы
    `));

    this.programm();

    if (confirm("Вы хотите начать выполнение выбранной программы? Да/Нет")) {
      this.onProg = new Date();
      this.offProg = new Date(this.onProg.getTime() + this.time * 60000);
      console.log(`Запуск программы в ${this.onProg.toLocaleTimeString()}, закончится выполнение программы в ${this.offProg.toLocaleTimeString()}.`);
    } else {
      console.log("Программа отменена.");
    }
  };

  this.checkTime = function () {
    let time = new Date();
    let diffTime = Math.floor((time.getTime() - this.onProg.getTime()) / 1000);
    let progTime = this.time * 60;

    let formattedT = this.formatTime(diffTime);
    let formattedO = this.formatTime(progTime - diffTime);

    console.log(`Программа была запущена в ${this.onProg.toLocaleTimeString()}`);
    console.log(`Время прошло ${formattedT}`);
    console.log(`Программа завершится в ${this.offProg.toLocaleTimeString()}`);

    if (diffTime <= progTime) {
      console.log(`Осталось ${formattedO} сек. Общее время работы программы: ${this.time} мин.`);
    } else {
      console.log("Программа выполнена");
      this.off();
    }
  };

  this.formatTime = function (sec) {
    let hours = String(Math.floor(sec / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    let sek = String(sec % 60).padStart(2, '0');
    return `${hours}:${minutes}:${sek}`;
  };

  this.programm = function () {
    switch (this.prog) {
      case 1:
        this.time = 1;
        this.temp = 80;
        console.log(`Выбранна программа Разогрев:
        Время приготовления = ${this.time} мин.
        Температура приготовления = ${this.temp} градусов`);
        break;
      case 2:
        this.time = 2;
        this.temp = 60;
        console.log(`Выбранна программа Варка:
        Время приготовления = ${this.time} мин.
        Температура приготовления = ${this.temp} градусов`);
        break;
      case 3:
        this.time = 3;
        this.temp = 10;
        console.log(`Выбранна программа Жарка:
        Время приготовления = ${this.time} мин.
        Температура приготовления = ${this.temp} градусов`);
        break;
      case 4:
        this.time = 4;
        this.temp = 70;
        console.log(`Выбранна программа Суп:
        Время приготовления = ${this.time} мин.
        Температура приготовления = ${this.temp} градусов`);
        break;
      case 5:
        this.time = 5;
        this.temp = 80;
        console.log(`Выбранна программа Круппы:
        Время приготовления = ${this.time} мин.
        Температура приготовления = ${this.temp} градусов`);
        break;
      default:
        console.log('Неверный номер программы. Пожалуйста, выберите от 1 до 5');
    }
  };
}

const Readmond = new Multivarka();