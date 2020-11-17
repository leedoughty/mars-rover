const pathOfMarsRover = document.getElementById("path-of-mars-rover");

pathOfMarsRover.height = window.innerHeight;
pathOfMarsRover.width = window.innerWidth;

window.addEventListener("resize", (event) => {
  pathOfMarsRover.height = event.target.innerHeight;
  pathOfMarsRover.width = event.target.innerWidth;
});
