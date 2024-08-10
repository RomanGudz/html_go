export const header = document.querySelector('.header');
export const btnHeader = document.querySelector('.header__button-menu');
export const navigationMenu = document.querySelectorAll('.navigation__link');

btnHeader.addEventListener('click', () => {
  header.classList.toggle('header-overlay');
  $('.navigation__list').toggleClass('visually-hidden-768px');
});

header.addEventListener('click', (e) => {
  if (e.target === header) {
    header.classList.toggle('header-overlay');
    $('.navigation__list').toggleClass('visually-hidden-768px');
  }
});


navigationMenu.forEach(elem => {
  elem.addEventListener('click', () => {
    header.classList.toggle('header-overlay');
    $('.navigation__list').toggleClass('visually-hidden-768px');
  })
});