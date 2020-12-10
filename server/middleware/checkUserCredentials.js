const { Users } = require("../database/databaseModel");

const checkUserCredentials = (request, response, next) => {
  const { username, password } = request.body;

  Users.findAll({
    where: {
      username: username,
      password: password,
    },
  })
    .then((databaseResponse) => {
      if (databaseResponse[0]) {
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
