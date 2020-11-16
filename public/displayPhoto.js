function displayPhoto() {
  fetch("http://localhost:3000/photo")
    .then((response) => {
      console.log(response);
      console.log("in the html");
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

displayPhoto();
