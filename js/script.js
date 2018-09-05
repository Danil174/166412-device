"use strict";

var mapBtn = document.querySelector(".map-link");
var closeBtns = document.querySelectorAll(".modal-close-button");
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
