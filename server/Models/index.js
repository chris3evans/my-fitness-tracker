const environment = require("../../my-fitness-tracker/src/Utils/environment.js");

const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const db = {};

const sequelize = new Sequelize(
  environment.DATABASE_NAME,
  "postgres",
  environment.PASSWORD,
  {
    host: environment.HOST,
    port: environment.PORT,
    dialect: "postgres",
    logging: false,
  }
);

const files = fs.readdirSync(__dirname);

for (let file of files) {
  if (file !== "index.js") {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  }
}

db.Workout.hasMany(db.Exercise);
db.Exercise.belongsTo(db.Workout);

db.Exercise.hasMany(db.Session);
db.Session.belongsTo(db.Exercise);

db.Exercise.hasMany(db.CardioSession);
db.CardioSession.belongsTo(db.Exercise);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
