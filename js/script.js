//! ИМПОРТ МАСИВА С КАРТАМИ
import { initialCards } from "./container-for-card.js";
//import { formUser, formCard, allError } from "./lets.js";
import { createCard, addCard } from "./card.js";
import { openPopup, closePopup, formUser, formCard } from "./utils.js";

//! ПЕРЕМЕННЫЕ
const profile = document.querySelector('.profile');
const profileBtEdit = profile.querySelector('.profile__button-edit');
const cardBtAdd = profile.querySelector('.profile__button-add');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const popupUser = document.querySelector('#user');
const popupCard = document.querySelector('#card');
const galeryContainer = document.querySelector('.galery__grid-container');
const popupAll = document.querySelectorAll('.popup');






//! ДОБАВЛЯЕТ НОВЫЕ 6 КАРТ ИЗ МАСИВА "initialCards"
galeryContainer.innerHTML = "";
for (let i = 0; i < initialCards.length; ++i) {
  addCard(createCard(initialCards[i].name, initialCards[i].link), galeryContainer);
}

//! ЗАКРЫВВАЕТ POPUP ОКНА ПРИ НАЖАТИ НА КРЕСТИК ИЛИ НА ПРОСТРАНСТВО ВОКРУГ или на кнопку ESC\
window.addEventListener('click', function (e) {
  if (e.target.classList.contains('popup__button-close') || e.target.classList.contains('popup')) {
    closePopup(e.target.closest('.popup'));
  }
});
window.addEventListener('keydown', function (e) {
  popupAll.forEach(function (item) {
    if (e.key === 'Escape') {
      closePopup(item);
    }
  });
});



//! ОТКРЫТИЕ POPUP ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
cardBtAdd.addEventListener('click', function () {
  openPopup(popupCard);
});

//! ОТКРЫТИЕ POPUP ДЛЯ РЕДОКТИРОВАНИЯ ПРОФИЛЯ
profileBtEdit.addEventListener('click', function () {
  openPopup(popupUser);
  formUser.inputOne.value = profileName.textContent;
  formUser.inputTwo.value = profileAbout.textContent;
});

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

