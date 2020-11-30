const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
const passport = require("passport");

const { passportConfiguration } = require("./passportConfiguration");

passportConfiguration();

app.use(passport.initialize());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});
