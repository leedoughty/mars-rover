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
      if (data.media_type === "video") {
        const videoOfTheDay = document.getElementById("video-of-the-day");
        const explanation = document.getElementById("explanation");
        videoOfTheDay.setAttribute("style", "display: block");
        videoOfTheDay.setAttribute("src", `${data.url}`);
        videoOfTheDay.setAttribute("alt", `${data.title}`);
        explanation.textContent = data.explanation;
      } else {
        const photoOfTheDay = document.getElementById("photo-of-the-day");
        const explanation = document.getElementById("explanation");
        photoOfTheDay.setAttribute("src", `${data.url}`);
        photoOfTheDay.setAttribute("alt", `${data.title}`);
        explanation.textContent = data.explanation;
      }
    })
    .catch(() => {
      const photoOfTheDay = document.getElementById("photo-of-the-day");
      photoOfTheDay.setAttribute("src", "mars-rover.jpg");
      photoOfTheDay.setAttribute("alt", "The Mars Rover");
    });
}
