const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const db = {};

const sequelize = new Sequelize("workouts", "postgres", "12345", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

// Get all files from Model folder
const files = fs.readdirSync(__dirname);

// Loop over each file
for (let file of files) {
  // ignore index.js
  if (file !== "index.js") {
    // For each model file, require a function which creates the model and then call it with sequelize + Sequelize.DataTypes to get the resultant model
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    // Store each model on db object
    // db["Workout"] = model created above
    db[model.name] = model;
  }
}

db.Workout.hasMany(db.Exercise);
db.Exercise.belongsTo(db.Workout);

db.Exercise.hasMany(db.Session);
db.Session.belongsTo(db.Exercise);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
