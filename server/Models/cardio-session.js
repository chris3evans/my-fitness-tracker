const CardioSession = (sequelize, DataTypes) => {
  return sequelize.define("CardioSession", {
    maxspeed: {
      type: DataTypes.INTEGER,
      required: false,
    },
    sets: {
      type: DataTypes.INTEGER,
      required: false,
    },
    time: {
      type: DataTypes.INTEGER,
      required: false,
    },
  });
};

export default CardioSession;
