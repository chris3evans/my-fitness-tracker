import WorkoutItem from "../Workouts/WorkoutItem";

const WorkoutList = function (props) {
  return (
    <ul>
      {props.workouts.map((workout) => {
        return (
          <WorkoutItem key={workout.id} workoutData={workout}></WorkoutItem>
        );
      })}
    </ul>
  );
};

export default WorkoutList;
