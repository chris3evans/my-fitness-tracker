const express = require("express");
const router = express.Router();
const WorkoutControllers = require("./Controllers/workout-controller");
const ExerciseControllers = require("./Controllers/exercise-controller");

router.post("/add-workout", WorkoutControllers.addNewWorkout);
router.get("/workouts", WorkoutControllers.getAllWorkouts);

router.post("/add-exercise", ExerciseControllers.addNewWorkout);

module.exports = router;
