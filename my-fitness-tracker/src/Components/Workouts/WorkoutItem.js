import Context from "../../Utils/context";
import { useContext } from "react";

const WorkoutItem = function (props) {
  const data = useContext(Context);

  const workoutClickHandler = function (event) {
    // Know which workout has been clicked
    const workoutId = +event.target.id;

    // Know the type of workout which has been clicked
    const workoutType = event.target.dataset.type;
    data.setCurWorkoutType(workoutType);

    // Obtain the name of this workout
    data.getCurWorkout(props.workoutData.workoutname);

    // Stop rendering the workouts view
    // Render the exercises view
    data.toggleView();
    data.getCurExercises(workoutId);
  };

  return (
    <div className="workout-card fade-in green-gradient">
      <li onClick={workoutClickHandler}>
        <h2
          className="card-text-dark"
          data-type={props.workoutData.workouttype}
          id={props.workoutData.id}
        >
          {props.workoutData.workoutname}
        </h2>
      </li>
    </div>
  );
};

export default WorkoutItem;
