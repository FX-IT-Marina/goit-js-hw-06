// З конспекту
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//
const btnRef = document.querySelector(".change-color");
const colorSpanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

const changeBackground = (event) => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorSpanRef.textContent = randomColor;
};
btnRef.addEventListener("click", changeBackground);
