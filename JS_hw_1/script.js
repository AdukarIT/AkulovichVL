// Task #1


var flatNumber = +prompt('Введите номер вашей квартиры', '');
var porchNumber = 1;
var tempFlatNumber = flatNumber;

if (flatNumber >= 1 && flatNumber <= 100) {
  while (tempFlatNumber > 20) { // хорошо!
    tempFlatNumber -= 20;
    porchNumber++ ;
  }

  console.log('Номер вашего подъезда ' + porchNumber);
} else {
  console.log('Квартиры с номером ' + flatNumber + ' в нашем доме нет!');
}


//Task #2


var autoBrand = prompt('Введите марку авто','');

switch (autoBrand) {
  case 'bmw':
  case 'BMW':
    console.log(autoBrand + ' - страна происхождения Германия');
    break;

  case 'peugeot':
  case 'Peugeot':
    console.log(autoBrand + ' - страна происхождения Франция');
    break;

  case 'audi':
  case 'Audi':
    console.log(autoBrand + ' - страна происхождения Германия');
    break;

  case 'renault':
  case 'Renault':
    console.log(autoBrand + ' - страна происхождения Франция');
    break;

  case 'skoda':
  case 'Skoda':
    console.log(autoBrand + ' - страна происхождения Чехия');
    break;

  case 'volvo':
  case 'Volvo':
    console.log(autoBrand + ' - страна происхождения Швеция');
    break;

  default:
    console.log(autoBrand + ' - страна происхождения неизвестна');
}


//Task #3


var year = +prompt('Введите високосный год','');

if (!(isNaN(year)) && !(year % 4)) {
  console.log(year + ' - високосный год. 29 февраля быть!');
} else {
  console.log('Ваш ввод неверен!');
}


//Task #4


var number = +prompt('Введите число от 1 до 20','');

if (number >= 1 && number <= 20) {
  for (var i = 1; i <= 20; i++) {
    console.log('Если умножить ' + number + ' на ' + i + ', то получится ' + (number * i) );
  }
} else {
  console.log('Вы ввели невверное число. Так не пойдет!');
}


//Task #5


var sum = 0;

for (var i = 1; i <= 50; i++) {
  if (!(i % 2)) {
    continue;
  }
  sum += i;
}

console.log('Сумма всех нечетных чисел от 1 до 50 равна ' + sum);


//Task #6


var firstNumberFibonacci = 1;
var secondNumberFibonacci = 1;
var nextNumberFibonacci = 0;

console.log('Число Фибоначчи номер ' + 1 + ' равно ' + firstNumberFibonacci);
console.log('Число Фибоначчи номер ' + 2 + ' равно ' + secondNumberFibonacci); // можно спрятать в цикл

for (var i = 3; i <= 15; i++) {
  nextNumberFibonacci = firstNumberFibonacci + secondNumberFibonacci;
  console.log('Число Фибоначчи номер ' + i + ' равно ' + nextNumberFibonacci);
  firstNumberFibonacci = secondNumberFibonacci;
  secondNumberFibonacci = nextNumberFibonacci;
}


//Task #7-1

var chessDesk = '';

for (var i = 1; i <= 8; i++) {
  if ((i % 2)) { // хорошо!
    chessDesk += ' # # # #\n';
  } else {
    chessDesk += '# # # # \n';
  }
}

console.log(chessDesk);


// Task #7-2


var chessCell = '';
var cellColor = true;
var chessDesk = '';

for (var i = 1; i <= 32; i++) {
  if (cellColor) {
    chessCell = ' #';
  } else {
    chessCell = '# ';
  }

  chessDesk += chessCell;

  if (!(i % 4)) {
    chessDesk += '\n';
    cellColor = !cellColor;
  }
}

console.log(chessDesk);

