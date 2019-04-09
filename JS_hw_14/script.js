'use strict'

$(function() {
	createNewValidateMethod();
	
	const optionsTypes = { 'radio_question': 'Вопрос', 'radio_complain': 'Жалоба', 'radio_gratitude': 'Благодарность' },
	$createButton = $('#button_create'),
	$closeButton = $('#button_close'),
	$form = $('#request_form'),
	$submitButton = $('#button_submit'),
	$tableBody = $('#table_body'),
	$removeButton = $('#button_remove')
	;
	let counter = 0;

	$( "#table_body" ).selectable({
		selected: function (event, ui) {
			ui.selected.classList.toggle('row-selected');
		}
	});

	$removeButton.click(function() {
		$( "#modal_remove" ).css('display', 'flex');

		$('#remove_cancel').click(function() {
			closeRemovingModalWindow();
		});

		$('#remove_confirm').click(function() {
			$( "#table_body .row-selected" ).remove();
			closeRemovingModalWindow();
		});
	});

	$createButton.click(createModalForRequest);

	$closeButton.click(closeCreatingModalWindow);

	$submitButton.click(function(e) {
		let obj = {},
		typeId = $('input:checked').attr('id')
		;
		$form.validate({
			rules: {
				name: "required",
				phone: {
					phoneBY: true
				}
			},
			messages: {
				name: "Заполните поле Имя!"
			}
		})
		if (!$form.valid()) { return }

		obj.id = ++counter;
		obj.name = $('#name').val();
		obj.phone = $('#phone').val();
		obj.date = $('#date').val();
		obj.type = optionsTypes[typeId];

		let row = $('<tr>', { class: 'request-row' }).appendTo('#table_body');
		$('<th>', {scope: 'row', text: obj.id}).appendTo(row);
		$('<td>', {text: obj.name}).appendTo(row);
		$('<td>', {text: obj.phone}).appendTo(row);
		$('<td>', {text: obj.date}).appendTo(row);
		$('<td>', {text: obj.type}).appendTo(row);

		closeCreatingModalWindow();
	})
});

function createNewValidateMethod() {
	jQuery.validator.addMethod("phoneBY", function(value, element) {
  return this.optional(element) || /^\+375\-[0-9]{2}\-?[0-9]{3}\-?[0-9]{2}\-?[0-9]{2}$/.test(value);
}, "Введите номер вашего телефона в указанном формате");
}

function closeCreatingModalWindow() {
	$('#name').val('');
	$('#phone').val('');
	$('#radio_gratitude').prop('checked', 'true');
	$('#date').removeAttr('readonly');
	$('#modal_add').css('display', 'none');
	$('#phone-error').remove();
	$('#name-error').remove();
}

function closeRemovingModalWindow() {
	$( "#modal_remove" ).css('display', 'none');
}

function createModalForRequest() {
	let now = new Date(),
	formatedDate = $.format.date(now, 'dd.MM.yyyy')
	;
	$('#date').val(formatedDate);
	$('#date').attr('readonly', 'true');
	$('#modal_add').css('display', 'block');
}
