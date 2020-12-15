const { Users } = require("../database/databaseModel");
const bcrypt = require("bcrypt");

const registerUser = (request, response, next) => {
  const { username, password, email } = request.body;

  const saltRounds = 10;

  Users.create({ username, password, email })
    .then(() => {
      return bcrypt.hash(password, saltRounds);
    })
    .then((hash) => {
      Users.update({ password: hash }, { where: { username: username } });
    })
    .then(() => {
      next();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

module.exports = {
  registerUser,
};
