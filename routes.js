const express = require("express");
const { getPhotoOfTheDay } = require("./middleware/getPhotoOfTheDay");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/login", express.static("public/login.html"));

router.post("/authenticate", (request, response) => {
  response.send(request.body);
});

router.get("/photo", getPhotoOfTheDay);

router.use("/rover", express.static("public/rover.html"));

module.exports = router;
