const form = document.getElementById("form3");
const fields = form.querySelectorAll("input, textarea");
const okBox = document.getElementById("okBox");

// set the error text depending on what is wrong
function setMessage(input) {
  const fb = input.parentElement.querySelector(".invalid-feedback");
  if (input.validity.valueMissing) {
    fb.textContent = input.dataset.required;
  } else if (input.validity.typeMismatch) {
    fb.textContent = "Please enter a valid email, like name@example.com";
  } else {
    fb.textContent = input.validationMessage;
  }
}

// check one field and add is-valid or is-invalid
function checkField(input) {
  const good = input.checkValidity();
  if (!good) setMessage(input);
  input.classList.toggle("is-valid", good);
  input.classList.toggle("is-invalid", !good);
  return good;
}

fields.forEach(function (input) {
  input.addEventListener("blur", function () {
    checkField(input);
  });
  // after the field was checked once, update it while typing
  input.addEventListener("input", function () {
    if (input.classList.contains("is-valid") || input.classList.contains("is-invalid")) {
      checkField(input);
    }
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let allGood = true;
  fields.forEach(function (input) {
    if (!checkField(input)) allGood = false;
  });
  okBox.classList.toggle("d-none", !allGood);
});

// buttons for testing
document.getElementById("fillGood").addEventListener("click", function () {
  document.getElementById("name").value = "Duman Zhanybekov";
  document.getElementById("email").value = "duman@example.com";
  document.getElementById("message").value = "Hello, this is a test message.";
  fields.forEach(checkField);
});

document.getElementById("fillBad").addEventListener("click", function () {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "abc@";
  document.getElementById("message").value = "";
  fields.forEach(checkField);
  okBox.classList.add("d-none");
});
