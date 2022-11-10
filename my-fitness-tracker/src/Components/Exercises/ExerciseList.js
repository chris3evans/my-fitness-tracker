const ExerciseList = function (props) {
  return (
    <ul>
      {props.exercises.map((exercise) => {
        return (
          <li key={exercise.id}>
            <h2>{exercise.exercisename}</h2>
          </li>
        );
      })}
    </ul>
  );
};

export default ExerciseList;
