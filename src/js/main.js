// select all .burgers
var burgers = document.querySelectorAll(".burger");

// create loop
burgers.forEach((burger) => {
  // select these elements inside each .burger
  var menu = burger.querySelector(".menu");
  var chevron = burger.querySelector(".chevron");

  // add class to items inside loops, function is called togglemenu
  var toggleMenu = function toggleMenu() {
    menu.classList.toggle("is-active");
    chevron.classList.toggle("chevron-anim");
  };

  // Listen for click, start togglemenu function
  burger.addEventListener("click", toggleMenu);
});
