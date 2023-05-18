

const categoriesList = document.getElementById("categories").childNodes;
const categoryItems = Array.from(categoriesList).filter(
  (node) => node.nodeType === Node.ELEMENT_NODE
);

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
