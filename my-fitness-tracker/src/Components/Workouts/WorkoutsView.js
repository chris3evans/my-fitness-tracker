import Button from "../Button";
import WorkoutForm from "../Workouts/WorkoutForm";
import WorkoutList from "../Workouts/WorkoutList";
import StartingMessage from "../StartingMessage";
import { useState, useEffect } from "react";
const apiService = require("../../Utils/api-service");

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
    workoutDataHandler();
  };
  const workoutDataHandler = async function () {
    try {
      const workouts = await apiService.getAllWorkouts();
      setWorkoutData(workouts);
      return "retrieved all workouts";
    } catch (error) {
      console.log(error, "error getting all the workouts");
      return "failed to retrieve all workouts";
    }
  };

  return (
    <div className="workouts-view px-10 sm:px-5 py-20 sm:py-5">
      <h1 className="primary-heading">
        {enteringWorkout ? "Enter Workout" : "Your Workouts"}
      </h1>
      {enteringWorkout ? (
        ""
      ) : (
        <Button
          btnType="button"
          content="Add Workout"
          handler={enterWorkoutHandler}
          styles="button very-dark-green-gradient"
        ></Button>
      )}
      {workoutData.length === 0 ? (
        <StartingMessage message="You do not have any workouts yet. Click 'Add Workout' to get started!"></StartingMessage>
      ) : (
        ""
      )}
      {workoutData.length > 0 && !enteringWorkout ? (
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
    </div>
  );
};

export default WorkoutsView;
