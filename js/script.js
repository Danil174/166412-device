"use strict";

var mapBtn = document.querySelector(".map-link");
var closeBtns = document.querySelectorAll(".modal-close-button");
var servicesBtns = document.querySelectorAll(".services .device-button");
var servicesControl = document.querySelector("#services-control");
var promoControl = document.querySelector("#promo-slider");
var promoBtns = document.querySelectorAll(".promo-products .promo-button");
var modalMap = document.querySelector(".modal-map");
var mailBtn = document.querySelector(".mail-btn");
var modalMail = document.querySelector(".modal-mailUs");

mailBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMail.classList.add("modal-show");
});

mapBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

//promo
var promoBtnsArr = [],
  length = promoBtns.length;

for (var i = 0; i < length; i++) {
  promoBtnsArr.push(promoBtns[i]);
}

promoBtnsArr.forEach(function (promoBtn) {
  return promoBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    promoBtnsArr.forEach(function (promoBtn) {
      promoBtn.classList.remove("current");
    });
    var currentName = this.getAttribute("name");
    this.classList.add("current");
    var newName = promoControl.className;
    promoControl.classList.remove(newName);
    promoControl.classList.add(currentName);
  });
});

//services

var servicesBtnsArr = [],
  length = servicesBtns.length;

for (var i = 0; i < length; i++) {
  servicesBtnsArr.push(servicesBtns[i]);
}

servicesBtnsArr.forEach(function (serviceBtn) {
  return serviceBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesBtnsArr.forEach(function (serviceBtn) {
      serviceBtn.classList.remove("current");
    });
    var currentName = this.getAttribute("name");
    this.classList.add("current");
    var newName = servicesControl.className;
    servicesControl.classList.remove(newName);
    servicesControl.classList.add(currentName);
  });
});
//close btns

// не для ie
// var closeBtns = Array.from(document.querySelectorAll(".modal-close-button"));
// можно конечно полифил подключить для Array.from, но он больше всего моего скрипта
// closeBtns.forEach(closeBtn => closeBtn.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   this.parentElement.classList.remove("modal-show");
// }));

var closeBtnsArr = [],
  length = closeBtns.length;

for (var i = 0; i < length; i++) {
  closeBtnsArr.push(closeBtns[i]);
}

closeBtnsArr.forEach(function (closeBtn) {
  return closeBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    this.parentElement.classList.remove("modal-show");
  });
});
