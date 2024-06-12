const regForm = document.querySelector(".login-form");

regForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  console.log(data);

  form.reset();
}
