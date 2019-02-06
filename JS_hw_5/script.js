
// Task #1

function checkPropertyInObject(obj, string) {
  if (string in obj) {
    return alert('Есть!'); // в условиях нет вывода алерта
  } else {
    return alert('Такого свойства нет!');
  }
}

checkPropertyInObject({name: 'Luke', age: 'unknown'}, 'nam');


// Task #2

var recipeForFourPortions = {
  name: 'knedliki',
  portions: 4,
  'flour grams': 1000, // лучше всеже flourGrams или вовсе flour (обычно вы будете знать систему исчисления)
  'milk milliliters': 400,
  eggs: 2,
  'salt grams': 10,
  'yeast grams': 20
};

function getRecipeForOnePortion(recipe) {
  var onePortion = 'For 1 portion of ' + recipe['name'] + ' you need';

  for (var key in recipe) {
    if (key !== 'name' && key !== 'portions') {
      onePortion += ' ' + recipe[key] / recipe['portions'] + ' ' + key + ','; // сложно читается, такое лучше разбивать, а то и вовсе выносить в функцию-хелпер
    }
  }

  return console.log(onePortion);
}

getRecipeForOnePortion(recipeForFourPortions);

// Task #3

var cylinder = {
  radius: 3,
  height: 10
};

cylinder.volume = function() {
  return 3.14 * (this.radius ** 2) * this.height;
};

console.log(cylinder.volume());


// Task #4

var penguin = {
  name: 'Skipper',
  creator: 'Tom McGrath',
  source: 'animation movie Madagascar'
};

penguin.canFly = false;
penguin.sayHello = function() {
  return console.log('Hello! My name is ' + this.name + '. My creator is ' +
  this.creator + '. You can see me in ' + this.source);
};
penguin.fly = function() {
  if (this.canFly) {
    return console.log(this.name + ' может летать!');
  }

  return console.log(this.name + ' не был рожден летать!');
}

penguin.sayHello();
penguin.fly();
