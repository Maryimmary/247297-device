var modalOpenButton=document.querySelector(".contacts__info"),userPopap=document.querySelector(".modal-content"),modalCloseButton=document.querySelector(".modal-content__close"),map=document.querySelector(".map"),modalMap=document.querySelector(".modal-map"),modalMapClose=document.querySelector(".modal-map--close"),overlay=document.querySelector(".modal-overlay");modalOpenButton.addEventListener("click",function(e){e.preventDefault(),userPopap.classList.add("modal-content--show"),overlay.classList.add("modal-overlay--show")}),modalCloseButton.addEventListener("click",function(e){e.preventDefault(),userPopap.classList.remove("modal-content--show"),overlay.classList.remove("modal-overlay--show")}),map.classList.remove(".map--no-js"),map.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.add("modal-map--show")}),modalMapClose.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.remove("modal-content--show"),overlay.classList.remove("modal-overlay--show")}),overlay.addEventListener("click",function(e){userPopap.classList.remove("modal-content--show"),modalMap.classList.remove("modal-map--show"),overlay.classList.remove("modal-overlay--show")});