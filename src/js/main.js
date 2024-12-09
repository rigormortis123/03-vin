var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var chevron = document.querySelector(".chevron");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

var toggleMenu = function toggleMenu() {
  chevron.classList.toggle("chevron-anim");
};

burger.addEventListener("click", toggleMenu);
