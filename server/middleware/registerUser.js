const { Users } = require("../database/databaseModel");

const registerUser = (request, response, next) => {
  const { username, password, email } = request.body;

  Users.create({ username, password, email })
    .then(() => {
      return next();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

module.exports = {
  registerUser,
};
