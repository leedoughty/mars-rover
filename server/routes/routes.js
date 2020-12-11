const express = require("express");
const passport = require("passport");

const { getPhotoOfTheDay } = require("../middleware/getPhotoOfTheDay");
const { checkUserCredentials } = require("../middleware/checkUserCredentials");
const { setUserJwt } = require("../middleware/setUserJwt");
const { getUsername } = require("../middleware/getUsername");
const { registerUser } = require("../middleware/registerUser");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/login", express.static("app/login"));
router.use("/register", express.static("app/register"));

router.post("/authenticate", checkUserCredentials, setUserJwt);

router.post("/register", registerUser, setUserJwt);

router.get("/username", getUsername);

router.get("/photo", getPhotoOfTheDay);

router.use(
  "/rover",
  passport.authenticate("jwt", { session: false, failureRedirect: "/login" }),
  express.static("app/rover-map")
);

module.exports = router;
