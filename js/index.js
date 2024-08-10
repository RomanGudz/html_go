import { validateFormBooking } from './booking.js';
import { init } from './ymap.js';
import * as accordion from './accordion.js';
import * as modal from './modal.js';
import * as mask from './maskInput.js';
import * as navigation from './navigation.js'

ymaps.ready(init);




new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },
  containerModifierClass: 'swiper-wrapper',
  on: {
    init: function () {
      this.slides.forEach(slide => {
        slide.style.display = "flex"
      });
      this.wrapperEl.className = 'reviews__list';
    },
  }
});