import Button from "./Button";
import WorkoutForm from "./WorkoutForm";
import { useState } from "react";

const WorkoutsView = function () {
  const [enteringWorkout, setEnteringWorkout] = useState(false);

  const enterWorkoutHandler = function () {
    setEnteringWorkout(true);
  };
  const exitWorkoutHandler = function () {
    setEnteringWorkout(false);
  };

  return (
    <>
      <h1>{enteringWorkout ? "Enter Workout" : "Your Workouts"}</h1>
      {/* Either render message if no workouts or render list of created workouts */}
      {enteringWorkout ? (
        ""
      ) : (
        <Button
          btnType="button"
          content="Add Workout"
          handler={enterWorkoutHandler}
        ></Button>
      )}
      {enteringWorkout ? (
        <WorkoutForm navigate={exitWorkoutHandler}></WorkoutForm>
      ) : (
        ""
      )}
    </>
  );
};

export default WorkoutsView;
