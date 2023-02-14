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

export { createMenu };
