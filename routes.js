const express = require("express");
const { getPhotoOfTheDay } = require("./middleware/getPhotoOfTheDay");
const { checkUserCredentials } = require("./middleware/checkUserCredentials");
const { setUserJwt } = require("./middleware/setUserJwt");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/login", express.static("public/login.html"));

router.post("/authenticate", checkUserCredentials, setUserJwt);

router.get("/photo", getPhotoOfTheDay);

router.use("/rover", express.static("public/rover.html"));

module.exports = router;
