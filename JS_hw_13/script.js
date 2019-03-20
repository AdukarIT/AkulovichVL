'use strict'

$(function() {
  $.ajax('https://jsonplaceholder.typicode.com/albums', {
    method: 'GET',
    dataType: 'json',
    error: function () {
      alert('Ошибка. Попробуйте зайти позже.');
    },
    success: function (dataAlbums) {
      $.ajax('https://jsonplaceholder.typicode.com/photos', {
        method: 'GET',
        dataType: 'json',
        error: function () {
          alert('Ошибка. Попробуйте зайти позже.');
        },
        success: function (dataPhotos) {
          let data = ModelAlbums(dataAlbums, dataPhotos);
          displayAlbums(data);
          $('#container').click(handlerShowPhoto(data));
        }
      });
    }
  });
});

function ModelAlbums(dataMain, dataSecondary) {
  return dataMain.map(function(album) {
    let arrPhotos = dataSecondary.filter(function(photo) {
      return photo.albumId === album.id;
    });

    return {
      id: album.id,
      title: album.title,
      photos: arrPhotos.map(function(photo) {
        return photo.url;
      })
    };
  });
}

function displayAlbums(dataArr) {
  dataArr.forEach(function(item) {
    $('<li>', { class: 'list-group-item', id: 'li-' + item.id, text: 'Альбом: ' + item.title}).appendTo('#container');
    $('<button>', { class: 'btn btn-primary', id: 'b-' + item.id, text: 'Смотреть фото'}).appendTo('#li-' + item.id);
  });
}

function handlerShowPhoto(data) {
  return function() {
    if (event.target.nodeName !== 'BUTTON') {
      return ;
    }
    let id = +event.target.id.slice(2),
    arrAlbum = data.filter(function(item) {
      return item.id === id;
    }),
    arrPhoto = arrAlbum[0].photos,
    index = 0
    ;

    $('<div>', { id: 'overlay'}).appendTo('body');
    $('<i>', {class: 'fas fa-times', id: 'close_modal'}).appendTo('#overlay');
    $('<div>', { id: 'modal'}).appendTo('#overlay');
    $('<i>', {class: 'fas fa-angle-right', id: 'next'}).appendTo('#overlay');
    $('<i>', {class: 'fas fa-angle-left', id: 'previous'}).appendTo('#overlay');
    $('<img>', {id: 'visible_photo', src: '' + arrPhoto[index]}).appendTo('#modal');

    addHoverForButtons('close_modal', 'next', 'previous');

    $('#overlay').click(function() {
      switch (event.target.id) {
        case 'next':
          index++;
          addAnimationToPhoto();
        break;
        case 'previous':
          index--;
          addAnimationToPhoto();
        break;
        case 'close_modal':
          $('#overlay').remove();
        break;
      }

      if (index === 0) {
        $('#previous').css('display', 'none');
      } else if (index > 0 && index < 49) {
        $('#previous').css('display', 'inline');
        $('#next').css('display', 'inline');
      } else if (index === 49) {
        $('#next').css('display', 'none');
      }
    });

    function addHoverForButtons(...args) {
      args.forEach(function(id) {
        $('#' + id).hover(function() {
          $('#' + id).css('color', '#5cc');
        }, function() {
          $('#' + id).css('color', '#ccc');
        });
      });
    }
    function addAnimationToPhoto() {
      $('#visible_photo').animate({
        height: 0
      }, 1000, 'linear', function() {
        $('#visible_photo').attr('src', '' + arrPhoto[index]);
        $('#visible_photo').animate({
          height: 400
        }, 1000, 'linear');
      });
    }
  };
}
