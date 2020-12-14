const { Users } = require("../database/databaseModel");
const bcrypt = require("bcrypt");

const registerUser = (request, response, next) => {
  const { username, password, email } = request.body;

  Users.create({ username, password, email })
    .then(() => {
      const saltRounds = 10;

      bcrypt.hash(password, saltRounds, (error, hash) => {
        Users.update(
          { password: hash },
          {
            where: {
              username: username,
            },
          }
        );
      });

      return next();
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

module.exports = {
  registerUser,
};
