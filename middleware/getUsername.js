const jwtDecode = require("jwt-decode");

const getUsername = (request, response, next) => {
  if (request.cookies.jwt) {
    const token = request.cookies.jwt;
    const { username } = jwtDecode(token);
    response.json({ username });
  } else {
    response.json({ isSignedIn: false });
  }
};

module.exports = { getUsername };
