const express = require("express");
const passport = require("passport");
const { getPhotoOfTheDay } = require("./middleware/getPhotoOfTheDay");
const { checkUserCredentials } = require("./middleware/checkUserCredentials");
const { setUserJwt } = require("./middleware/setUserJwt");
const { getUsername } = require("./middleware/getUsername");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/login", express.static("public/login.html"));

router.post("/authenticate", checkUserCredentials, setUserJwt);

router.get(
  "/username",
  passport.authenticate("jwt", { session: false }),
  getUsername
);

router.get("/photo", getPhotoOfTheDay);

router.use("/rover", express.static("public/rover.html"));

module.exports = router;
