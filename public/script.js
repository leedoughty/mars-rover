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
  const aheadOfKennedy = document.createTextNode(
    `${timeBetweenKennedyAndUtc} hours ahead of Kennedy Space Center)`
  );
  const behindKennedy = document.createTextNode(
    `${timeBetweenKennedyAndUtc} hours behind of Kennedy Space Center)`
  );

  if (timeBetweenKennedyAndUtc > 0) {
    document.querySelector("#kennedy-offset").appendChild(aheadOfKennedy);
  } else {
    document.querySelector("#kennedy-offset").appendChild(behindKennedy);
  }
}

displayOffsetTimeToKennedySpaceCenter();
