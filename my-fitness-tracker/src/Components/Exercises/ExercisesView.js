import Button from "../Button";
import ExerciseForm from "./ExerciseForm";
import Context from "../../Utils/context";
import { useContext, useState } from "react";

const ExercisesView = function () {
  const data = useContext(Context);
  const [enteringExercise, setEnteringExercise] = useState(false);

  const enterAddExerciseHandler = function () {
    setEnteringExercise(true);
  };
  const leaveAddExerciseHandler = function (leave) {
    setEnteringExercise(leave);
  };

  return (
    <>
      <h1>{"Push Workout"}</h1>
      {!enteringExercise ? <div onClick={data.toggleView}>BACK BTN</div> : ""}
      {enteringExercise ? (
        <ExerciseForm navigate={leaveAddExerciseHandler}></ExerciseForm>
      ) : (
        ""
      )}
      {!enteringExercise ? (
        <Button
          btnType="button"
          content="Add Exercise"
          handler={enterAddExerciseHandler}
        ></Button>
      ) : (
        ""
      )}
    </>
  );
};

export default ExercisesView;
