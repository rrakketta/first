const closePopUp = document.querySelector('.popup-close')
closePopUp.addEventListener('click', function () {
    popupSection.classList.remove('popup-container-show')
})
const CloseQuestions = document.querySelector('.close-questions')
CloseQuestions.addEventListener('click', function () {
    popupQuestions.classList.remove('popup-container-show-questions')
})
const CloseThanks = document.querySelector('.close-thanks')
CloseThanks.addEventListener('click', function () {
    popupThanks.classList.remove('popup-container-show-thanks')
})
const CloseCallBack = document.querySelector('.close-call-back')
CloseCallBack.addEventListener('click', function () {
    popupContentCall.classList.remove('popup-container-show-call-back')
})
/*open*/ 
const buttonCall = document.querySelector('.banner-button')
const popupSection = document.querySelector('.popup-container')
buttonCall.addEventListener('click', function () {
    popupSection.classList.add('popup-container-show')
})

const buttonQuestions = document.querySelector('.button-questions')
const popupQuestions = document.querySelector('.popup-container-questions')
buttonQuestions.addEventListener('click', function () {
    popupSection.classList.remove('popup-container-show')
    popupQuestions.classList.add('popup-container-show-questions')
    
})
const buttonThanks = document.querySelector('.button-thanks')
const popupThanks= document.querySelector('.popup-container-thanks')
buttonThanks.addEventListener('click', function () {
    popupQuestions.classList.remove('popup-container-show-questions')
    popupThanks.classList.add('popup-container-show-thanks')
})
const closeThanks = document.querySelector('.button-thank')
closeThanks.addEventListener('click', function () {
    popupThanks.classList.remove('popup-container-show-thanks')
})
const buttonOddzvon = document.querySelector('.footer-button')
const popupContentCall = document.querySelector('.popup-container-call-back')
buttonOddzvon.addEventListener('click', function () {
    popupContentCall.classList.add('popup-container-show-call-back')    
})
const BackSection = document.querySelector('.back')
BackSection.addEventListener('click', function () {
    popupQuestions.classList.remove('popup-container-show-questions')
    popupSection.classList.add('popup-container-show')
})