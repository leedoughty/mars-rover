const { Sequelize } = require("sequelize");
const { name, password } = require("./databaseCredentials");

const connectToDatabase = new Sequelize(name, "postgres", password, {
  host: "localhost",
  dialect: "postgres",
});

connectToDatabase.authenticate();

const Users = connectToDatabase.define(
  "users",
  {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  Users,
};
