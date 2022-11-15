import WorkoutItem from "../Workouts/WorkoutItem";

const WorkoutList = function (props) {
  return (
    <div className="workout-container my-10 shadow-2xl w-1/2 md:w-3/4 sm:w-full">
      <ul>
        {[...props.workouts].reverse().map((workout) => {
          return (
            <WorkoutItem key={workout.id} workoutData={workout}></WorkoutItem>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkoutList;
