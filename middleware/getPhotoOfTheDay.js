const fetch = require("node-fetch");
const API_KEY = require("../apiKey");
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const getPhotoOfTheDay = async (request, response, next) => {
  const url = `${BASE_URL}?api_key=${API_KEY}`;
  try {
    const apodResponse = await fetch(url);
    const apodJson = await apodResponse.json();
    response.json(apodJson);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPhotoOfTheDay };
