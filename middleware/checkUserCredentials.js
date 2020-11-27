const checkUserCredentials = (request, response, next) => {
  const { username, password } = request.body;

  if (username === "lee" && password === "marsrover") {
    return next();
  } else {
    response.send("Sorry, incorrect credentials provided! please try again");
  }
};

module.exports = { checkUserCredentials };
