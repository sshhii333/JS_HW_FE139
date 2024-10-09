let darkTheme = function () {
	let btnElem = document.querySelector('.btn-toggle');

	if (btnElem) {
		btnElem.addEventListener('click', function () {
			document.body.classList.toggle('BgDark');
		});
	};
};


let calc = function () {
	let btn = document.querySelector('[type="button"]');

	btn.addEventListener('click', function () {
		let numA = document.querySelector('[name="calc_number_a"]');
		let numB = document.querySelector('[name="calc_number_b"]');
		let operation = document.querySelector('[name="calc_operation"]');

		let result;

		numA = +numA.value;
		numB = +numB.value;
		operation = operation.value;

		switch (operation) {
			case 'add':
				result = numA + numB;
				break;
			case 'minus':
				result = numA - numB;
				break;
			case 'multiply':
				result = numA * numB;
				break;
			case 'divide':
				if (numB !== 0) {
					result = numA / numB;
				} else {
					result = 'На ноль делить нельзя';
				}
				break;
			default:
				result = 'Неверная операция';
		}

		let calcResult = document.querySelector('.calc__answer');
		calcResult.innerText = result;
	});
};


let portfolio = function(){
	let images = document.querySelectorAll('.image img');

	images.forEach(function(items){
		items.addEventListener('click', function(){

			let imageData = this.getAttribute('data-large');

			let imageLarge = document.getElementById('large');
			// console.dir(imageLarge);
			imageLarge.src = imageData;
		});
	});
};


darkTheme();
calc();
portfolio();
