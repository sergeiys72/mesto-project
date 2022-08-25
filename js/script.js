//! ИМПОРТ МАСИВА С КАРТАМИ
import { initialCards } from "./container-for-card.js";
import { formUser, formCard } from "./lets.js";

//! ПЕРЕМЕННЫЕ
const profile = document.querySelector('.profile');
const profileBtEdit = profile.querySelector('.profile__button-edit');
const cardBtAdd = profile.querySelector('.profile__button-add');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');

const popupUser = document.querySelector('#user');
const popupCard = document.querySelector('#card');


const popupImage = document.C;
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const galeryContainer = document.querySelector('.galery__grid-container');
const popupAll = document.querySelectorAll('.popup');
const galeryCard = document.querySelector('#galery-card').content;





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
  formUser.name.value = profileName.textContent;
  formUser.about.value = profileAbout.textContent;
});

//! РЕДАКТИРУЕТ ДАННЫЕ "О СЕБЕ" В ПРОФИЛЕ
formUser.addEventListener('submit', function (event) {
  event.preventDefault();

  if (formUser.name.value !== '' && formUser.about.value !== '') {
    profileName.textContent = formUser.name.value;
    profileAbout.textContent = formUser.about.value;
  }
  closePopup(popupUser);
});

//! ДОБАВЛЯЕТ НОВЫЕ КАРТЫ В ГАЛЕРЕЮ
formCard.addEventListener('submit', function (event) {
  event.preventDefault();
  if (formCard.name.value !== '' && formCard.link.value !== '') {
    addCard(createCard(formCard.name.value, formCard.link.value), galeryContainer);
  }
  formCard.name.value = "";
  formCard.link.value = "";

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


