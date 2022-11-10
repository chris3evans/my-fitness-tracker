const ExerciseItem = function (props) {
  return (
    <>
      <button onClick={props.handler}>
        <h2 id={props.exerciseData.id}>{props.exerciseData.exercisename}</h2>
      </button>
    </>
  );
};

export default ExerciseItem;
