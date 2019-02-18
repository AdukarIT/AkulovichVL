'use strict';

//Task #1 Непонятна отсылка к задаче из практики. Также не указано, откуда стоит брать массив.

var arr = ['abf', 'sdfk', 'fdbaa', 'dfdfa']

function countAmountSameSymbols(symbolUnicode) { // да, задача неясна, но лучше не изменять внешние переменные внутри функции, передавайте и возвращайте вместо
  var str = String.fromCharCode(symbolUnicode),
  counter = 0;

  for (var i = 0; i < arr.length; i++) {
    var index = 0;

    while (arr[i].indexOf(str, index) > -1) {
      counter++;
      index = arr[i].indexOf(str, index) + 1;
    }
  }

  return counter;
}

console.log(countAmountSymbols(102));

// Task #2

function countOneSymbol(symbolUnicode) {
  var str = String.fromCharCode(symbolUnicode);

  return function(arr) {
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
      var index = 0;

      while (arr[i].indexOf(str, index) > -1) {
        counter++;
        index = arr[i].indexOf(str, index) + 1;
      }
    }

    return counter;
  };
}

let countOfF = countOneSymbol(102);
console.log(countOfF(['abf', 'sdfk', 'fdbaa', 'dfdfa']));

let countOfB = countOneSymbol(98);
console.log(countOfB(['abf', 'sdfk', 'fdbaa', 'dfdfa']));


// Task #3 Штат тоже можно менять.
// Во всех следующих задача указан массив 'data' из файла uscities.js

function findCitiesFromState(state) {
  var arr = data.filter(function(city) { // тут опять лучше передать эту дату
    return city.state == state;
  });

  return function() {
    return arr.filter(function(city) {
      return parseFloat(city["growth_from_2000_to_2013"]) > 0;
    });
  };
}


let californiaGrowingCities = findCitiesFromState("California");
console.log(californiaGrowingCities());


// Task #4 Границы можно задать при вызове.

function countPopulationInParticularLatitudes(lowerLatitude, upperLatitude) {
  var sumOfPopulation = 0;

  data.forEach(function(city) {
    if (city['latitude'] > lowerLatitude && city['latitude'] < upperLatitude) {
      sumOfPopulation += +city['population'];
      //console.log(city.city + ' = ' + city.population);
    }
  });

  return Math.round(sumOfPopulation / (10 ** 5)) / 10;
}

console.log(countPopulationInParticularLatitudes(25, 30) + ' млн человек');

// Task #5

function findCitiesWithFirstLetterDAndSortThem() {
  var citiesD = data.filter(function(city) {
    return city['city'][0] === 'D';
  });

  //console.log(citiesD);

  return citiesD.sort(function(a, b) {
    if (a.city > b.city) { // return a.city > b. city ? 1 : 2;
      return 1;
    } else {
      return -1;
    }
  });
}

console.log(findCitiesWithFirstLetterDAndSortThem());

// Task #6

function createNewObjectStatesFromArrayCities() {
  var states = {};

  data.forEach(function(city) {
    if (!states[city['state']]) {
      states[city['state']] = [];
      states[city['state']][0] = {
        'city': city['city'], // тут необязательны ковычки на ключах
        'population': city['population'],
        'rank': city['rank']
      };
    } else {
      states[city['state']].push({
        'city': city['city'],
        'population': city['population'],
        'rank': city['rank']
      })
    }
  })

  return states;
}

console.log(createNewObjectStatesFromArrayCities());













// bottom
