const db = require("./Models/index");

const addNewWorkout = async function (req, res) {
  try {
    console.log(req.body);
    const workoutData = req.body;

    const workout = await db.Workout.create(workoutData);

    res.send(workout);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error, "Error in saving a new workout to database (server side)");
  }
};

module.exports = { addNewWorkout };
