const counterValue = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },

  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

const buttonDecRef = document.querySelector("[data-action='decrement']");
const buttonIncrRef = document.querySelector("[data-action='increment']");
const valueRef = document.querySelector("#value");

buttonDecRef.addEventListener("click", function () {
  counterValue.decrement();
  console.log(counterValue);
  valueRef.textContent = counterValue.value;
});

buttonIncrRef.addEventListener("click", function () {
  counterValue.increment();
  console.log(counterValue);
  valueRef.textContent = counterValue.value;
});
