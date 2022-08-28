//! ИМПОРТ МАСИВА С КАРТАМИ
import { initialCards } from "./container-for-card.js";
import { createCard, addCard } from "./card.js";
import { closePopup, formUser, formCard, popupUser, popupCard, profileName, profileAbout } from "./utils.js";
import { enableValidation } from "./validate.js";



const allForms = document.forms;
const galeryContainer = document.querySelector('.galery__grid-container');

enableValidation(allForms);

//! ДОБАВЛЯЕТ НОВЫЕ 6 КАРТ ИЗ МАСИВА "initialCards"
galeryContainer.innerHTML = "";
for (let i = 0; i < initialCards.length; ++i) {
  addCard(createCard(initialCards[i].name, initialCards[i].link), galeryContainer);
}



//! РЕДАКТИРУЕТ ДАННЫЕ "О СЕБЕ" В ПРОФИЛЕ
formUser.addEventListener('submit', function (event) {
  event.preventDefault();
  if (formUser.inputOne.value !== '' && formUser.inputTwo.value !== '') {
    profileName.textContent = formUser.inputOne.value;
    profileAbout.textContent = formUser.inputTwo.value;
  }
  closePopup(popupUser);
});

//! ДОБАВЛЯЕТ НОВЫЕ КАРТЫ В ГАЛЕРЕЮ
formCard.addEventListener('submit', function (event) {
  event.preventDefault();
  if (formCard.inputOne.value !== '' && formCard.inputTwo.value !== '') {
    addCard(createCard(formCard.inputOne.value, formCard.inputTwo.value), galeryContainer);
  }
  formCard.inputOne.value = "";
  formCard.inputTwo.value = "";

  closePopup(popupCard);
});

