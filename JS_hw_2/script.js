//Task #1


function findSmallestNumber(a, b, c) {
  if (a - b <= 0 && a - c < 0) {
    return a;
  } else if (b - c < 0 && b - a <= 0) {
    return b;
  } else {
    return c;
  }
}

console.log(findSmallestNumber(2, 2, 1));


//Task #2


function countAmountSec(days, hours, minutes) {
  var sec = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60; // выглядит не очень
  return sec;
}

console.log(countAmountSec(1, 3, 25));


//Task #3


function countFactorial(n) {
  if (n == 0) {
    return 1;
  }

  return n * countFactorial(n - 1);
}

console.log(countFactorial(1));


//Task #4


function reverseNumber(n) {
  var newNumber = '';
  var counter = 0;

  while ((n % 10)) {
    counter++;
    n--;
  }

  if (n == 0) {
    return newNumber = '' + counter;
  }

  newNumber = '' + counter + reverseNumber(n / 10);

  return newNumber;
}

console.log(+reverseNumber(123000789));


//Task #5


function solveSquareEquation(a, b, c) {
  var discriminant = (b ** 2) - 4 * a * c;

  if (discriminant < 0) {
    return '0 корней';
  } else if (discriminant == 0) {
    console.log('x = ' + (-b + Math.sqrt(discriminant)) / (2 * a));

    return '1 корень'; // либо два, но равных
  } else {
    console.log('x1 = ' + (-b + Math.sqrt(discriminant)) / (2 * a));
    console.log('x2 = ' + (-b - Math.sqrt(discriminant)) / (2 * a));

    return '2 корня';
  }
}

console.log(solveSquareEquation(2, 5, -3));

// прекрасно!
