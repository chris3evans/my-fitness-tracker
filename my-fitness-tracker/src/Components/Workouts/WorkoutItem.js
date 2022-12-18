import Context from "../../Utils/context";
import { useContext } from "react";

const WorkoutItem = function (props) {
  const data = useContext(Context);

  const workoutClickHandler = function (event) {
    const workoutId = +event.target.id;

    const workoutType = event.target.dataset.type;

    data.setCurWorkoutType(workoutType);

    data.getCurWorkout(props.workoutData.workoutname);

    data.toggleView();

    data.getCurExercises(workoutId);
  };

  return (
    <div key={props.key} className="workout-card fade-in green-gradient">
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
