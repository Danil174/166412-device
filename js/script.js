console.log("Hi!");
// var loginList = document.querySelectorAll('.login');
// console.log(loginList);
var closeBtn = document.querySelector(".modal-close-button");
closeBtn.addEventListener("click", function name(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

var popup = document.querySelector('.modal-login');
var inputName = popup.querySelector('.modal-name');
var login = document.querySelector('.login');
console.log(login);
login.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  inputName.focus();
});

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("inputName");
} catch(err) {
  isStorageSupport = false;
}

window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")){
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
