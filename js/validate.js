//import { submit } from "./utils.js";

function hasInvalidInput(inputList) {
  return inputList.some((formINput) => {
    return !formINput.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('form__submit_disabled');
    buttonElement.removeAttribute('disabled', 'disabled');
  }
}


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
  if (formInput.validity.patternMismatch) {
    formInput.setCustomValidity(formInput.dataset.errorMessage);
  } else {
    formInput.setCustomValidity('');
  }
  if (!formInput.validity.valid) {
    showError(form, formInput, formInput.validationMessage);
  } else {
    hindError(form, formInput);
  }
};

//! применить валидацию ко всем инпутам в форме
function validInput(form) {
  const allInput = Array.from(form.querySelectorAll('.form__input'));
  const submit = form.querySelector('.form__submit');
  toggleButtonState(allInput, submit);
  allInput.forEach(function (input) {
    input.addEventListener('input', function () {
      checkInputValidate(form, input);
      toggleButtonState(allInput, submit);
    });
  });
}

//! применить валидация ко всем формам
export function enableValidation(allForms) {
  const formArray = Array.from(allForms);
  formArray.forEach(function (form) {
    validInput(form);
  });
}

