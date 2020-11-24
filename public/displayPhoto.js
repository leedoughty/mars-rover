function displayPhoto() {
  fetch("http://localhost:3000/photo")
    .then((response) => response.json())
    .then((data) => {
      const photoOfTheDay = document.getElementById("photo-of-the-day");
      photoOfTheDay.setAttribute("src", `${data.url}`);
    });
}
