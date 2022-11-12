import WorkoutItem from "../Workouts/WorkoutItem";

const WorkoutList = function (props) {
  return (
    <div className="workout-container my-10 shadow-2xl">
      <ul>
        {props.workouts.map((workout) => {
          return (
            <WorkoutItem key={workout.id} workoutData={workout}></WorkoutItem>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkoutList;
