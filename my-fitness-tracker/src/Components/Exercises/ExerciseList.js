import ExerciseItem from "./ExerciseItem";
import SessionForm from "../Sessions/SessionForm";
import { useState } from "react";

const ExerciseList = function (props) {
  const [showSessionForm, setShowSessionForm] = useState(0);

  const toggleSessionFormHandler = function (event) {
    const exerciseId = +event.target.id;

    if (exerciseId === showSessionForm) {
      setShowSessionForm(0);
    } else {
      setShowSessionForm(exerciseId);
    }
  };

  return (
    <ul>
      {props.exercises.map((exercise) => {
        return (
          <div key={exercise.id}>
            <ExerciseItem
              handler={toggleSessionFormHandler}
              exerciseData={exercise}
            ></ExerciseItem>
            {showSessionForm === exercise.id ? (
              <SessionForm exerciseId={exercise.id}></SessionForm>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default ExerciseList;
