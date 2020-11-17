const pathOfMarsRover = document.getElementById("path-of-mars-rover");
const marsRoverSprite = document.getElementById("mars-rover-sprite");

pathOfMarsRover.height = window.innerHeight;
pathOfMarsRover.width = window.innerWidth;

// pathOfMarsRover.setAttribute("style", `height: ${window.innerHeight}`);
// pathOfMarsRover.setAttribute("style", `width: ${window.innerWidth}`);

marsRoverSprite.style.position = "absolute";
marsRoverSprite.style.left = "60%";

window.addEventListener("resize", (event) => {
  pathOfMarsRover.height = event.target.innerHeight;
  pathOfMarsRover.width = event.target.innerWidth;
});

//

marsRoverSprite.addEventListener("mousedown", startDraggingImage);

marsRoverSprite.addEventListener("mousemove", dragTheImage);

marsRoverSprite.addEventListener("mouseup", stopDraggingImage);

let currentX;
let currentY;

let dragStart;
let firstY;

let xOffset = 0;
let yOffset = 0;

let dragging = false;

function startDraggingImage(event) {
  dragStart = event.clientX - xOffset;
  firstY = event.clientY - yOffset;

  if (event.target === marsRoverSprite) {
    dragging = true;
  }
}

function dragTheImage(event) {
  if (dragging) {
    event.preventDefault();

    currentX = event.clientX - dragStart;
    currentY = event.clientY - firstY;

    xOffset = currentX;
    yOffset = currentY;

    marsRoverSprite.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
}

function stopDraggingImage() {
  dragStart = currentX;
  firstY = currentY;

  dragging = false;
}
