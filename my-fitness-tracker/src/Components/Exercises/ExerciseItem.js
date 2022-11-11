import Context from "../../Utils/context";
import { useContext, useState } from "react";
import SessionForm from "../Sessions/SessionForm";

const ExerciseItem = function (props) {
  const data = useContext(Context);
  const [showSessionForm, setShowSessionForm] = useState(0);

  const exerciseClickHandler = function (event) {
    const exerciseId = +event.target.id;
    console.log(exerciseId);

    if (exerciseId === showSessionForm) {
      setShowSessionForm(0);
    } else {
      setShowSessionForm(exerciseId);
    }

    data.getCurExercise(exerciseId);
  };

  return (
    <>
      <li onClick={exerciseClickHandler}>
        <h2 id={props.exerciseData.id}>{props.exerciseData.exercisename}</h2>
        {showSessionForm === props.exerciseData.id ? (
          <SessionForm exerciseId={props.exerciseData.id}></SessionForm>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default ExerciseItem;
