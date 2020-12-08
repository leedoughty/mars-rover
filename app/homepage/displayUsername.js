function displayUsername() {
  fetch("/username")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.username) {
        const username = document.getElementById("account-username");
        username.textContent += data.username;
      } else {
        const username = document.getElementById("account-username");
        username.textContent = "You are not signed in";
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}
