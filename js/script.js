var modalOpenButton = document.querySelector(".contacts__info");
var userPopap = document.querySelector(".modal-content");
var modalCloseButton = document.querySelector(".modal-content__close");
var map = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var modalMapClose = document.querySelector(".modal-map--close");
var overlay = document.querySelector(".modal-overlay");

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

map.addEventListener("click", function(event) {
  event.preventDefault();
  modalMap.classList.add("modal-map--show");
});

modalMapClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalMap.classList.remove("modal-content--show");
  overlay.classList.remove("modal-overlay--show");
});

overlay.addEventListener("click", function(event) {
  userPopap.classList.remove("modal-content--show");
  modalMap.classList.remove("modal-map--show");
  overlay.classList.remove("modal-overlay--show");
});
