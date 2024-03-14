let nameError = document.getElementById("name-error");
let messageError = document.getElementById("message-error");
let emailError = document.getElementById("email-error");
//let phoneError = document.getElementById("phone-error");
let submitError = document.getElementById("submit-error");
function validateName() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}

function validateMessage() {
  let message = document.getElementById("message").value;
  console.log(message);
  let required = 5;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = "add more characters";
    return false;
  }
  messageError.innerHTML = "<i class='fas fa-check-circle'></i>";
}
function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.innerHTML = "Please fix error to submit";
    return false;
  }
}
document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hello");
  validateName();
  validateEmail();
  validateMessage();
  validateForm();
});
// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

// Function to handle form submission
const handleFormData = (e) => {
  e.preventDefault();

  // Retrieving input elements
  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");

  // Getting trimmed values from input fields
  const fullname = fullnameInput.value.trim();

  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();

  // Regular expression pattern for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  // Clearing previous error messages
  document
    .querySelectorAll(".form-group .error")
    .forEach((field) => field.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

  // Performing validation checks
  if (fullname === "") {
    showError(fullnameInput, "Enter your full name");
  }
  if (password === "") {
    showError(passwordInput, "Enter your password");
  }
  if (!emailPattern.test(email)) {
    showError(emailInput, "Enter a valid email address");
  }

  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length > 0) return;

  // Submitting the form
  form.submit();
};

// Toggling password visibility
// passToggleBtn.addEventListener("click", () => {
//   passToggleBtn.className =
//     passwordInput.type === "password"
//       ? "fa-solid fa-eye-slash"
//       : "fa-solid fa-eye";
//   passwordInput.type = passwordInput.type === "password" ? "text" : "password";
// });

// Handling form submission event
form.addEventListener("submit", handleFormData);

let nameError = document.getElementById("name-error");
let messageError = document.getElementById("message-error");
let emailError = document.getElementById("email-error");
//let phoneError = document.getElementById("phone-error");
let submitError = document.getElementById("submit-error");
// let names = "";
// let email = "";
// let message = "";
function validateName() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}

function validateMessage() {
  let message = document.getElementById("message").value;
  console.log(message);
  let required = 5;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = "add more characters";
    return false;
  }
  messageError.innerHTML = "<i class='fas fa-check-circle'></i>";
}
function validateEmail() {
  let email = document.getElementById("email").value;
  console.log(email);
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}

function validateForm() {}
// }
document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  //console.log(email);
  // if (!validateName() || !validateEmail() || !validateMessage()) {
  //   submitError.innerHTML = "Please fix error to submit";
  //   return false;
  // }
  let names = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error = document.querySelector(".error");
  console.log(email);
  console.log(names);
  console.log(message);
  let object = {
    name: names,
    email: email,
    message: message,
  };
  fetch(`https://my-brand-be-2.onrender.com/api/queries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      // email: "barbie63@gmail.com",
      // password: "life@250",

      object
    ),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        // alert(data.error);
        error.innerHTML = data.error;
      } else {
        // alert("message sent");
        error.innerHTML = "message sent";
        document.getElementById("form").reset();
        error.innerHTML = "";
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        messageError.innerHTML = "";
      }
    });
});
