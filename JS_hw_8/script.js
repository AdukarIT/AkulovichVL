'use strict';

//Task #1 and #2 создан произвольный элемент (div) для того, чтобы было можно
//проверить решение в браузере

let newDiv = document.createElement('div');
document.body.insertBefore(newDiv, document.body.children[0]);

//newDiv.classList.add('www'); // Task #1

newDiv.classList.toggle('www'); // Task #2

// Task #3

function recursiveSearchTags(doc, tag) {
  let allElementsWithTag = doc.getElementsByTagName(tag);
  return [].slice.call(allElementsWithTag);
}

//console.log(recursiveSearchTags(document.body, 'div'));

//Task #4

var arrWords = ['Почему', 'здесь', 'есть', 'события', '?'];

let unorderedList = document.createElement('ul');
document.body.insertBefore(unorderedList, document.body.children[0]);

for (var i = 0; i < arrWords.length; i++) {
  let item = document.createElement('li');

  if (!((i + 1) % 2)) {
    item.setAttribute('style', 'background-color: red;')
  }

  item.appendChild(document.createTextNode(arrWords[i]));
  unorderedList.appendChild(item);
}

// Task #5 Здесь как и в первой задаче для наглядности создан произвольный элемент

let newDiv = document.createElement('div');
document.body.insertBefore(newDiv, document.body.children[1]);

newDiv.classList.add('www');

let elemBefore = newDiv.previousElementSibling;
elemBefore.appendChild(document.createTextNode('!'));

// Task #6

function wrapInParagraph() {
  let arrDiv = document.querySelectorAll('div');

  for (var i = 0; i < arrDiv.length; i++) {
    let tempDiv = arrDiv[i];


    for (var j = 0; j < tempDiv.childNodes.length; j++) {
      if (tempDiv.childNodes[j].nodeType === 3) {

        let tempText = tempDiv.replaceChild(document.createElement('p'), tempDiv.childNodes[j]);
        tempDiv.childNodes[j].appendChild(tempText);
      }
    }
  }
}

wrapInParagraph();

// Task #7

function normalizeClassNames() {
  let allElements = document.body.querySelectorAll('*');

  for (let i = 0; i < allElements.length; i++) {
    let elem = allElements[i];

    if (elem.classList.length > 0) {
      for (let j = 0; j < elem.classList.length; j++) {
        let tempclass = elem.classList[j];

        if (tempclass.indexOf('-') > -1) {
          elem.classList.remove(tempclass);

          tempclass = tempclass.slice(0, tempclass.indexOf('-')) + tempclass[tempclass.indexOf('-') + 1].toUpperCase() +
          tempclass.slice(tempclass.indexOf('-') + 2, tempclass.length);

          elem.classList.add(tempclass);

          j--;
        }
      }
    }
  }
}

normalizeClassNames();


// P.S. Решение задачи про кнопку без использования событий

let button = document.createElement('button'),
textButton = document.createTextNode('Create New Red Div'),
checkbox = document.createElement('input'),
label = document.createElement('label')
;

label.appendChild(textButton);
button.appendChild(label);

checkbox.setAttribute('id', 'input');
checkbox.setAttribute('type', 'checkbox');
label.setAttribute('for', 'input');

document.body.insertBefore(checkbox, document.body.children[0]);
document.body.insertBefore(button, document.body.children[0]);

let firstCondition = checkbox.checked,
secondCondition = checkbox.checked
;

function createNewDiv() {
  firstCondition = checkbox.checked;

  if (firstCondition !== secondCondition) {
    let redDiv = document.createElement('div');
    redDiv.setAttribute('style', 'width: 50px; height: 50px; background-color: red; border: 2px solid black;');
    document.body.insertBefore(redDiv, document.body.lastElementChild);
  }

  secondCondition = checkbox.checked;
}

//setInterval(createNewDiv, 100); // Для работы нужно разкомментить эту функцию.

//bottom
