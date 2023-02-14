/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_initialPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





init();

function addNavEvents() {
  const homeLink = document.getElementById("home");
  const menuLink = document.getElementById("menu");
  const contactLink = document.getElementById("contact");

  // add event listeners

  homeLink.addEventListener('click', red);
  homeLink.addEventListener('click', _modules_home__WEBPACK_IMPORTED_MODULE_1__.home);

  menuLink.addEventListener('click', red);
  menuLink.addEventListener('click', _modules_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu);

  contactLink.addEventListener("click", red);
  contactLink.addEventListener("click", _modules_contact__WEBPACK_IMPORTED_MODULE_3__.createContacts);

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
  (0,_modules_initialPageLoad__WEBPACK_IMPORTED_MODULE_0__.loadPage)();
  addNavEvents();
  (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.home)();
}


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => /* binding */ loadPage
/* harmony export */ });
function createH1() {
  const h1 = document.createElement("H1");

  h1.innerHTML = "Welcome to Restuarant Page";

  document.getElementById("header").appendChild(h1);
}

function createNav() {
  const navMenu = document.createElement("nav");

  navMenu.innerHTML =
    '<span id="home">Home</span><span id="menu">Menu</span><span id="contact">Contact</span>';

  document.getElementById("header").appendChild(navMenu);
}

function loadPage() {
  createH1();
  createNav();
}




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => /* binding */ home
/* harmony export */ });
function createImage() {
  document.getElementById("content").innerHTML = "";
  const home = document.getElementById('home');
  home.className = 'red';
  const mainImage = document.createElement("img");

  mainImage.src = "./img/welcome.jpg";

  document.getElementById("content").appendChild(mainImage);
}

function createWelcomeMessage() {
  const welcomeMessage = document.createElement("p");

  welcomeMessage.innerHTML =
    "Dear Guests, you are welcomed to dine with us at Our Restaurant. We will serve you with the best dishes. Hope you have a pleasant dining experience with US.";

  welcomeMessage.classList.add('welcome')

  document.getElementById("content").appendChild(welcomeMessage);
}

function home() {
  createImage();
  createWelcomeMessage();
}




/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => /* binding */ createMenu
/* harmony export */ });
function createMenu() {
  const content = document.getElementById("content");

  content.textContent = "";

  const menu = document.createElement("p");

  menu.innerHTML = `
    <div id="menu-wrapper">
        <p class="food">Broccoli Soup</p><p class="price">Free</p>
        <p class="food">Hamburger</p><p class="price">9.90</p>
        <p class="food">Cheese Burger</p><p class="price">10.90</p>
        <p class="food">Special Salad</p><p class="price">3.90</p>
        <p class="food">Lemonade</p><p class="price">1.90</p>
        <p class="food">Brownie</p><p class="price">2.90</p>
    </div>
  `;

  content.appendChild(menu);
}




/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContacts": () => /* binding */ createContacts
/* harmony export */ });
function createContacts() {
    document.getElementById("content").innerHTML = "";

  const image = document.createElement("img");

  image.src = "./img/location_mars.png"

  document.getElementById("content").appendChild(image);

  

  const contacts = document.createElement("p");

  contacts.innerHTML = "Phones: +90 xxx 848 39 93";

  document.getElementById("content").appendChild(contacts);
}






/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map