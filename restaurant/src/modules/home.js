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

export { home };
