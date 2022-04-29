//! ПЕРЕМЕННЫЕ
const profile = document.querySelector('.profile');
const profileBtEdit = profile.querySelector('.profile__button-edit');
const cardBtAdd = profile.querySelector('.profile__button-add');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');

const popupUser = document.querySelector('#user');
const formUser = popupUser.querySelector('#popup__form');
let popupNameUser = popupUser.querySelector('.popup__input_type_name');
let popupAboutUser = popupUser.querySelector('.popup__input_type_about');

const popupCard = document.querySelector('#card');
const formCard = popupCard.querySelector('#popup__form');
let popupNameCard = popupCard.querySelector('.popup__input_type_name');
let popupLinkCard = popupCard.querySelector('.popup__input_type_about');

const popupImage = document.querySelector('#image');
const buttonsClose = document.querySelectorAll('.popup__button-close');
const galeryContainer = document.querySelector('.galery__grid-container');

//! ИМПОРТ МАСИВА С КАРТАМИ
import { initialCards } from "./container-for-card.js";

//! ВЫЗОВ ФУНКЦИ
setOpenListenersToPopup(popupCard, cardBtAdd);
setOpenListenersToPopup(popupUser, profileBtEdit);

//! ДОБАВЛЯЕТ НОВЫЕ 6 КАРТ ИЗ МАСИВА "initialCards"
galeryContainer.innerHTML = "";
for (let i = 0; i < initialCards.length; ++i) {
  addCard(createCard(initialCards[i].name, initialCards[i].link), galeryContainer);
}

//! ЗАКРЫВВАЕТ POPUP ОКНА ПРИ НАЖАТИ НА КРЕСТИК
for (let i = 0; i < buttonsClose.length; i++) {
  buttonsClose[i].addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.remove('popup_active');
  });
}

//! РЕДАКТИРУЕТ ДАННЕ "О СЕБЕ" В ПРОФИЛЕ
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

//! ОТКРЫВАЕТ POPUP ОКНО ПРИ НАЖАТИИ НА КНОПКУ
function setOpenListenersToPopup(popup, openBt) {
  openBt.addEventListener('click', function () {
    popup.classList.add('popup_active');
    popupNameUser.value = profileName.textContent;
    popupAboutUser.value = profileAbout.textContent;
  });
}

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
  const galeryCard = document.querySelector('#galery-card').content;
  const cardElement = galeryCard.querySelector('.galery__card').cloneNode(true);

  cardElement.querySelector('.galery__delet').addEventListener('click', function (e) {
    e.target.parentElement.classList.add('galery__card_active');
  });
  cardElement.querySelector('.galery__image').src = link;
  cardElement.querySelector('.galery__image').addEventListener('click', function (e) {
    let popupImg = document.querySelector('.popup__image');
    let popupText = document.querySelector('.popup__text');
    popupImg.src = e.target.src;
    popupImg.alt = name;
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


