export const formUser = document.forms.formAbout;
export const formCard = document.forms.formCard;
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
