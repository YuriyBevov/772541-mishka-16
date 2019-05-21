  /*var navMain = document.querySelector('.main-nav__item');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
*/

/*var hit = document.querySelector('.products__button');
var popup = document.querySelector('.modal');
var basket = document.querySelectorAll('.main-nav__link--basket');*/


/*hit.addEventListener('click', function(){
    event.preventDefault();
    popup.classList.add('modal--opened');
})

basket.addEventListener('click', function(){
  event.preventDefault();
  popup.classList.add('modal--opened');
})

if(basket.lenght > 0) {
  for(var i = 0; i < basket.lenght; i++) {
    basket[i].addEventListener('click', function(e) {
      event.preventDefault();
      popup.classList.add('modal--opened');
    })
  }
}*/

/*var basket = document.querySelector('.main-nav__link--basket');*/

/*basket.addEventListener('click', function() {
  event.preventDefault();
  popup.classList.add('modal--opened');
})*/



var popup = document.querySelector('.modal');

if(document.querySelector('.main-nav__link--basket').length > 0) {
  var basket = document.querySelector('.main-nav__link--basket');

  basket.addEventListener('click', function() {
    event.preventDefault();
    popup.classList.add('modal--opened');
  })
}

if(document.querySelector('.products__button').length > 0) {

  var hit = document.querySelector('.products__button');

   hit.addEventListener ('click', function() {
     event.preventDefault();
     popup.classList.add('modal--opened');
   })
}

if(document.querySelector('.catalog-item__basket').length > 0) {

  var link = document.querySelectorAll('.catalog-item__basket');

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('modal--opened');
    })
  }
}

  document.onkeydown = function(e) {
    event.preventDefault();
    if (e.keyCode == 27) {
      if(popup.classList.contains('modal--opened')) {
        popup.classList.remove('modal--opened');
        popup.classList.add('modal--closed');
      }
    }
  }
