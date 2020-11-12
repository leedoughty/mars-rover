const earthDate = new Date();

function displayCurrentEarthDate() {
  const earthDateParagraph = document.querySelector("#earth-date");
  const dateText = document.createTextNode(earthDate.toLocaleString());

  earthDateParagraph.appendChild(dateText);
}

displayCurrentEarthDate();

function displayKennedySpaceCenterTime() {
  const kennedyTimeParagraph = document.querySelector("#kennedy-time");
  const kennedyTime = earthDate.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });
  const kennedyTimeText = document.createTextNode(kennedyTime.split(" ")[0]);

  kennedyTimeParagraph.appendChild(kennedyTimeText);
}

displayKennedySpaceCenterTime();

function displayOffsetTimeToKennedySpaceCenter() {
  const kennedyOffsetTime = document.querySelector("#kennedy-offset");
  const utcOffsetTimeInHours = earthDate.getTimezoneOffset() / 60;
  const timeBetweenKennedyAndUtc = utcOffsetTimeInHours + 5;
  const kennedyOffset = document.createTextNode(timeBetweenKennedyAndUtc);
  kennedyOffsetTime.appendChild(kennedyOffset);
  const aheadOfKennedy = document.createTextNode(
    " hours ahead of Kennedy Space Center"
  );
  const behindKennedy = document.createTextNode(
    " hours ahead of Kennedy Space Center"
  );

  if (timeBetweenKennedyAndUtc > 0) {
    kennedyOffsetTime.appendChild(aheadOfKennedy);
  } else {
    kennedyOffsetTime.appendChild(behindKennedy);
  }
}

displayOffsetTimeToKennedySpaceCenter();
