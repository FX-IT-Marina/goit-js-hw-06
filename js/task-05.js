const refs = {
  inputElem: document.querySelector("#name-input"),
  outputElem: document.querySelector("#name-output"),
};

refs.inputElem.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.outputElem.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.outputElem.textContent = "Anonymous";
  }
}
