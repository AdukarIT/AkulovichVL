// Task #1

function getRandomArray(len) {
  var arr = [];

  for (var i = 0; i < len; i++) {
    arr[i] = Math.round(Math.random() * 100) / 100;
  }

  return arr;
}

var randomArray = getRandomArray(10);
var additionalArray = getRandomArray(10);
console.log(randomArray);
console.log(additionalArray);


//Task #2

function getNumbersMoreAverage(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  var average = sum / arr.length;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      console.log(arr[i]);
    }
  }
}

getNumbersMoreAverage(randomArray);

//Task #3

function findTwoSmallestNumbers(arr) {
  var firstSmallestNumber = 1;
  var secondSmallestNumber = 1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallestNumber && arr[i] < secondSmallestNumber) {
      if (firstSmallestNumber < secondSmallestNumber) {
        secondSmallestNumber = arr[i];
      } else {
        firstSmallestNumber = arr[i];
      }
      continue;
    }
    if (arr[i] < firstSmallestNumber) {
      firstSmallestNumber = arr[i];
    }
    if (arr[i] < secondSmallestNumber) {
      secondSmallestNumber = arr[i];
    }
  }

  console.log(firstSmallestNumber);
  console.log(secondSmallestNumber);

  return firstSmallestNumber + ' ' + secondSmallestNumber;
}

findTwoSmallestNumbers(randomArray);


// Task #4 (не совсем понятное условие)
//как понял я, массив должен быть равен примерно [0, 0, 0, 5, 2, 7, 9];

function deleteTooSmallNumbers(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0.3) {
      arr.splice(i, 1);
      arr.unshift(0);
    }
  }

  return arr;
}

console.log(deleteTooSmallNumbers(randomArray));

//Task #5

function addTwoArrays(arr1, arr2) {
  var sumArray = [];
  for (var i = 0; i < arr1.length; i++) {
    sumArray[i] = Math.round((arr1[i] + arr2[arr2.length - 1 - i]) * 100) / 100;
  }

  return sumArray;
}

console.log(addTwoArrays(randomArray, additionalArray));

//Task #6

function sortArray(arr) {
  var tempNumber = 0;
  var wasExchange = true;

  while (wasExchange) {
    wasExchange = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        tempNumber = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempNumber;
        wasExchange = true;
      }
    }
  }

  return arr;
}

console.log(sortArray(randomArray));


// Task #7 (в массиве числа округлены до 2 знаков, поэтому здесь ищет сумму равную 1)

function findSumAboutOne(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] > 0.999 && arr[i] + arr[j] < 1.001) {
        console.log('Нашлась парочка: ' + arr[i] + ' и ' + arr[j]);
      }
    }
  }
}

findSumAboutOne(randomArray);

//Task #8

function createSimilarArrayWithMark(arr) {
  var arrayWithIndexes = [];
  var newArray = [];
  var biggestNumber = 0;
  var index = 0;

  while (arrayWithIndexes.length < arr.length) {
    biggestNumber = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > biggestNumber) {
        biggestNumber = arr[i];
        index = i;
      }
    }
    arr[index] = 0;
    arrayWithIndexes.push(index);
  }

  for (var i = 0; i < arrayWithIndexes.length; i++) {
    newArray[arrayWithIndexes[i]] = i + 1;
  }

  return newArray;
}

console.log(createSimilarArrayWithMark(randomArray));

// Task #8.2 (в случае если известно, что все числа < 1)

function createArrayWithMark(arr) {
  var counter = 1;
  var biggestNumber = 0;
  var index = 0;

  while (counter <= arr.length) {
    biggestNumber = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > biggestNumber && arr[i] < 1) {
        biggestNumber = arr[i];
        index = i;
      }
    }
    arr.splice(index, 1, counter);
    counter++;
  }

  return arr;
}

console.log(createArrayWithMark(randomArray));

// Task #9

function moveArrayToRight(arr, x) {
  for (var i = 0; i < x; i++) {
    arr.unshift(arr.pop())
  }

  return arr;
}

console.log(moveArrayToRight(randomArray, 9));
