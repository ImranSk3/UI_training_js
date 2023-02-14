function createContacts() {
    document.getElementById("content").innerHTML = "";

  const image = document.createElement("img");

  image.src = "./img/location_mars.png"

  document.getElementById("content").appendChild(image);

  

  const contacts = document.createElement("p");

  contacts.innerHTML = "Phones: +90 xxx 848 39 93";

  document.getElementById("content").appendChild(contacts);
}

export { createContacts };


