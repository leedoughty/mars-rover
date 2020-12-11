const { Users } = require("../database/databaseModel");

const registerUser = (request, response, next) => {
  // incrementing (never clash but can be guessed)

  const fourByteIntegerLimit = 2147483647;

  const generateRandomInteger = () => {
    return Math.floor(Math.random() * fourByteIntegerLimit);
  };

  const { username, password, email } = request.body;

  Users.create({ username, password, email, id: generateRandomInteger() })
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
