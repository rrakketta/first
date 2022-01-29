const buttonCall = document.querySelector('.banner-button')
const popupSection = document.querySelector('.popup-container')
const closePopUp = document.querySelector('.popup-close')

buttonCall.addEventListener('click', function () {
    popupSection.classList.add('popup-container-show')
})
closePopUp.addEventListener('click', function () {
    popupSection.classList.remove('popup-container-show')
})