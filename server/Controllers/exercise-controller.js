const db = require("../Models/index");

const addNewExercise = async function (req, res) {
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

const getAllExercises = async function (req, res) {
  try {
    const workoutId = req.url.split("/").pop();
    const allExercises = await db.Exercise.findAll({
      where: { WorkoutId: workoutId },
    });
    res.send(allExercises);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json("Error in retrieving the exercises (server side)");
  }
};

module.exports = { addNewExercise, getAllExercises };
