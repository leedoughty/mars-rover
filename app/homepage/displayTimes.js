const earthDate = new Date();

function displayCurrentEarthDate() {
  const dateText = document.createTextNode(earthDate.toLocaleString());
  document.querySelector("#earth-date").appendChild(dateText);
}

displayCurrentEarthDate();

function displayKennedySpaceCenterTime() {
  const kennedyTime = earthDate.toLocaleTimeString(undefined, {
    timeZone: "America/New_York",
  });
  const kennedyTimeText = document.createTextNode(kennedyTime);

  document.querySelector("#kennedy-time").appendChild(kennedyTimeText);
}

displayKennedySpaceCenterTime();

function displayOffsetTimeToKennedySpaceCenter() {
  const utcOffsetTimeInHours = earthDate.getTimezoneOffset() / 60;
  const timeBetweenKennedyAndUtc = utcOffsetTimeInHours + 5;
  const isAhead = timeBetweenKennedyAndUtc > 0;

  const timeBetweenKennedyandUtcText = document.createTextNode(
    `${timeBetweenKennedyAndUtc} hours ${
      isAhead ? "ahead" : "behind"
    } of Kennedy Space Center)`
  );

  document
    .querySelector("#kennedy-offset")
    .appendChild(timeBetweenKennedyandUtcText);
}

displayOffsetTimeToKennedySpaceCenter();
