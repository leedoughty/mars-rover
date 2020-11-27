const checkUserCredentials = (request, response) => {
  const { username, password } = request.body;

  if (username === "lee" && password === "marsrover") {
    response.redirect("/");
  } else {
    response.send("Sorry, incorrect credentials provided! please try again");
  }
};

module.exports = { checkUserCredentials };
