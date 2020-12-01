const form = document.forms["register"];
const password = form["password"];
const warningMessage = document.getElementById("register-warning-message");
const passwordLessThanSixCharacters = document.createElement("p");
warningMessage.appendChild(passwordLessThanSixCharacters);

form.addEventListener("input", (event) => {
  if (event.target.value.length < 6) {
    passwordLessThanSixCharacters.textContent =
      "Your password is less than 6 characters long!";
  } else {
    passwordLessThanSixCharacters.textContent = "Password length: ✅";
  }
});

form.addEventListener("submit", (event) => {
  if (password.value.length < 6) {
    event.preventDefault();
  }
});
