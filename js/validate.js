const allForms = document.forms;

setEventListeners(allForms);

//!выводит ошибку при проверке валидации
const showError = (form, formInput, errorMessage) => {
  const spanError = form.querySelector(`.${formInput.id}-error`);
  spanError.classList.add('form__input-error_active');
  spanError.textContent = errorMessage;
};

//! скрыть ошибку при проверке валидации
const hindError = (form, formInput) => {
  const spanError = form.querySelector(`.${formInput.id}-error`);
  spanError.classList.remove('form__input-error_active');
  spanError.textContent = '';
};

//! проверка инпута на валидацию
const checkInputValidate = (form, formInput) => {
  const submit = form.querySelector('.form__submit');
  if (formInput.validity.patternMismatch) {
    formInput.setCustomValidity(formInput.dataset.errorMessage);
    submit.setAttribute('disabled', 'disabled');
  } else {
    formInput.setCustomValidity('');
    submit.removeAttribute('disabled', 'disabled');
  }
  if (!formInput.validity.valid) {
    showError(form, formInput, formInput.validationMessage);
    submit.classList.add('form__submit_disabled');
    submit.setAttribute('disabled', 'disabled');
  } else {
    hindError(form, formInput);
    submit.classList.remove('form__submit_disabled');
    submit.removeAttribute('disabled', 'disabled');
  }
};

//! применить валидацию ко всем инпутам в форме
function validInput(form) {
  const allInput = Array.from(form.querySelectorAll('.form__input'));
  allInput.forEach(function (input) {
    input.addEventListener('input', function () {
      checkInputValidate(form, input);
    });
  });
}

//! применить валидация ко всем формам
function setEventListeners(allForms) {
  const formArray = Array.from(allForms);
  formArray.forEach(function (form) {
    validInput(form);
  });
}
