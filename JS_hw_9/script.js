'use strict';

// Task #1

var input = document.createElement('input'),
button = document.createElement('button'),
textButton = document.createTextNode('Copy Input')
;

button.appendChild(textButton);
document.body.insertBefore(button, document.body.lastElementChild);
document.body.insertBefore(input, document.body.lastElementChild);

button.addEventListener('click', function(e) {
  document.body.insertBefore(input.cloneNode(false), document.body.lastElementChild);
});

//Task #2

var table = document.getElementById('task_2');

table.addEventListener('click', function(e) {
  if (!table.className) {
    table.classList.add('bordered');
    return ;
  }
  if (table.classList.contains('bordered')) {
    table.classList.remove('bordered');
    table.classList.add('striped');
    return ;
  }
  if (table.classList.contains('striped')) {
    table.classList.remove('striped');
    table.classList.add('highlight');
    return ;
  }
});

//Task #3

var radioButtonBordered = document.querySelector('#bordered'),
radioButtonStriped = document.querySelector('#striped'),
radioButtonHighlight = document.querySelector('#highlight'),
form = document.querySelector('form'),
table = document.getElementById('task_2')
;

form.addEventListener('click', function(e) {
  if (radioButtonBordered.checked) {
    table.classList = '';
    table.classList.add('bordered');
  } else if (radioButtonStriped.checked) {
    table.classList = '';
    table.classList.add('striped');
  } else {
    table.classList = '';
    table.classList.add('highlight');
  }
});

//Task #4

var buttonAlert = document.createElement('button'),
textButtonAlert = document.createTextNode('THFC 1882'),
buttonDisable = document.createElement('button'),
textButtonDisable = document.createTextNode('Remove Event')
;

buttonAlert.appendChild(textButtonAlert);
buttonDisable.appendChild(textButtonDisable);
document.body.insertBefore(buttonAlert, document.body.lastElementChild);
document.body.insertBefore(buttonDisable, document.body.lastElementChild);

function showInnerText() {
  alert(this.innerHTML);
}

buttonAlert.addEventListener('click', showInnerText);

buttonDisable.addEventListener('click', function() {
  buttonAlert.removeEventListener('click', showInnerText);
});

//Task #5

var commonDiv = document.createElement('div'),
div = document.createElement('div'),
p = document.createElement('p'),
a = document.createElement('a'),
button = document.createElement('button'),
divText = document.createTextNode('tag DIV'),
pText = document.createTextNode('tag P'),
aText = document.createTextNode('tag A'),
buttonText = document.createTextNode('tag BUTTON'),
arr = [div, p, a, button]
;

div.appendChild(divText);
p.appendChild(pText);
a.appendChild(aText);
button.appendChild(buttonText);
document.body.insertBefore(commonDiv, document.body.lastElementChild);

for (var i = 0; i < arr.length; i++) {
  arr[i].setAttribute('style', 'border: 2px solid black; display: inline-block; width: 20%; text-align: center; cursor: pointer;')
  commonDiv.appendChild(arr[i]);
}

commonDiv.addEventListener('click', function(e) {
  alert(e.target.nodeName);
});

//Task #6

var border = document.createElement('div'),
imageDefault = document.createElement('img'),
imageNew = document.createElement('img')
;

border.setAttribute('style', 'height: 200px; width: 200px; display: inline-block; border: 1px solid black;');
imageDefault.setAttribute('style', 'height: 100%; width: 100%;');
imageNew.setAttribute('style', 'height: 100%; width: 100%;');

imageDefault.src = 'https://img1.liveinternet.ru/images/attach/c/11/116/480/116480393_large_12ee.png';
imageNew.src = 'http://www.playcast.ru/uploads/2017/09/06/23375158.png';
border.appendChild(imageDefault);
document.body.appendChild(border);

border.addEventListener('mouseover', function() {
  border.replaceChild(imageNew, imageDefault);
});

border.addEventListener('mouseout', function() {
  border.replaceChild(imageDefault, imageNew);
});

//Task #7

var imageDefault = document.createElement('img'),
blackout = document.createElement('div'),
buttonClose = document.createElement('button'),
textButtonClose = document.createTextNode('Close')
;

imageDefault.src = 'https://st.weblancer.net/download/3030355_935xp.png';
imageDefault.setAttribute('style', 'width: 150px; height: 150px; border-radius: 15px; border: 5px solid red; cursor: pointer;')
blackout.setAttribute('style', 'position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, .7); z-index: 10;');
buttonClose.setAttribute('style', 'position: absolute; top: 2%; right: 2%; cursor: pointer;')

document.body.insertBefore(imageDefault, document.body.lastElementChild);
buttonClose.appendChild(textButtonClose);

imageDefault.addEventListener('click', function() {
  var imageLarge = imageDefault.cloneNode(false);
  imageLarge.setAttribute('style', 'position: absolute; top: 5%; left: 25%; right: 25%; width: 50%;');
  blackout.appendChild(buttonClose);
  blackout.appendChild(imageLarge);
  document.body.insertBefore(blackout, document.body.lastElementChild);
});

buttonClose.addEventListener('click', function() {
  document.body.removeChild(blackout);
});


//bottom
