'use strict';


//Task - 09

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
    
  
  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.
    
    При клике на кнопку показа модального окна должен вызываться 
    метод show или toggle. Соответственно при для закрытия 
    окна hide либо toggle.
*/


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalBackdrop = document.querySelector('.js-modal-backdrop');
  const btnOpenModal = document.querySelector('.js-open-modal');
  const btnCloseModal = document.querySelector('.js-close-modal');

  modalBackdrop.addEventListener('click', handlBackdropClick);
  btnOpenModal.addEventListener('click', showModal);
  btnCloseModal.addEventListener('click', hideModal);


  function  handlBackdropClick(event) {
    if(this !== event.target) return;
    hideModal();
    return;
  }


  function showModal() {
    modal.classList.remove('modal-hidden');
    return;
  }

  function hideModal() {
    modal.classList.add('modal-hidden');
    return;
  }


});