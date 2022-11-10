import Button from "./Button";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";
import { useState, useEffect } from "react";
const apiService = require("../Utils/api-service");

const WorkoutsView = function () {
  useEffect(() => {
    workoutDataHandler();
  }, []);

  const [workoutData, setWorkoutData] = useState("");
  const [enteringWorkout, setEnteringWorkout] = useState(false);

  const enterWorkoutHandler = function () {
    setEnteringWorkout(true);
  };
  const exitWorkoutHandler = function () {
    setEnteringWorkout(false);
  };
  const workoutDataHandler = async function () {
    try {
      const workouts = await apiService.getAllWorkouts();
      setWorkoutData(workouts);
      return "retrieved all workouts";
    } catch (error) {
      console.log(error, "error getting all the workouts");
      return "failed to retrieved all workouts";
    }
  };

  return (
    <>
      <h1>{enteringWorkout ? "Enter Workout" : "Your Workouts"}</h1>
      {enteringWorkout ? (
        ""
      ) : (
        <Button
          btnType="button"
          content="Add Workout"
          handler={enterWorkoutHandler}
        ></Button>
      )}
      {workoutData.length > 0 ? (
        <WorkoutList workouts={workoutData}></WorkoutList>
      ) : (
        ""
      )}
      {enteringWorkout ? (
        <WorkoutForm
          render={workoutDataHandler}
          navigate={exitWorkoutHandler}
        ></WorkoutForm>
      ) : (
        ""
      )}
    </>
  );
};

export default WorkoutsView;
