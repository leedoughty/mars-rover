const bcrypt = require("bcrypt");
const { Users } = require("../database/databaseModel");

const checkUserCredentials = (request, response, next) => {
  const { username, password } = request.body;

  Users.findAll({
    where: {
      username: username,
    },
  })
    .then((databaseResponse) => {
      if (databaseResponse[0]) {
        return bcrypt.compare(password, databaseResponse[0].password);
      } else {
        response.redirect("/login");
      }
    })
    .then((match) => {
      if (match) {
        return next();
      } else {
        response.redirect("/login");
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

module.exports = { checkUserCredentials };
