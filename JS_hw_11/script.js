'use strict';

//Task #1

function User(name, surname) {
  this.name = name;
  this.surname = surname;

  this.getFullName = function() {
    return this.name + ' ' + this.surname;
  }
}

function Student(name, surname, year) {
  User.apply(this, arguments);

  this.year = year;

  this.getCourse = function() {
    let now = new Date(),
    thisYear = now.getFullYear()
    ;

    if (thisYear - year < 6) {
      alert(this.getFullName() + ' учиться на ' + (thisYear - year) + ' курсе'); // такое лучше в функцию
    } else {
      alert(this.getFullName() + ' уже все умеет!');
    }
  };
}

//Task #2

function Sandwiches() {
  this.name = 'Сандвич';

  this.compositionCalories = {
    bun: 80,
    beef: 120,
    ketchup: 20,
    mustard: 20,
    onion: 10,
    cucumber: 10
  };

  this.compositionCents = {
    bun: 5,
    beef: 50,
    ketchup: 5,
    mustard: 5,
    onion: 10,
    cucumber: 10
  };

  this.getAllCalories = function() {
    let sum = 0;

    for (let key in this.compositionCalories) {
      sum += this.compositionCalories[key];
    };

    alert('Ваш ' + this.name + ' содержит ' + sum + ' ккал!'); // такое лучше в функцию
  };

  this.getCost = function() {
    let sum = 0,
    dollars = 0,
    cents = 0
    ;

    for (let key in this.compositionCents) {
      sum += this.compositionCents[key];
    };
    dollars = Math.floor(sum / 100);
    cents = sum - dollars * 100;

    if (dollars) {
      alert('Ваш ' + this.name + ' стоит ' + dollars + ' доллар и ' + cents + ' центов!'); // такое лучше в функцию
    } else {
      alert('Ваш ' + this.name + ' стоит ' + cents + ' центов!');
    }

  };
}

function Hamburger() {
  Sandwiches.call(this); // бергеры разве сендвичи?

  this.name = 'Гамбургер';
}

function Cheeseburger() {
  Sandwiches.call(this);

  this.name = 'Чизбургер';

  this.compositionCalories['cheese'] = 50;
  this.compositionCents['cheese'] = 15;
}

function BigMac() {
  Sandwiches.call(this);

  this.name = 'БигМак';

  this.compositionCalories['cheese'] = 50;
  this.compositionCents['cheese'] = 15;
  this.compositionCalories['salad'] = 5;
  this.compositionCents['salad'] = 5;
  this.compositionCalories['bun'] = 1.5 * this.compositionCalories['bun'];
  this.compositionCents['bun'] = 1.5 * this.compositionCents['bun'];
  this.compositionCalories['beef'] = 2 * this.compositionCalories['beef'];
  this.compositionCents['beef'] = 2 * this.compositionCents['beef'];
}

function BigTasty() {
  Sandwiches.call(this);

  this.name = 'БигТейсти';

  this.compositionCalories['cheese'] = 50;
  this.compositionCents['cheese'] = 15;
  this.compositionCalories['salad'] = 5;
  this.compositionCents['salad'] = 5;
  this.compositionCalories['tomato'] = 10;
  this.compositionCents['tomato'] = 10;
  delete this.compositionCalories['cucumber'];
  delete this.compositionCents['cucumber'];
}

//Task #3

var form = document.forms.add_event,
buttonAdd = form.addition,
timeForm = form.querySelector('.add-event-time'),
descriptionForm = form.querySelector('.add-event-description'),
eventsContainer = document.querySelector('.actual-events'),
warningTime = form.querySelector('.add-event_error')
;

function Recalling() {
  var eventBlock = document.createElement('div'),
  status = document.createElement('div'),
  time = document.createElement('div'),
  description = document.createElement('div'),
  button = document.createElement('button'),
  tomorrowEvent = false
  ;

  function checkSetTime() {
    var regTime = /^[0-9]{2}\:[0-9]{2}$/;

    if (!regTime.test(timeForm.value) || +timeForm.value.slice(0, 2) >= 24) { // некрасия проверка, такое лучше выносить в функцию с осмысленным названием
      warningTime.style.display = 'block';
      warningTime.style.top = form.offsetHeight+ form.offsetTop + 3 + 'px'; // такое лучше в функцию
      warningTime.style.left = timeForm.offsetLeft + 30 - warningTime.offsetWidth / 2 + 'px';
    } else {
      warningTime.style.display = 'none';
    }

    return (regTime.test(timeForm.value) && +timeForm.value.slice(0, 2) < 24);
  }

  function addClasses() { // возможно лучше представить как массив и пройтись по нему
    eventBlock.classList.add('actual-events-item');
    status.classList.add('event-status-not-ready');
    status.classList.add('actual-events-status');
    time.classList.add('actual-events-time');
    description.classList.add('actual-events-description');
    button.classList.add('actual-events-action');
  }

  function addContent() {
    if (tomorrowEvent) {
      time.innerHTML = timeForm.value + '*';
    } else {
      time.innerHTML = timeForm.value;
    }
    description.innerHTML = descriptionForm.value;
    button.innerHTML = 'Неактуально';
  }

  function appendBlock() {
    eventBlock.appendChild(status);
    eventBlock.appendChild(time);
    eventBlock.appendChild(description);
    eventBlock.appendChild(button);

    eventsContainer.appendChild(eventBlock);
  }

  function changeStatusEvent() {
    var audio = document.createElement('audio');

    status.classList.remove('event-status-not-ready');
    status.classList.add('event-status-ready');

    button.innerHTML = 'Готово';
    audio.style.display = 'none';
    audio.autoplay = true;
    audio.src = 'https://pro-sound.org/uploads/tracks/budilniki/Sound_19482.mp3';

    eventsContainer.appendChild(audio);
  }

  function countTime() {
    var now = new Date,
    futureTime = new Date,
    userTimeString = timeForm.value,
    userHours = +userTimeString.slice(0, 2),
    userMinutes = +userTimeString.slice(3, 5)
    ;

    futureTime.setHours(userHours, userMinutes, 0);

    if (futureTime - now < 0) { // проверка
      var tomorrow = now.getDate() + 1;
      futureTime.setDate(tomorrow);
      tomorrowEvent = true;
    }

    return futureTime - now;
  }

  this.createEvent = function() {
    if (!checkSetTime()) {
      return;
    }

    var time = countTime(),
    timerId = setTimeout(changeStatusEvent, time)
    ;

    addClasses();
    addContent();
    appendBlock();

    button.addEventListener('click', function() {
      clearTimeout(timerId);
      eventsContainer.removeChild(button.parentElement);
    });
  };
}

buttonAdd.addEventListener('click', function() {
  let newEvent = new Recalling;
  newEvent.createEvent();
});


//bottom
