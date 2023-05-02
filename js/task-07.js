const inputRefs = document.querySelector("#font-size-control");
console.log(inputRefs);
const styleRefs = document.querySelector("#text");
console.log(styleRefs);

inputRefs.addEventListener(
  "input",
  (event) => (styleRefs.style.fontSize = event.target.value + "px")
);
