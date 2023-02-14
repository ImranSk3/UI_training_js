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

export { loadPage };
