const fetch = require("node-fetch");
const API_KEY = require("../apiKey");

const BASE_URL = "https://api.nasa.gov/planetary/apod";

const getPhotoOfTheDay = async (request, response, next) => {
  const url = `${BASE_URL}?api_key=${API_KEY}`;

  const apodResponse = await fetch(url).then((response) =>
    response.json().catch((error) => {
      console.log(error);
    })
  );

  response.json(apodResponse);
  next();
};

module.exports = { getPhotoOfTheDay };
