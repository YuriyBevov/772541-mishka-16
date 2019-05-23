var navMenu = document.querySelector('.main-nav');
var button = document.querySelector('.main-nav__toggle');
var modal = document.querySelector('.modal');

navMenu.classList.remove('main-nav--nojs');
navMenu.classList.remove('main-nav--opened');
navMenu.classList.add('main-nav--closed');

button.addEventListener('click', function() {
  if (navMenu.classList.contains('main-nav--opened')) {
    navMenu.classList.remove('main-nav--opened');
    navMenu.classList.add('main-nav--closed');
  } else {
    navMenu.classList.remove('main-nav--closed');
    navMenu.classList.add('main-nav--opened');
  }
})

if(document.querySelectorAll('.products__button').length > 0) {

  var hit = document.querySelector('.products__button');

    hit.addEventListener ('click', function() {
      event.preventDefault();
      modal.classList.add('modal--opened');
    })
}

if(document.querySelectorAll('.catalog-item__basket').length > 0) {

  var basket = document.querySelectorAll('.catalog-item__basket');

  for (var i = 0; i < basket.length; i++) {
    basket[i].addEventListener('click', function(event) {
      event.preventDefault();
      modal.classList.add('modal--opened');
    })
  }
}

  document.onkeydown = function(e) {
    if (e.keyCode == 27) {
      if(modal.classList.contains('modal--opened')) {
        event.preventDefault();
        modal.classList.remove('modal--opened');
        modal.classList.add('modal--closed');
      }
    }
  }
