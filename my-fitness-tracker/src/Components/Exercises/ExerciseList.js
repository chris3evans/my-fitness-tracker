import ExerciseItem from "./ExerciseItem";
import { useState } from "react";

const ExerciseList = function (props) {
  const [clickedExercise, setClickedExercise] = useState("");
  // const [showSessionForm, setShowSessionForm] = useState(false);

  const onClickHandler = function (event) {
    const clickedExerciseId = +event.target.id;
    setClickedExercise(clickedExerciseId);
  };

  return (
    <ul className="px-20 py-20">
      {props.exercises.map((exercise) => {
        return (
          <div key={exercise.id}>
            <ExerciseItem
              exerciseData={exercise}
              exerciseId={exercise.id}
              selectedExerciseId={clickedExercise}
              handler={onClickHandler}
              // showForm={showSessionForm}
            ></ExerciseItem>
          </div>
        );
      })}
    </ul>
  );
};

export default ExerciseList;
