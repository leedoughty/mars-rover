const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const PRIVATE_KEY = require("./privateKey");
const { Users } = require("./database/databaseModel");

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

      Users.findAll({
        where: {
          username: username,
          password: password,
        },
      })
        .then((databaseResponse) => {
          if (databaseResponse[0]) {
            return done(false, jwtPayload);
          } else {
            return done(false, false);
          }
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    })
  );
}

module.exports = {
  passportConfiguration,
};
