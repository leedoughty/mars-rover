const marsRoverSprite = document.getElementById("mars-rover-sprite");

marsRoverSprite.addEventListener("mousedown", startDraggingImage);
marsRoverSprite.addEventListener("mousemove", dragTheImage);
marsRoverSprite.addEventListener("mouseup", stopDraggingImage);

const currentPosition = {
  x: 0,
  y: 0,
};

const dragStart = {
  dragStartX: 0,
  dragStartY: 0,
};

const offset = {
  xOffset: 0,
  yOffset: 0,
};

let isDraggingImage = false;

function startDraggingImage(event) {
  dragStart.dragStartX = event.clientX - offset.xOffset;
  dragStart.dragStartY = event.clientY - offset.yOffset;

  if (event.target === marsRoverSprite) {
    isDraggingImage = true;
  }
}

function dragTheImage(event) {
  if (isDraggingImage) {
    event.preventDefault();

    currentPosition.x = event.clientX - dragStart.dragStartX;
    currentPosition.y = event.clientY - dragStart.dragStartY;

    offset.xOffset = currentPosition.x;
    offset.yOffset = currentPosition.y;

    marsRoverSprite.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
  }
}

function stopDraggingImage() {
  dragStart.dragStartX = currentPosition.x;
  dragStart.dragStartY = currentPosition.y;

  isDraggingImage = false;
}
