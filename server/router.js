const express = require("express");
const router = express.Router();
const WorkoutControllers = require("./Controllers/workout-controller");

router.post("/add-workout", WorkoutControllers.addNewWorkout);
router.get("/workouts", WorkoutControllers.getAllWorkouts);

module.exports = router;
