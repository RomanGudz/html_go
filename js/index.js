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

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
