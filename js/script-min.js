"use strict"; var headerDropDownBtn = document.querySelector(".header-services-list .catalog-link"), dropDownMenu = document.querySelector(".main-header .header-calalog-list"), promoControl = document.querySelector("#promo-slider"), promoBtns = document.querySelectorAll(".promo-products .promo-button"), servicesBtns = document.querySelectorAll(".services .device-button"), servicesControl = document.querySelector("#services-control"), mapBtn = document.querySelector(".map-link"), closeBtns = document.querySelectorAll(".modal-close-button"), modalMap = document.querySelector(".modal-map"), mailBtn = document.querySelector(".mail-btn"), modalMail = document.querySelector(".modal-mailUs"), form = document.querySelector(".modal-mailUs form"), userName = document.querySelector(".modal-mailUs [name=user-name]"), userEmail = document.querySelector(".modal-mailUs [name=user-email]"), mailText = document.querySelector(".modal-mailUs [name=mail-text]"), isStorageSupport = !0, storageUserName = "", storageEmail = ""; try { storageUserName = localStorage.getItem("userName"), storageEmail = localStorage.getItem("userEmail") } catch (e) { isStorageSupport = !1 } headerDropDownBtn.addEventListener("click", function (e) { e.preventDefault(), dropDownMenu.classList.toggle("menu-open") }), headerDropDownBtn.addEventListener("keypress", function (e) { e.preventDefault(), 32 === e.keyCode && dropDownMenu.classList.toggle("menu-open") }); for (var closeBtnsArr = [], length = closeBtns.length, i = 0; i < length; i++)closeBtnsArr.push(closeBtns[i]); closeBtnsArr.forEach(function (e) { return e.addEventListener("click", function (e) { e.preventDefault(), this.parentElement.classList.remove("modal-show") }) }), mailBtn.addEventListener("click", function (e) { e.preventDefault(), modalMail.classList.add("modal-show"), storageUserName ? (userName.value = storageUserName, userEmail.focus(), storageEmail && (userEmail.value = storageEmail, mailText.focus())) : userName.focus() }), mailBtn.addEventListener("keypress", function (e) { e.preventDefault(), 32 === e.keyCode && (modalMail.classList.add("modal-show"), storageUserName ? (userName.value = storageUserName, userEmail.focus(), storageEmail && (userEmail.value = storageEmail, mailText.focus())) : userName.focus()) }), form.addEventListener("submit", function (e) { userName.value && userEmail.value && mailText.value ? (isStorageSupport && (localStorage.setItem("userName", userName.value), localStorage.setItem("userEmail", userEmail.value)), form.submit()) : e.preventDefault() }), mapBtn.addEventListener("click", function (e) { e.preventDefault(), modalMap.classList.add("modal-show") }), mapBtn.addEventListener("keypress", function (e) { e.preventDefault(), 32 === e.keyCode && modalMap.classList.add("modal-show") }); var promoBtnsArr = []; for (length = promoBtns.length, i = 0; i < length; i++)promoBtnsArr.push(promoBtns[i]); promoBtnsArr.forEach(function (e) { return e.addEventListener("click", function (e) { e.preventDefault(), promoBtnsArr.forEach(function (e) { e.classList.remove("current") }); var t = this.getAttribute("name"); this.classList.add("current"); var r = promoControl.className; promoControl.classList.remove(r), promoControl.classList.add(t) }) }); var servicesBtnsArr = []; for (length = servicesBtns.length, i = 0; i < length; i++)servicesBtnsArr.push(servicesBtns[i]); servicesBtnsArr.forEach(function (e) { return e.addEventListener("click", function (e) { e.preventDefault(), servicesBtnsArr.forEach(function (e) { e.classList.remove("current") }); var t = this.getAttribute("name"); this.classList.add("current"); var r = servicesControl.className; servicesControl.classList.remove(r), servicesControl.classList.add(t) }) });
