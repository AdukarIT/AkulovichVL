'use strict'

$(function() {
  let inputName = $("#name"),
  inputEmail = $("#email"),
  inputPhone = $("#phone"),
  message = $("#message"),
  form = $("#form"),
  allElements = [inputName, inputEmail, inputPhone, message]
  ;

  form.keyup(function(e) {
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].removeClass('error');

      if (!checkInput(allElements[i])) {
        $('.far:eq(' + i + ')').addClass('success');
      } else {
        $('.far:eq(' + i + ')').removeClass('success');
      }
    }
  });

  form.submit(function(e) {
    for (let i = 0; i < allElements.length; i++) {
      if ($('.far:eq(' + i + ')').css('display') === 'none') {
        e.preventDefault();
        allElements[i].addClass('error');
        $("#myModal2").modal('show');
      }
    }
  });

  function checkInput(element) {
    switch (element) {
      case inputName:
        let regName = /[^a-z\-]/i;
        return isRightInput(regName, true);
      break;
      case inputEmail:
        let regEmail = /^[\w-]+?\@[\w-]+?\.[a-z]{1,3}$/;
        return isRightInput(regEmail);
      break;
      case inputPhone:
        let regPhone = /^\+375-[2,3,4][3,4,5,9]-?\d{3}-?\d{2}-?\d{2}$/;
        return isRightInput(regPhone);
      break;
      case message:
        return !(message.val().length >= 10 && message.val().length <= 1000);
      break;
    }

    function isRightInput(reg, isInputName) {
      if (isInputName) {
        return reg.test(element.val()) || element.val() === '';
      }
      return !reg.test(element.val()) || element.val() === '';
    }
  }
})
