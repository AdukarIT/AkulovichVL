'use strict';


//Task #1

var formName = document.forms.task_1,
inputName = formName.querySelector('#name'),
inputMinutes = formName.querySelector('#minutes'),
errorName = formName.querySelector('#nameError'),
errorMinutes = formName.querySelector('#minutesError'),
emptyName = formName.querySelector('#nameEmpty'),
emptyMinutes = formName.querySelector('#minutesEmpty'),
nameReg = /[^\w]/,
minutesReg = /[^0-9]/
;

formName.addEventListener('input', function(e) {
  if (e.target === inputName) {
    if (e.target.value) {
      emptyName.style.display = 'none';
    } else {
      emptyName.style.display = 'inline';
    }

    if (nameReg.test(e.target.value)) {
      e.target.focus();
      errorName.style.display = 'inline';
    } else {
      errorName.style.display = 'none';
    }
  }

  if (e.target === inputMinutes) {
    if (e.target.value) {
      emptyMinutes.style.display = 'none';
    } else {
      emptyMinutes.style.display = 'inline';
    }

    if (minutesReg.test(e.target.value)) {
      e.target.focus();
      errorMinutes.style.display = 'inline';
    } else {
      errorMinutes.style.display = 'none';
    }
  }
}); // у вас в коде задачи много дублирований, попробуйте подумать над оптимизацией, если не придумаете - сообщите на паре

//Task #2

var formSubmit = document.forms.task_2,
inputInfo = formSubmit.querySelector('#info'),
buttonSubmit = formSubmit.querySelector('#sent'),
buttonReset = formSubmit.querySelector('#reset')
;

buttonSubmit.addEventListener('click', function(e) {
  if (!inputInfo.value) {
    e.preventDefault();
  } else {
    formSubmit.submit();
  }
});

buttonReset.addEventListener('click', function() {
  inputInfo.value = '';
});

//Task #3 и #4 объединены в одну задачу
//Здесь функция - это обработчик по клику на кнопку 'checkButton'

var checkingForm = document.forms.task_3,
inputs = checkingForm.elements,
checkButton = checkingForm.check,
error = document.createElement('span'),
regText = /[^\w]/,
regEmail = /^[\w-]+?\@[\w-]+?\.[a-z]{1,3}$/,
regNumber = /([^\d\.])?(\.\d*\.)/,
regUrl = /^https?\:\/\/\w+?\.\S+$/,
regTel = /^\+375-[2,3,4][3,4,5,9]-?\d{3}-?\d{2}-?\d{2}$/,
regPassword = /^[a-z0-9]{8,}$/i
;

function addInputError(text, item) {
  item.classList = '';
  item.classList.add('red');
  if (item.nextElementSibling.nodeName !== 'SPAN') {
    error.innerHTML = '';
    error.appendChild(document.createTextNode(text));
    checkingForm.insertBefore(error.cloneNode(true), item.nextElementSibling);
  }
}

function addInputGood(item) {
  item.classList = '';
  item.classList.add('green');

  if (item.nextElementSibling.nodeName === 'SPAN') {
    item.nextElementSibling.remove();
  }
}

checkButton.addEventListener('click', function() {
  var checkMessage = true;

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i]
    ;

    if (input.nodeName !== 'INPUT') {
      continue;
    }

    switch (input.type) {
      // наверное, в тексте допустимы любые, но  пусть будут только \w
      case 'text':
        if (regText.test(input.value) || input.value === '') {
          addInputError('Введите только буквы латинского алфавита, цифры и "_"', input);
          checkMessage = false;
        } else {
          addInputGood(input);
        }
      break;
      // в типе 'number' все автоматически преобразуется к числу, всегда пройдет проверка
      case 'number':
        if (input.value.search(regNumber) > -1 || input.value === '') {
          addInputError('Введите только число, можно с десятичной дробью', input);
          checkMessage = false;
        } else {
          addInputGood(input);
        }
      break;

      case 'email':
        if (!regEmail.test(input.value) || input.value === '') {
          addInputError('Введите адрес электронной почты', input);
          checkMessage = false;
        } else {
          addInputGood(input);
        }
      break;

      case 'url':
        if (!regUrl.test(input.value) || input.value === '') {
          addInputError('Введите url адрес', input);
          checkMessage = false;
        } else {
          addInputGood(input);
        }
      break;

      case 'tel':
        if (!regTel.test(input.value) || input.value === '') {
          addInputError('Введите телефонный номер в формате +375-(25,33,44,29)-ххх-хх-хх', input);
          checkMessage = false;
        } else {
          addInputGood(input);
        }
      break;

      case 'password':
        if (!regPassword.test(input.value) || input.value === '') {
          addInputError('Введите пароль не менее 8 символов, только латинские буквы и цифры', input);
          checkMessage = false;
        } else {
          addInputGood(input);
        }
      break;
    }
  }

  if (checkMessage) {
    alert('Все поля успешно прошли проверку');
  }
}); // всё хорошо, но опять оптимизация

//Task #5

var str = 'Написать скрипт, которые заменяет слово "функция" в тексте на "функция", используя регулярные вырожения.',
result
;

result = str.replace(/\"функция\"/g,'«функция»');

//Task #6

var time = prompt('Введите время в 12-часовом формате (например: 11.11 am)','12.00 am'),
regTime = /^1?[0-9]\.[0-5][0-9] [ap]m$/
;

if (regTime.test(time) && parseInt(time) < 13) {
  alert('Спасибо, все верно!');
} else {
  alert('Неверный ввод!');
}

//Task #7

var str = 'cow milk cowboy. cow milkshake,milk-farm+cowboy=night',
regStr = /\b.+?\b/g,
words = str.match(regStr)
;

function deleteReapetingWords(arr) {
  var newStr = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 2) {
      continue;
    }

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i];
  }

  return newStr;
}

deleteReapetingWords(words); //"cow milk cowboy.  milkshake,-farm+=night"
// так а пробелы?


//bottom
