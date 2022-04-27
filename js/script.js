//! ПЕРЕМЕННЫЕ ПРОФИЛЯ
let profile = document.querySelector('.profile');
let profileBtEdit = profile.querySelector('.profile__button-edit');
let CardBtAdd = profile.querySelector('.profile__button-add');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');

//! ПЕРЕМЕННЫЕ POPUP ДЛЯ ПРОФИЛЯ
let popupUser = document.querySelector('#user');
let popupUserBtClose = popupUser.querySelector('.popup__button-close');
let formUser = popupUser.querySelector('#popup__form');

//! ПЕРЕМЕННЫЕ POPUP ДЛЯ ГАЛЕРЕИ
let popupCard = document.querySelector('#card');
let popupCardBtClose = popupCard.querySelector('.popup__button-close');
let cardFrom = popupCard.querySelector('#popup__form');

let popupImage = document.querySelector('#image');
let popupImageBtclose = popupImage.querySelector('.popup__button-close');

//! ПЕРЕМЕННЫЕ ДЛЯ ГАЛЕРЕИ
let galeryContainer = document.querySelector('.galery__grid-container');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//! ВЫЗОВ ФУНКЦИ
newCard();
openPopup(popupCard, popupCardBtClose, CardBtAdd);
editCardPopup(cardFrom, popupCard);
openPopup(popupUser, popupUserBtClose, profileBtEdit);
editUserPopup(formUser, popupUser);


//! ДОБАВЛЯЕТ НОВЫЕ 6 КАРТ ИЗ МАСИВА "initialCards"
function newCard() {
  galeryContainer.innerHTML = "";
  for (let i = 0; i < initialCards.length; ++i) {
    addCard(initialCards[i].name, initialCards[i].link);
  }
}

//! РЕДАКТИРУЕТ ДАННЕ "О СЕБЕ" В ПРОФИЛЕ
function editUserPopup(form, popup) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let popupName = popup.querySelector('.popup__input_type_name');
    let popupAbout = popup.querySelector('.popup__input_type_about');

    if (popupName.value !== '' && popupAbout.value !== '') {
      profileName.textContent = popupName.value;
      profileAbout.textContent = popupAbout.value;
    } else {
      popupName.placeholder = 'Введите данные';
      popupAbout.placeholder = 'Введите данные';
      return;
    }

    popupName.placeholder = profileName.textContent;
    popupAbout.placeholder = profileAbout.textContent;

    //PopupName.value = "";
    //PopupAbout.value = "";
    popup.classList.remove('popup_active');
  });
}

//! ДОБАВЛЯЕТ НОВЫЕ КАРТЫ В ГАЛЕРЕЮ
function editCardPopup(form, popup) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let popupName = popup.querySelector('.popup__input_type_name');
    let popupLink = popup.querySelector('.popup__input_type_about');

    if (popupName.value !== '' && popupLink.value !== '') {
      addCard(popupName.value, popupLink.value);
    } else {
      popupName.placeholder = 'Введите данные';
      popupLink.placeholder = 'Введите данные';
      return;
    }

    popupName.value = "";
    popupLink.value = "";
    popup.classList.remove('popup_active');
  });
}

//! ОТКРЫВАЕТ И ЗАКРЫВАЕТ POPUP ОКНО
function openPopup(popup, closeBt, openBt) {
  openBt.addEventListener('click', function () {
    popup.classList.add('popup_active');
  });

  closeBt.addEventListener('click', function () {
    popup.classList.remove('popup_active');
  });
}

//! СОЗДАЕТ ЗАГОТОВКУ КАРТЫ И ДОБАВЛЯЕТ ЕЁ НА СТРАНИЦУ
function addCard(name, link) {
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
    popupText.textContent = name;
    openPopup(popupImage, popupImageBtclose, e.target);

  });
  cardElement.querySelector('.galery__title').textContent = name;
  cardElement.querySelector('.galery__button-heart').addEventListener('click', function (e) {
    e.target.classList.toggle('galery__button-heart_active');
  });
  galeryContainer.prepend(cardElement);
}
