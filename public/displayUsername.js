function displayUsername() {
  fetch("/username")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const username = document.getElementById("account-username");
      username.textContent += data.username;
    })
    .catch((error) => {
      throw new Error(error);
    });
}
