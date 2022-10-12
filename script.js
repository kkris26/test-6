var menuBar = document.querySelector(".menu-bar");
var menuNav = document.querySelector(".navbar-wrapper");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

var navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  var windoPos = window.scrollY > 0;
  navBar.classList.toggle("scroll-active", windoPos);
  menuNav.classList.remove("menu-active")
});

  AOS.init();