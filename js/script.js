"use strict";
var promoControl = document.querySelector("#promo-slider");
var promoBtns = document.querySelectorAll(".promo-products .promo-button");
var servicesBtns = document.querySelectorAll(".services .device-button");
var servicesControl = document.querySelector("#services-control");
var mapBtn = document.querySelector(".map-link");
var closeBtns = document.querySelectorAll(".modal-close-button");
var modalMap = document.querySelector(".modal-map");
var mailBtn = document.querySelector(".mail-btn");
var modalMail = document.querySelector(".modal-mailUs");
var form = modalMail.querySelector("form");
var userName = modalMail.querySelector("[name=user-name]");
var userEmail = modalMail.querySelector("[name=user-email]");
var mailText = modalMail.querySelector("[name=mail-text]");
var isStorageSupport = true;
var storageUserName = "";
var storageEmail = "";

try {
  storageUserName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

//close btns
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

//popAps
mailBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMail.classList.add("modal-show");
  if (storageUserName) {
    userName.value = storageUserName;
    userEmail.focus();
    if (storageEmail) {
      userEmail.value = storageEmail;
      mailText.focus();
    }
  } else {
    userName.focus();
  }
});

mailBtn.addEventListener("keypress", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 32) {
    modalMail.classList.add("modal-show");
    if (storageUserName) {
      userName.value = storageUserName;
      userEmail.focus();
      if (storageEmail) {
        userEmail.value = storageEmail;
        mailText.focus();
      }
    } else {
      userName.focus();
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !mailText.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
    form.submit();
  }
});


mapBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

mapBtn.addEventListener("keypress", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 32) {
    modalMap.classList.add("modal-show");
  }
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
