const express = require("express");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const router = require("./server/routes/routes");
const { passportConfiguration } = require("./server/passportConfiguration");

const app = express();
const port = 3000;

passportConfiguration();

app.use(passport.initialize());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/app"));
app.use(express.static("app/homepage"));

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
