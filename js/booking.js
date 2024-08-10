export const validateFormBooking = new JustValidate('.booking__form', {
  errorLabelStyle: {
    color: '#cd113b',
  },
  focusInvalidField: true,
});

const selectedValues = (arr) => {
  return Array.from(arr).map(checkbox => checkbox.value);
}

validateFormBooking.addRequiredGroup('#booking-halls',
  'Выберите зал',
  {
    errorsContainer: document.querySelector('.errors-container')
  })
  .addRequiredGroup('#booking-station',
    'Выбери приставку'
  )
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'выберите дату',
    },
    {
      validator(value) {
        const date = new Date();
        return new Date(value) > date;
      },
      errorMessage: 'выберите другую дату',
    }
  ])
  .addField('#time', [
    {
      rule: 'required',
      errorMessage: 'выберите время',
    }
  ])
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Как ваше Имя?',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Не короче 3 символов',
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Слишком длинное Имя',
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона',
    },
  ])
  .addField('#people', [
    {
      rule: 'required',
      errorMessage: 'Сколько вас будет?',
    },
  ])
  .addField('#lastName', [
    {
      rule: 'required',
      errorMessage: 'Ваша фамилия',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Не короче 3 символов',
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Слишком длинное Фамилия',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Ваша email',
    },
    {
      rule: 'email',
      errorMessage: 'неправильный формат email',
    },
  ])
  .onSuccess(event => {
    const target = event.target;
    const selectedHall = target.querySelector('input[name="halls"]:checked').value;
    const selectedStation = target.querySelector('input[name="console"]:checked').value;
    const selectedBoardgames = selectedValues(target.querySelectorAll('input[name="boardGame"]:checked'));
    const selectedAdditionally = selectedValues(target.querySelectorAll('input[name="additionally"]:checked'));
    const data = {
      hall: selectedHall,
      station: selectedStation,
      boardGames: selectedBoardgames,
      bookingAdditionally: selectedAdditionally,
      date: target.date.value,
      time: target.time.value,
      name: target.name.value,
      phone: target.phone.value,
      people: target.people.value,
      lastName: target.lastName.value,
      email: target.email.value,
    };
    // $.ajax({
    //   "url": 'https://postman-echo.com/post',
    //   "method": 'post',
    //   "dataType": 'json',
    //   "data": JSON.stringify(data),
    //   success: function (data) {
    //     console.log(data);
    //   },
    //   error: function (exception) {
    //     console.log('exception: ', exception);

    //   }
    // });
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
