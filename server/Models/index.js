require("dotenv").config();
const environment = require("../../my-fitness-tracker/src/Utils/environment.js");
const DATABASE_NAME = process.env.NODE_ENV
  ? process.env.DB_NAME
  : environment.DATABASE_NAME;
const DATABASE_PASSWORD = process.env.NODE_ENV
  ? process.env.DB_PASSWORD
  : environment.PASSWORD;
const HOST = process.env.NODE_ENV ? process.env.DB_HOST : environment.HOST;
const PORT = process.env.NODE_ENV ? process.env.PORT : environment.PORT;

const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const db = {};

const sequelize = new Sequelize(DATABASE_NAME, "postgres", DATABASE_PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: "postgres",
  logging: false,
});

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
