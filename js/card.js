//import { openPopup } from "./script";
const popupImage = document.querySelector('#image');
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const galeryCard = document.querySelector('#galery-card').content;

//! СОЗДАЕТ ЗАГОТОВКУ КАРТЫ
export function createCard(name, link) {
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
export function addCard(card, container) {
  container.prepend(card);
}

