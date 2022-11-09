const Session = (sequelize, DataTypes) => {
  return sequelize.define("Session", {
    maxweight: { type: DataTypes.INTEGER, required: false },
    si: { type: DataTypes.TEXT, required: false },
    sets: { type: DataTypes.INTEGER, required: false },
    reps: { type: DataTypes.INTEGER, required: false },
    date: { type: DataTypes.DATE, default: Date.now(), required: false },
  });
};

module.exports = Session;
