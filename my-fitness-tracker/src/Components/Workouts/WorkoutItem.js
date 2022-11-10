import Context from "../../Utils/context";
import { useContext, useState } from "react";

const WorkoutItem = function (props) {
  const data = useContext(Context);

  const workoutClickHandler = function (event) {
    // Know which workout has been clicked
    const workoutId = +event.target.id;

    // Stop rendering the workouts view
    // Render the exercises view
    data.toggleView();
    data.getCurExercises(workoutId);
  };

  return (
    <li onClick={workoutClickHandler}>
      <h2 id={props.workoutData.id}>{props.workoutData.workoutname}</h2>
    </li>
  );
};

export default WorkoutItem;
