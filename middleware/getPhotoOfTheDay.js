const fetch = require("node-fetch");
const API_KEY = require("../apiKey");
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error("error");
  }
};

const getPhotoOfTheDay = async (request, response, next) => {
  const url = `${BASE_URL}?api_key=${API_KEY}`;
  try {
    const apodResponse = await fetch(url).then(checkStatus);
    const apodJson = await apodResponse.json();
    response.json(apodJson);
  } catch (error) {
    return response.status(500).json({ error: error.toString() });
  }
};

module.exports = { getPhotoOfTheDay };
