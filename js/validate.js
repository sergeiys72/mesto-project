import { formUser, formCard } from "./lets.js";
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

const showError = () => {

}
