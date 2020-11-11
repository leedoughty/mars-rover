const express = require("express");

const router = express.Router();

router.get("/photo", (request, response) => {
  response.send("Photo of the day");
});

module.exports = router;
