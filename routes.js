const express = require("express");

const router = express.Router();

router.use("/login", express.static("public/login.html"));

router.get("/photo", (request, response) => {
  response.send("Photo of the day");
});

router.get("/rover", (request, response) => {
  response.send("Mars rover");
});

module.exports = router;
