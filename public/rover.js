const marsRoverSprite = document.getElementById("mars-rover-sprite");

marsRoverSprite.style.position = "absolute";
marsRoverSprite.style.left = "60%";

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
