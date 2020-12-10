const { Sequelize } = require("sequelize");
const { name, password } = require("./databaseCredentials");

const connectToDatabase = new Sequelize(name, "postgres", password, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = {
  connectToDatabase,
};
