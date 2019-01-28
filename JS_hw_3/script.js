// Task #5


function typeNumbersExceptZero() {
  var num = 0;
  do {
    num = +prompt('Введите число:','1'); // подумайте про строки
  } while (num);
}

typeNumbersExceptZero(); // в задаче не указано про вернуть, но вы должны понимать, 
                        // что без возврата или каких-либо изменений функции лишены смысла

// Task #6


function showAmountTypedNumbers() {
  var num = 0;
  var sum = 0;
  var counter = 0;

  do {
    num = +prompt('Введите число:','1'); // про строки
    sum += num;
    counter++;
    console.log('Сумма введенных вами числе = ' + sum);
  } while (sum < 100);

  return counter;
}

alert(showAmountTypedNumbers());
*/

// Task #7


function checkSimpleNumber(number) {
  for (var i = 2; i < number; i++) {
    if (!(number % i)) {
      return false;
    }
  }

  return true;
}

console.log(checkSimpleNumber(19));


// Task #8


function nameSeasonForMonth(monthNumber) {
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      return console.log('Это зима');
    case 3:
    case 4:
    case 5:
      return console.log('Это весна');
    case 6:
    case 7:
    case 8:
      return console.log('Это лето');
    case 9:
    case 10:
    case 11:
      return console.log('Это осень');
    default:
      return console.log('Неверный ввод, Ошибка');
  }
}

nameSeasonForMonth(12);


// Task #9


function showNumbersConnectedWithSeven() {
  for (var i = 99; i >= 10; i--) {
    if ((!((i - 7) % 10)) || (!(i % 7))) { // такое лучше выводить в функцию
      console.log(i);
    }
  }
}

showNumbersConnectedWithSeven();



function showAmountDeviders(number) {
  counter = 0;

  for (var i = 1; i <= number; i++) {
    if (!(number % i)) {
      console.log(i + ' Является делителем числа ' + number);
      counter++;
    }
  }

  return 'Количество делителей числа ' + number + ' равно ' + counter;
}

function sortOutNumbers() {
  for (var i = 2; i <= 20; i++) {
    console.log('Делители числа ' + i);
    console.log(showAmountDeviders(i));
  }
}

sortOutNumbers();


// Task #11


function showAmountDeviders(number) {
  counter = 0;

  for (var i = 1; i <= number; i++) {
    if (!(number % i)) {
      console.log(i + ' Является делителем числа ' + number);
      counter++;
    }
  }

  return 'Количество делителей числа ' + number + ' равно ' + counter;
}

function sortOutNumbers(firstNumber, lastNumber) {
  for (var i = firstNumber; i <= lastNumber; i++) {
    console.log('Делители числа ' + i);
    console.log(showAmountDeviders(i));
  }
}

sortOutNumbers(15, 24);


// Task #12 (при условии, что 1 Кб = 1000 б и т.д.)


function countBytes(size, unit) {
  var multiplier = 1;

  switch (unit) {
    case 'Кб':
      multiplier = 10 ** 3;
      break;
    case 'Мб':
      multiplier = 10 ** 6;
      break;
    case 'Гб':
      multiplier = 10 ** 9;
      break;
  }

  return size * multiplier;
}

console.log(countBytes(12, 'Мб'));


// Task #13


function findBiggestCommonDevider(firstNumber, secondNumber) {
  while (firstNumber != 0 && secondNumber != 0) {
    if (firstNumber - secondNumber > 0) {
      firstNumber = firstNumber % secondNumber;
    } else {
      secondNumber = secondNumber % firstNumber;
    }
  }

  return firstNumber + secondNumber;
}

console.log(findBiggestCommonDevider(72, 512));


// Task #14


function findBiggestCommonDevider(firstNumber, secondNumber) {
  var devider = 0;

  if (firstNumber - secondNumber > 0) {
    firstNumber = firstNumber % secondNumber;
  } else {
    secondNumber = secondNumber % firstNumber;
  }

  if (firstNumber == 0 || secondNumber == 0) {
    devider = firstNumber + secondNumber;
    return devider;
  } else {
    devider = findBiggestCommonDevider(firstNumber, secondNumber);
  }

  return devider;
}

console.log(findBiggestCommonDevider(512, 48));


// Task #15


function words(n) {
  var pencil = ' карандаш';

  if ((n >= 5 && n <= 19) || ((n % 10) > 4) || (!(n % 10))) {
    return n + pencil + 'ей';
  } else if ((n % 10) == 1) {
    return n + pencil;
  } else {
    return n + pencil + 'а';
  }
}

console.log(words(11));


// Task #16


function isNumberSumOfTwoSquares(number) {
  for (var i = 0; i < 10; i++) {
    for (var j = i; j < 10; j++) {
      if (number == j * j + i * i) { // j**2, i**2 и лучше никогда не используйте сравнение с приведением
        console.log(j);
        console.log(i);
        return true;
      }
    }
  }

  return false;
}

console.log(isNumberSumOfTwoSquareNumbers(162)); // следите за названиями переменными

