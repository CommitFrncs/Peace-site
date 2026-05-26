const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".main-nav");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  hamburger.classList.toggle("active");
});
