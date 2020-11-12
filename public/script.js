const earthDateParagraph = document.querySelector("#earth-date");
const earthDate = new Date();
const dateText = document.createTextNode(earthDate.toLocaleString());

earthDateParagraph.appendChild(dateText);
