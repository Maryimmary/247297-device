var modalOpenButton = document.querySelector(".contacts__info");
var userPopap = document.querySelector(".modal-content");
var modalCloseButton = document.querySelector(".modal-content__close");
var map = document.querySelector(".map");
var overlay = document.querySelector(".modal-overlay");

var ESC_KEYCODE = 27;

modalOpenButton.addEventListener("click", function(event) {
  event.preventDefault();
  userPopap.classList.add("modal-content--show");
  overlay.classList.add("modal-overlay--show");
});

modalCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  userPopap.classList.remove("modal-content--show");
  overlay.classList.remove("modal-overlay--show");
});

map.classList.remove(".map--no-js");

overlay.addEventListener("click", function(event) {
  userPopap.classList.remove("modal-content--show");
  overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === ESC_KEYCODE) {
    userPopap.classList.remove("modal-content--show");
    overlay.classList.remove("modal-overlay--show");
  }
});
