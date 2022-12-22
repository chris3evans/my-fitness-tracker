const db = require("../Models/index");
// import db from "../Models/index";

const addNewWorkout = async function (req, res) {
  try {
    const workoutData = req.body;
    const workout = await db.Workout.create(workoutData);

    res.send(workout);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error, "Error in saving a new workout to database (server side)");
  }
};

const getAllWorkouts = async function (req, res) {
  try {
    const allWorkouts = await db.Workout.findAll();
    res.send(allWorkouts);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(
      error,
      "Error in getting all the workouts from the database (server side)"
    );
  }
};

module.exports = { addNewWorkout, getAllWorkouts };
