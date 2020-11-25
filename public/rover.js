const marsRoverSprite = document.getElementById("mars-rover-sprite");

marsRoverSprite.style.position = "absolute";
marsRoverSprite.style.left = "60%";

marsRoverSprite.addEventListener("mousedown", startDraggingImage);
marsRoverSprite.addEventListener("mousemove", dragTheImage);
marsRoverSprite.addEventListener("mouseup", stopDraggingImage);

const currentPosition = {
  x: 0,
  y: 0,
};

let dragStartX;
let dragStartY;

let xOffset = 0;
let yOffset = 0;

let isDraggingImage = false;

function startDraggingImage(event) {
  dragStartX = event.clientX - xOffset;
  dragStartY = event.clientY - yOffset;

  if (event.target === marsRoverSprite) {
    isDraggingImage = true;
  }
}

function dragTheImage(event) {
  if (isDraggingImage) {
    event.preventDefault();

    currentPosition.x = event.clientX - dragStartX;
    currentPosition.y = event.clientY - dragStartY;

    xOffset = currentPosition.x;
    yOffset = currentPosition.y;

    marsRoverSprite.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
  }
}

function stopDraggingImage() {
  dragStartX = currentPosition.x;
  dragStartY = currentPosition.y;

  isDraggingImage = false;
}
