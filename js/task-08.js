const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const formElements = { email: email.value, password: password.value };
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  const formData = new FormData(event.currentTarget);
  console.log(formElements);
  event.currentTarget.reset();
}
