const Sequelize = require("sequelize");

const sequelize = new Sequelize("workouts", "postgres", "12345", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

module.exports = sequelize;
