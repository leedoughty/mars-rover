const logOut = (request, response, next) => {
  response.clearCookie("jwt");
  response.redirect("/");
};

module.exports = {
  logOut,
};
