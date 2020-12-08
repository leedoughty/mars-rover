const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const PRIVATE_KEY = require("../privateKey");

function getJwt(request) {
  if (request) {
    return request.cookies.jwt;
  }
  return false;
}

const jwtOptions = {
  jwtFromRequest: getJwt,
  secretOrKey: PRIVATE_KEY,
};

function passportConfiguration() {
  passport.use(
    new JwtStrategy(jwtOptions, (jwtPayload, done) => {
      const username = jwtPayload.username;
      const password = jwtPayload.password;
      if (username === "lee" && password === "marsrover") {
        done(false, jwtPayload);
      } else {
        done(false, false);
      }
    })
  );
}

module.exports = {
  passportConfiguration,
};
