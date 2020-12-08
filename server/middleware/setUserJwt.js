const jwt = require("jsonwebtoken");
const PRIVATE_KEY = require("../../privateKey");

const setUserJwt = (request, response) => {
  const { username, password } = request.body;
  const jsonWebToken = jwt.sign({ username, password }, PRIVATE_KEY);

  response.cookie("jwt", jsonWebToken);
  response.redirect("/");
};

module.exports = { setUserJwt };
