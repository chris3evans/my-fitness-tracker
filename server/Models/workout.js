const Workout = (sequelize, DataTypes) => {
  return sequelize.define("Workout", {
    workoutname: { type: DataTypes.TEXT, required: true },
    workouttype: { type: DataTypes.TEXT, required: true },
  });
};

module.exports = Workout;
