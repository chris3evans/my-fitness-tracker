const express = require("express");
const router = express.Router();
const WorkoutControllers = require("./workout-controller");

router.post("/add-workout", WorkoutControllers.addNewWorkout);

module.exports = router;
