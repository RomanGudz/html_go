export const accordion = $('.accordoin');

accordion.accordion({
  active: true,
  collapsible: true,
});


export const h3 = document.querySelectorAll('.faq__item-h3-btn');
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

  elem.addEventListener('mouseover', () => {
    if (window.matchMedia('(hover: hover)').matches) {
      span.classList.toggle('acc__icon-hover')
      if (colorIcon) {
        span.classList.toggle('acc__icon-hover');
        span.classList.toggle('acc__icon-white-hover')
      }
    }
  });

  elem.addEventListener('mouseout', () => {
    if (window.matchMedia('(hover: hover)').matches) {
      span.classList.toggle('acc__icon-hover')
      if (colorIcon) {
        span.classList.toggle('acc__icon-hover');
        span.classList.toggle('acc__icon-white-hover')
      }
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

