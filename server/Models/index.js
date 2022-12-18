const environment = require("../../my-fitness-tracker/src/Utils/environment.js");
// const url = process.env.NODE_ENV ? API_URL_PRODUCTION : API_URL_DEVELOPMENT;
const DATABASE_NAME = process.env.NODE_ENV
  ? process.env.DATABASE
  : environment.DATABASE_NAME;
const DATABASE_PASSWORD = process.env.NODE_ENV
  ? process.env.PASSWORD
  : environment.PASSWORD;
const HOST = process.env.NODE_ENV ? process.env.HOST : environment.HOST;
const PORT = process.env.NODE_ENV ? process.env.PORT : environment.PORT;
// Database name
// Database password
// Host name (local etc)
// Port number (5432)

const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const { env } = require("process");
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
