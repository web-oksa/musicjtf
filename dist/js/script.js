"use strict";

// проверка, поддерживает ли браузер формат webp
// и добавление класса webp, в случае если формат поддерживается
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// бургер-меню

const btnNav = document.querySelector('.btn-nav'),
      navBody = document.querySelector('.nav__body');

  btnNav.addEventListener('click', () => {
    btnNav.classList.toggle('btn-nav_active');
    navBody.classList.toggle('nav__body_active');
    
    return false
  })
