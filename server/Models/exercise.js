const Exercise = (sequelize, DataTypes) => {
  return sequelize.define("Exercise", {
    exercisename: { type: DataTypes.TEXT, required: false },
  });
};

export default Exercise;
