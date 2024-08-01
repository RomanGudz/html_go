const btnHeader = $('.header__button-menu');

btnHeader.on('click', function () {
  $('.navigation__list').toggleClass('visually-hidden-768px');
  $('.header__button-menu-svg').toggle();
});

const openModal = $('.navigation__button-call');
const modalClose = $('.modal__btn-close');
const modal = $('.modal-overlay');



openModal.on('click', function () {
  modal.show(200);
});

modalClose.on('click', function () {
  modal.hide(200);
})

modal.on('click', function (e) {
  if ($(e.target).is(modal)) {
    modal.hide(200);
  }

})