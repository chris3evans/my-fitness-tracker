const express = require("express");
const router = express.Router();
const WorkoutControllers = require("./Controllers/workout-controller");
const ExerciseControllers = require("./Controllers/exercise-controller");
const SessionControllers = require("./Controllers/session-controller");
const CardioSessionControllers = require("./Controllers/cardioSession-controller");

router.post("/add-workout", WorkoutControllers.addNewWorkout);
router.get("/workouts", WorkoutControllers.getAllWorkouts);

router.post("/add-exercise", ExerciseControllers.addNewExercise);
router.get("/exercises/:workoutId", ExerciseControllers.getAllExercises);

router.post("/add-session", SessionControllers.addNewSession);
router.get("/sessions/:exerciseId", SessionControllers.getAllSessions);

router.post(
  "/add-cardio-session",
  CardioSessionControllers.addNewCardioSession
);
router.get(
  "/cardio-sessions/:exerciseId",
  CardioSessionControllers.getAllCardioSessions
);

module.exports = router;
