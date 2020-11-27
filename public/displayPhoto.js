function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    throw new Error();
  }
}

function displayPhoto() {
  fetch("/photo")
    .then(checkStatus)
    .then((response) => response.json())
    .then((data) => {
      const photoOfTheDay = document.getElementById("photo-of-the-day");
      const photoExplanation = document.getElementById("photo-explanation");
      photoOfTheDay.setAttribute("src", `${data.url}`);
      photoOfTheDay.setAttribute("alt", `${data.title}`);
      photoExplanation.textContent = data.explanation;
    })
    .catch(() => {
      const photoOfTheDay = document.getElementById("photo-of-the-day");
      photoOfTheDay.setAttribute("src", "mars-rover.jpg");
      photoOfTheDay.setAttribute("alt", "The Mars Rover");
    });
}
