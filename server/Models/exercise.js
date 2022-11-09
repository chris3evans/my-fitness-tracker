const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Exercise = sequelize.define("Exercise", {
  exercisename: { type: DataTypes, required: false },
});

module.exports = Exercise;
