const db = require("../Models/index");

const addNewWorkout = async function (req, res) {
  try {
    const exerciseData = req.body;
    const exercise = await db.Exercise.create({
      ...exerciseData,
      WorkoutId: exerciseData.workoutId,
    });

    res.send(exercise);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json("Error in saving a exercise to database (server side)");
  }
};

module.exports = { addNewWorkout };
