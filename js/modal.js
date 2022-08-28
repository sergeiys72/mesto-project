import {
  formUser, openPopup, closePopup, popupUser, popupCard, profileName, profileAbout
} from "./utils.js";
const profileBtEdit = document.querySelector('.profile__button-edit');
const cardBtAdd = document.querySelector('.profile__button-add');
const popupAll = document.querySelectorAll('.popup');

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
