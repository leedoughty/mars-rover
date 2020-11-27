const checkUserCredentials = (request, response) => {
  const { username, password } = request.body;

  if (username === "lee" && password === "marsrover") {
    response.send("You are now signed in");
  } else {
    response.send("Sorry, incorrect credentials provided! please try again");
  }
};

module.exports = { checkUserCredentials };
