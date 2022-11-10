import Button from "../Button";
import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ExerciseList";
import Context from "../../Utils/context";
import { useContext, useState, useEffect } from "react";
const apiService = require("../../Utils/api-service");

const ExercisesView = function () {
  const data = useContext(Context);

  const [exerciseData, setExerciseData] = useState("");
  const [enteringExercise, setEnteringExercise] = useState(false);

  useEffect(() => {
    exerciseDataHandler();
  }, []);

  const enterAddExerciseHandler = function () {
    setEnteringExercise(true);
  };
  const leaveAddExerciseHandler = function (leave) {
    setEnteringExercise(leave);
  };

  const exerciseDataHandler = async function () {
    try {
      const exercises = await apiService.getAllExercises(data.curExercises);
      setExerciseData(exercises);
      return "retrieved all exercises";
    } catch (error) {
      console.log(error, "error getting all the exercises");
      return "failed to retrieve all exercises";
    }
  };

  return (
    <>
      <h1>{data.curWorkout}</h1>
      {!enteringExercise ? <div onClick={data.toggleView}>BACK BTN</div> : ""}
      {!enteringExercise ? (
        <Button
          btnType="button"
          content="Add Exercise"
          handler={enterAddExerciseHandler}
        ></Button>
      ) : (
        ""
      )}
      {enteringExercise ? (
        <ExerciseForm
          render={exerciseDataHandler}
          navigate={leaveAddExerciseHandler}
        ></ExerciseForm>
      ) : (
        ""
      )}
      {exerciseData.length > 0 && !enteringExercise ? (
        <ExerciseList exercises={exerciseData}></ExerciseList>
      ) : (
        ""
      )}
    </>
  );
};

export default ExercisesView;
