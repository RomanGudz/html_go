export const phoneInput = $('input[name="phone"]');
export const nameInput = $('input[name="name"]');

const maskPhone = new Inputmask('+7(999)-999-99-99');
const maskName = new Inputmask({
  mask: '*{1,15}',
  definitions: {
    '*': {
      validator: "[А-Яа-яЁё]",
    }
  }
});



maskName.mask($('#lastName'))
nameInput.each(function (index, element) {
  maskName.mask(element);
});

phoneInput.each(function (index, element) {
  maskPhone.mask(element);
});
