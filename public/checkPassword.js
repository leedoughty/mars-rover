const form = document.forms["register"];
const password = form["password"];
const warningMessage = document.getElementById("register-warning-message");

const passwordLessThanSixCharacters = document.createElement("p");
warningMessage.appendChild(passwordLessThanSixCharacters);

const passwordContainsNoNumber = document.createElement("p");
warningMessage.appendChild(passwordContainsNoNumber);

const containsNumber = /(\d)/;

form.addEventListener("input", (event) => {
  if (event.target.value.length < 6) {
    passwordLessThanSixCharacters.textContent =
      "Your password is less than 6 characters long!";
  } else {
    passwordLessThanSixCharacters.textContent = "Password length: ✅";
  }

  if (!containsNumber.test(event.target.value)) {
    passwordContainsNoNumber.textContent =
      "Your password needs to contain a number";
  } else {
    passwordContainsNoNumber.textContent = "Password contains a number ✅";
  }
});

form.addEventListener("submit", (event) => {
  if (password.value.length < 6) {
    event.preventDefault();
  }

  if (!containsNumber.test(password.value)) {
    event.preventDefault();
  }
});
