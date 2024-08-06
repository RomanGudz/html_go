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



const accordion = $('.accordoin');

accordion.accordion({
  active: true,
  collapsible: true,
  icons: {
    // header: 'acc__icon-white',
    // activeHeader: 'acc__icon-white acc__icon-white-active',
  }
});


const h3 = document.querySelectorAll('.faq__item-h3-btn');
h3.forEach(elem => {
  const colorIcon = elem.dataset.iconColor;
  const span = elem.querySelector('.ui-icon');
  const li = elem.closest('li');
  span.classList.add('acc__icon-white')
  if (!colorIcon) {
    span.classList.toggle('acc__icon-white');
    span.classList.toggle('acc__icon');
  }

  li.addEventListener('click', (e) => {
    const target = e.target;
    const span = target.querySelector('.acc__icon');
    const spanWhite = target.querySelector('.acc__icon-white');
    if (span) {
      span.classList.toggle('acc__icon-active');
    }
    if (spanWhite) {
      spanWhite.classList.toggle('acc__icon-white-active');
    }
  });

  span.addEventListener('click', (e) => {
    e.target.classList.toggle('acc__icon-white-active');
    if (!colorIcon) {
      e.target.classList.toggle('acc__icon-active');
      e.target.classList.toggle('acc__icon-white-active');
    }
  })
});

ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.723661504206355, 37.56504308465882],
    zoom: 17
  });

  const mark = new ymaps.Placemark([55.723661504206355, 37.56504308465882]);

  myMap.geoObjects.add(mark);
}