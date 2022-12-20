require("dotenv").config({
  path: "../../.env",
});

console.log("process env", JSON.stringify(process.env));

// const DB_NAME =
//   process.env.NODE_ENV === "production"
//     ? process.env.DB_NAME_PROD
//     : process.env.DB_NAME_DEV;

// const DB_PASSWORD =
//   process.env.NODE_ENV === "production"
//     ? process.env.DB_PASSWORD_PROD
//     : process.env.DB_PASSWORD_DEV;

// const DB_HOST =
//   process.env.NODE_ENV === "production"
//     ? process.env.DB_HOST_PROD
//     : process.env.DB_HOST_DEV;

const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
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
