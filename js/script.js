//! ИМПОРТ МАСИВА С КАРТАМИ
import { initialCards } from "./container-for-card.js";

//! ПЕРЕМЕННЫЕ
const profile = document.querySelector('.profile');
const profileBtEdit = profile.querySelector('.profile__button-edit');
const cardBtAdd = profile.querySelector('.profile__button-add');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const popupUser = document.querySelector('#user');
const formUser = popupUser.querySelector('#popup__form');
const popupNameUser = popupUser.querySelector('.popup__input_type_name');
const popupAboutUser = popupUser.querySelector('.popup__input_type_about');

const popupCard = document.querySelector('#card');
const formCard = popupCard.querySelector('#popup__form');
const popupNameCard = popupCard.querySelector('.popup__input_type_name');
const popupLinkCard = popupCard.querySelector('.popup__input_type_about');

const popupImage = document.querySelector('#image');
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const buttonsClose = document.querySelectorAll('.popup__button-close');
const galeryContainer = document.querySelector('.galery__grid-container');
const galeryCard = document.querySelector('#galery-card').content;

//! ДОБАВЛЯЕТ НОВЫЕ 6 КАРТ ИЗ МАСИВА "initialCards"
galeryContainer.innerHTML = "";
for (let i = 0; i < initialCards.length; ++i) {
  addCard(createCard(initialCards[i].name, initialCards[i].link), galeryContainer);
}

//! ЗАКРЫВВАЕТ POPUP ОКНА ПРИ НАЖАТИ НА КРЕСТИК\
for (let i = 0; i < buttonsClose.length; i++) {
  buttonsClose[i].addEventListener('click', function (e) {
    closePopup(e.target.closest('.popup'));
  });
}

//! ОТКРЫТИЕ POPUP ДЛЯ ДОБАВЛЕНИЯ КАРТОЧЕК
cardBtAdd.addEventListener('click', function () {
  openPopup(popupCard);
});

//! ОТКРЫТИЕ POPUP ДЛЯ РЕДОКТИРОВАНИЯ ПРОФИЛЯ
profileBtEdit.addEventListener('click', function () {
  openPopup(popupUser);
  popupNameUser.value = profileName.textContent;
  popupAboutUser.value = profileAbout.textContent;
});

//! РЕДАКТИРУЕТ ДАННЫЕ "О СЕБЕ" В ПРОФИЛЕ
formUser.addEventListener('submit', function (event) {
  event.preventDefault();

  if (popupNameUser.value !== '' && popupAboutUser.value !== '') {
    profileName.textContent = popupNameUser.value;
    profileAbout.textContent = popupAboutUser.value;
  }
  closePopup(popupUser);
});

//! ДОБАВЛЯЕТ НОВЫЕ КАРТЫ В ГАЛЕРЕЮ
formCard.addEventListener('submit', function (event) {
  event.preventDefault();
  if (popupNameCard.value !== '' && popupLinkCard.value !== '') {
    addCard(createCard(popupNameCard.value, popupLinkCard.value), galeryContainer);
  }
  popupNameCard.value = "";
  popupLinkCard.value = "";

  closePopup(popupCard);
});

//! ОТКРЫВАЕТ POPUP
function openPopup(popup) {
  popup.classList.add('popup_active');
}

//! ЗАКРЫВАЕТ POPUP
function closePopup(popup) {
  popup.classList.remove('popup_active');
}

//! СОЗДАЕТ ЗАГОТОВКУ КАРТЫ
function createCard(name, link) {
  const cardElement = galeryCard.querySelector('.galery__card').cloneNode(true);

  cardElement.querySelector('.galery__delet').addEventListener('click', function (e) {
    e.target.closest('.galery__card').remove();
  });
  cardElement.querySelector('.galery__image').src = link;
  cardElement.querySelector('.galery__image').alt = name;
  cardElement.querySelector('.galery__image').addEventListener('click', function (e) {

    popupImg.src = e.target.src;
    popupText.textContent = name;
    openPopup(popupImage);
  });
  cardElement.querySelector('.galery__title').textContent = name;
  cardElement.querySelector('.galery__button-heart').addEventListener('click', function (e) {
    e.target.classList.toggle('galery__button-heart_active');
  });
  return cardElement;
}

//! ДОБАВЛЯЕТ КАРТУ В ГАЛЕРЕЮ
function addCard(card, container) {
  container.prepend(card);
}


