const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Exercise = require("./exercise");

const Workout = sequelize.define("Workout", {
  workoutname: { type: DataTypes.STRING, required: true },
});

// Establish relationship between Workout and Exercise
Workout.hasMany(Exercise);
Topic.belongsTo(Workout);

module.exports = Workout;
