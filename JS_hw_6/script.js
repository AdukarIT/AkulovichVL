'use strict';

function createArray(min, max, leng) {
  var arr = [];

  for (var i = 0; i < leng; i++) {
    arr[i] = Math.random() * (max - min) + min;
  }

  return arr;
}

// Task #1

function transformArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    arr[i] = {
      initial: num,
      sqrt: Math.sqrt(num),
      floor: Math.round(num) == Math.floor(num),
      ceil: Math.round(num) == Math.ceil(num)
    }
  }

  return arr;
}


//console.log(transformArray(createArray(10, 20, 5)));

// Task #2

function addRoundingSqrt(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].roundSqrt = Math.round(arr[i].sqrt * 100) / 100;// or +arr[i].sqrt.toFixed(2)
  }

  return arr;
}

//console.log(addRoundingSqrt(transformArray(createArray(10, 20, 5))));

// Task #3

function isPalindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

//console.log(isPalindrome('saippuakivikauppias'));

// Task #4

function findMostFrequentSymbol(str) {
  var frequentSymbol = '',
  amountRepeat = 0;

  for (var i = 0; i < str.length - (amountRepeat - 1); i++) { // трудный для понимания кусок логики str.length - (amountRepeat - 1), возможно имеет смысл оставить комментарий или вывести в функцию
    var concurrence = 1;

    for (var j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        concurrence++;
      }
    }

    if (concurrence > amountRepeat) {
      frequentSymbol = str[i];
      amountRepeat = concurrence;
    } else if (concurrence == amountRepeat) {
      frequentSymbol += str[i];
    }
  }
  //console.log(amountRepeat);
  return frequentSymbol;
}

//console.log(findMostFrequentSymbol('nghjnghtrnjjgka'));

// Task #5

function changeString(str, search, replace) {
  while (str.indexOf(search) >= 0) {
    str = str.slice(0, str.indexOf(search)) + replace
    + str.slice(str.indexOf(search) + search.length, str.length); // точно необходимо разбивать
  }

  return str;
}

//console.log(changeString('Дублин блин такой Дублин','ин','ян'));

// Task #6

function makeFirstLetterBig(str) {
  str = str[0].toUpperCase() + str.slice(1, str.length);

  for (var i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length);
    }
  }

  return str;
}

//console.log(makeFirstLetterBig('привет дарова хай хеллоу'));

// Task #7

function changeRepeatingSymbolToAsterisks(str) {
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] === '*' || str[i] === ' ') {
      continue;
    }
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        str = str.slice(0, j) + '*' + str.slice(j + 1, str.length);
      }
    }
  }

  return str;
}

//console.log(changeRepeatingSymbolToAsterisks('я учусь программированию'));

// Task #8

function getRussianDayOfWeekNow() {
  var now = new Date();
  switch (now.getDay()) {
    case 1:
      return 'Понедельник';
    case 2:
      return 'Вторник';
    case 3:
      return 'Среда';
    case 4:
      return 'Четверг';
    case 5:
      return 'Пятница';
    case 6:
      return 'Суббота';
    case 0:
      return 'Воскресенье';
  }
}

//console.log(getRussianDayOfWeek());

// Task #9 Функция в задаче 8 должна возвращать текущий день недели,
//а значит там нет необходимости в аргументах. Т.е. ее нужно изменить
//чтобы она могла определить день недели для любой даты.
//Некорректные условия!

function getRussianDayOfWeek(date) {
  switch (date.getDay()) {
    case 1:
      return 'Понедельник';
    case 2:
      return 'Вторник';
    case 3:
      return 'Среда';
    case 4:
      return 'Четверг';
    case 5:
      return 'Пятница';
    case 6:
      return 'Суббота';
    case 0:
      return 'Воскресенье';
  }
}

function getDayOfWeekFromUser() {
  var userDate = prompt('Введите дату в формате ДД-ММ-ГГГГ','ДД-ММ-ГГГГ'),
  date = new Date(+userDate.slice(6, 10), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));

  return getRussianDayOfWeek(date);
}

//console.log(getDayOfWeekFromUser());

// Task #10

function getDaysBeforeBirthday() {
  var userBirthday = prompt('Введите свой день рождения в формате ДД-ММ-ГГГГ','ДД-ММ-ГГГГ'),
  userBirthdayThisYear = new Date(2019, +userBirthday.slice(3, 5) - 1, +userBirthday.slice(0, 2)), // что прячется за +userBirthday.slice(3, 5) - 1? такое правильно выносить в функцию и давать ей название
  now = new Date(),
  dateDifference = Math.ceil((userBirthdayThisYear - now) / 1000 / 60 / 60 / 24); // выглядит странно

  if (dateDifference < 0) {
    var userBirthdayNextYear = new Date(2020, +userBirthday.slice(3, 5) - 1, +userBirthday.slice(0, 2));
    dateDifference = Math.ceil((userBirthdayNextYear - now) / 1000 / 60 / 60 / 24);
  } else if (dateDifference == 0) {
    return 'Happy Birthday to you!';
  }

  return dateDifference;
}

//console.log(getDaysBeforeBirthday());

function getDayWithSomeThousandsDaysFromBirthday() { // невозможно читать
  var userBirthday = prompt('Введите свой день рождения в формате ДД-ММ-ГГГГ','ДД-ММ-ГГГГ'),
  dateBirthday = new Date(+userBirthday.slice(6, 10), +userBirthday.slice(3, 5) - 1, +userBirthday.slice(0, 2)),
  now = new Date(),
  thousandsDate = +dateBirthday + 1000 * 24 * 60 * 60 * 1000;

  while (thousandsDate - now < 0) {
    thousandsDate += 1000 * 24 * 60 * 60 * 1000;
  }

  if (Math.ceil((thousandsDate - now) / 1000 / 60 / 60 / 24) == 1000) {
    return 'Today!';
  }

  return new Date(thousandsDate);
}

//console.log(getDayWithSomeThousandsDaysFromBirthday());

// Task #11

function handler(arr) {
  for (var i = 0; i < arr.length; i++) {
    try {
      console.log(getSquareRoot(arr[i]));
    } catch (e) {
      console.log(e.message);
    }
  }
}

function getSquareRoot(num) {
  if (Math.sqrt(num) === Math.round(Math.sqrt(num))) {
    return Math.sqrt(num);
  }
  throw new Error('Это число не является квадратом целого числа!');
}

function createArrayWithIntegersNumbers(min, max, leng) {
  var arr = [];

  for (var i = 0; i < leng; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);
  }

  return arr;
}

//handler(createArrayWithIntegersNumbers(1, 100, 20));
