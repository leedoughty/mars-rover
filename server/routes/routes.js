const express = require("express");
const { getPhotoOfTheDay } = require("../middleware/getPhotoOfTheDay");
const { checkUserCredentials } = require("../middleware/checkUserCredentials");
const { setUserJwt } = require("../middleware/setUserJwt");
const { getUsername } = require("../middleware/getUsername");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/login", express.static("app/login"));
router.use("/register", express.static("app/register"));

router.post("/authenticate", checkUserCredentials, setUserJwt);

router.post("/register", (request, response) => {
  response.status(201);
  response.send("user registered");
});

router.get("/username", getUsername);

router.get("/photo", getPhotoOfTheDay);

router.use("/rover", express.static("app/rover-map"));

module.exports = router;
