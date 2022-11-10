const WorkoutList = function (props) {
  return (
    <ul>
      {props.workouts.map((workout) => {
        return (
          <div key={workout.id}>
            <h2>{workout.workoutname}</h2>
          </div>
        );
      })}
    </ul>
  );
};

export default WorkoutList;
