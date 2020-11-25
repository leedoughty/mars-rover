const express = require("express");

const router = express.Router();

router.use("/login", express.static("public/login.html"));

router.get("/photo", (request, response) => {
  response.send("Photo of the day");
});

router.use("/rover", express.static("public/rover.html"));

module.exports = router;
