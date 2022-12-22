const Session = (sequelize, DataTypes) => {
  return sequelize.define("Session", {
    maxweight: { type: DataTypes.INTEGER, required: false },
    sets: { type: DataTypes.INTEGER, required: false },
    reps: { type: DataTypes.INTEGER, required: false },
  });
};

module.exports = Session;
