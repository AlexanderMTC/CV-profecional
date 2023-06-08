const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".topnav__menu--open");
const closeMenuBtn = document.querySelector(".topnav__menu--close");
console.log(openMenuBtn, closeMenuBtn);

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

document.addEventListener("click", (e) => {
  if (!e.target.matches(".menu__Link")) return false;
  menu.classList.remove("menu_opened");
});
