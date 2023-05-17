const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});

//!------------------------------------------------
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});
//!------------------------------------------------
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const galleryItems = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryItems);

//!------------------------------------------------
const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let count = 0;

decrementButton.addEventListener("click", () => {
  count -= 1;
  counterValue.textContent = count;
});

incrementButton.addEventListener("click", () => {
  count += 1;
  counterValue.textContent = count;
});

//!------------------------------------------------
const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim() || "Anonymous";
});
//!------------------------------------------------
const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.getAttribute("data-length"));
  const actualLength = input.value.length;

  input.classList.remove("valid", "invalid");

  if (actualLength === expectedLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});

//!------------------------------------------------
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
});
//!------------------------------------------------

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Перешкоджає перезавантаженню сторінки

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);
    loginForm.reset();
  }
});
//!------------------------------------------------

const widget = document.querySelector(".widget");
const colorSpan = widget.querySelector(".color");
const changeColorButton = widget.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

