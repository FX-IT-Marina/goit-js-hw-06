const items = document.querySelector("#categories");
console.log("Number of categories: ", items.children.length);
console.log("");

const list = document.querySelectorAll("#categories > li");
list.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
