export const openModal = $('.navigation__button-call');
export const modalClose = $('.modal__btn-close');
export const modal = $('.modal-overlay');
export const modalForm = $('.modal__form');

openModal.on('click', function () {
  modal.show(200);
});

modalClose.on('click', function () {
  modal.hide(200);
});

modal.on('click', function (e) {
  if ($(e.target).is(modal)) {
    modal.hide(200);
  }
});



modalForm.on('submit', (e) => {
  e.preventDefault();
  const value = e.target;
  const data = {
    name: value[0].value,
    phone: value[1].value
  };
  $.ajax({
    "url": 'https://postman-echo.com/post',
    "method": 'post',
    "dataType": 'json',
    "data": JSON.stringify(data),
    success: function (data) {
      console.log(data);
    },
    error: function (exception) {
      console.log('exception: ', exception);

    }
  });
});