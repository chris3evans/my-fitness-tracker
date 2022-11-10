const express = require("express");
const router = express.Router();
const WorkoutControllers = require("./Controllers/workout-controller");
const ExerciseControllers = require("./Controllers/exercise-controller");
const SessionControllers = require("./Controllers/session-controller");

router.post("/add-workout", WorkoutControllers.addNewWorkout);
router.get("/workouts", WorkoutControllers.getAllWorkouts);

router.post("/add-exercise", ExerciseControllers.addNewWorkout);
router.get("/exercises/:workoutId", ExerciseControllers.getAllExercises);

router.post("/add-session", SessionControllers.addNewSession);

module.exports = router;