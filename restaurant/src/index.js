import { loadPage } from "./modules/initialPageLoad";
import { home } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContacts } from "./modules/contact";

init();

function addNavEvents() {
  const homeLink = document.getElementById("home");
  const menuLink = document.getElementById("menu");
  const contactLink = document.getElementById("contact");

  // add event listeners
 
  homeLink.addEventListener('click', red);
  homeLink.addEventListener('click', home);

  menuLink.addEventListener('click', red);
  menuLink.addEventListener('click', createMenu);

  contactLink.addEventListener("click", red);
  contactLink.addEventListener("click", createContacts);

}

function red(e) {
  const homeLink = document.getElementById("home");
  const menuLink = document.getElementById("menu");
  const contactLink = document.getElementById("contact");
  homeLink.classList.remove('red');
  menuLink.classList.remove('red');
  contactLink.classList.remove('red');

  e.target.className = 'red';
}

function init() {
  loadPage();
  addNavEvents();
  home();
}
