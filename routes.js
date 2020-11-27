const express = require("express");
const { getPhotoOfTheDay } = require("./middleware/getPhotoOfTheDay");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/login", express.static("public/login.html"));

router.post(
  "/authenticate",
  (request, response, next) => {
    const { username, password } = request.body;

    if (username === "lee" && password === "marsrover") {
      console.log("your in!");
      next();
    } else {
      console.log("incorrect credentials");
      response.send("Sorry, incorrect username and password provided");
    }
  },
  (request, response) => {
    response.send("you are now signed in");
  }
);

router.get("/photo", getPhotoOfTheDay);

router.use("/rover", express.static("public/rover.html"));

module.exports = router;
