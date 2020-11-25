function displayPhoto() {
  fetch("/photo")
    .then((response) => response.json())
    .then((data) => {
      const photoOfTheDay = document.getElementById("photo-of-the-day");
      const photoExplanation = document.getElementById("photo-explanation");
      photoOfTheDay.setAttribute("src", `${data.url}`);
      photoOfTheDay.setAttribute("alt", `${data.title}`);
      photoExplanation.textContent = data.explanation;
    });
}
