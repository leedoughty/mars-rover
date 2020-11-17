const earthDayInMilliseconds = 24 * 60 * 60 * 1000;
const solDayInMilliseconds =
  earthDayInMilliseconds + 39 * 60 * 1000 + 35.244 * 1000;

function calculateSol() {
  const convertSol = solDayInMilliseconds / earthDayInMilliseconds;
  const marsRoverLandingDate = new Date(2012, 7, 6, 5, 17, 57);
  const timeSinceLandingInMilliseconds = Date.now() - marsRoverLandingDate;
  const earthDaysSinceMarsRoverLanded =
    timeSinceLandingInMilliseconds / earthDayInMilliseconds;
  const marsSols = Math.floor(earthDaysSinceMarsRoverLanded / convertSol);

  document
    .querySelector("#mars-sol")
    .append(`Current Mars Sols of the Mars Rover: ${marsSols}`);
}

calculateSol();

function displayEarthDaysSinceMarsRoverLanded() {
  const millisecondsSinceMarsRoverLanded =
    Date.now() - new Date(2012, 7, 6, 5, 17, 57).getTime();
  const roundedEarthDaysSinceMarsRoverLanded = Math.round(
    millisecondsSinceMarsRoverLanded / earthDayInMilliseconds
  );

  document
    .querySelector("#mars-rover-landing-date")
    .append(
      `The Mars Rover has been on Mars for ${roundedEarthDaysSinceMarsRoverLanded} days`
    );
}

displayEarthDaysSinceMarsRoverLanded();
