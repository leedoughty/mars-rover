const jwtDecode = require("jwt-decode");

const getUsername = (request, response, next) => {
  const token = request.cookies.jwt;
  const { username } = jwtDecode(token);
  response.json({ username });
};

module.exports = { getUsername };
