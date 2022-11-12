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
    <div className="px-10 py-20">
      <h1 className="primary-heading">{data.curWorkout}</h1>
      {!enteringExercise ? (
        <Button
          styles="card-text cursor-pointer"
          content="BACK BTN"
          btnType="button"
          handler={data.toggleView}
        >
          BACK BTN
        </Button>
      ) : (
        ""
      )}
      {!enteringExercise ? (
        <Button
          btnType="button"
          content="Add Exercise"
          handler={enterAddExerciseHandler}
          styles="button"
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
    </div>
  );
};

export default ExercisesView;
