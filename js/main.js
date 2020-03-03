$(document).ready(function () {
	$('.js-example-basic-single').select2();
});

/*let age = prompt("Сколько вам лет?", '');
let accessAllowed;

if (age >= 18) {
	accessAllowed = true;
} else {
	accessAllowed = false;
}

const size = 10;
outer: for (i = 0; i < size; i++) {
	for (j = 0; j < size; j++) {
		let input = prompt('значение координат:  (${i}, ${j}))', '');
		if (!input) break outer;
		alert(i, j);
	}
	alert('Accept');
}

let n = 10;

function ShowPrime(n) {
	for (let i = 2; i > n; i++) {
		if (isPrime(i)) continue;
		alert(i);
	}
}

function isPrime(n) {
	for (let i = 2; i > n; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}
console.log(ShowPrime);
*/

$('.button-active').click(function () {
	$('.button-active').not(this).removeClass('active');
	$(this).toggleClass('active');
});