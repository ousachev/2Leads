let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");
let close = document.querySelector(".overlay__close");
let menu = document.querySelector(".header__menu");

menu.addEventListener("click", () => {
  overlay.classList.add("active");
  body.classList.add("body__overflow");
});

overlay.addEventListener("click", e => {
  let links = event.target.closest(".nav__link");
  if (links || event.target == close) {
    overlay.classList.remove("active");
    body.classList.remove("body__overflow");
  }
});
