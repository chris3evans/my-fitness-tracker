const Workout = (sequelize, DataTypes) => {
  // return the model when this function is required
  return sequelize.define("Workout", {
    workoutname: { type: DataTypes.TEXT, required: true },
    workouttype: { type: DataTypes.TEXT, required: true },
  });
};

module.exports = Workout;
