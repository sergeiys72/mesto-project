import { formUser, formCard, errorElementName } from "./lets.js";
const allForms = Array.from(document.forms);


allForms.forEach(function (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  form.addEventListener('input', (e) => {
    console.log(e.target.validity.valid);
    //e.target.validity.valid;
  });
});

const showError = (errorElement, errorMessage) => {
  errorElement.classList.add('form__input-error_active');
  errorElement.textContent = errorMessage;
}

const hindError = (errorElement) => {
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}

const checkInputValidate = () => {
  if (!formUser.name.validity.valid) {
    showError(errorElementName, formUser.name.validationMessage);
  } else {
    hindError(errorElementName);
  }
}

formUser.name.addEventListener('input', function (e) {
  checkInputValidate();
});
