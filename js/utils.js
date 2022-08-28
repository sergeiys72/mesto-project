export const formUser = document.forms.formAbout;
export const formCard = document.forms.formCard;
export const popupUser = document.querySelector('#user');
export const popupCard = document.querySelector('#card');
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');


//! ОТКРЫВАЕТ POPUP
export function openPopup(popup) {
  popup.classList.add('popup_active');
}

//! ЗАКРЫВАЕТ POPUP
export function closePopup(popup) {
  const allError = document.querySelectorAll('.form__input-error');
  popup.classList.remove('popup_active');
  allError.forEach(function (item) {
    item.textContent = '';
  });
}
