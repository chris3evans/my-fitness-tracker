import Button from "../Button";
import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ExerciseList";
import MeasurementUnits from "./MeasurementUnits";
import CardioTimeUnit from "./CardioTimeUnit";
import StartingMessage from "../StartingMessage";
import Icon from "../Icon";
import Context from "../../Utils/context";
import { useContext, useState, useEffect } from "react";
import {
  getAllExercises
} from '../../Utils/api-service';

const ExercisesView = function () {
  const data = useContext(Context);

  const [exerciseData, setExerciseData] = useState("");
  const [enteringExercise, setEnteringExercise] = useState(false);
  const [useKg, setUseKg] = useState(true);
  const [useSeconds, setUseSeconds] = useState(true);

  useEffect(() => {
    exerciseDataHandler();
  }, []);

  const enterAddExerciseHandler = function () {
    setEnteringExercise(true);
  };
  const leaveAddExerciseHandler = function (leave) {
    setEnteringExercise(leave);
    exerciseDataHandler();
  };

  const exerciseDataHandler = async function () {
    try {
      const exercises = await getAllExercises(data.curExercises);
      setExerciseData(exercises);
      return "retrieved all exercises";
    } catch (error) {
      console.log(error, "error getting all the exercises");
      return "failed to retrieve all exercises";
    }
  };

  return (
    <>
      <h1 className="primary-heading">{data.curWorkout}</h1>
      <div className="exercise-buttons">
        {!enteringExercise ? (
          <div className="flex justify-center">
            <Icon
              description="left facing bold arrow"
              className="card-text text-dark cursor-pointer"
              onClick={data.toggleView}
              icon="arrow-bold-left"
              size={30}
              color="black"
            ></Icon>
          </div>
        ) : (
          ""
        )}
        {!enteringExercise ? (
          <Button
            btnType="button"
            content="Add Exercise"
            handler={enterAddExerciseHandler}
            styles="button very-dark-green-gradient"
          ></Button>
        ) : (
          ""
        )}
        {exerciseData.length === 0 ? (
          <StartingMessage message="This workout does not have any exercises. Click 'Add Exercise' to add one!"></StartingMessage>
        ) : (
          ""
        )}
        {!enteringExercise && data.curWorkoutType === "cardio" ? (
          <CardioTimeUnit
            changeTime={setUseSeconds}
            useSecs={useSeconds}
          ></CardioTimeUnit>
        ) : (
          ""
        )}
        {!enteringExercise ? (
          <MeasurementUnits
            changeSi={setUseKg}
            useKg={useKg}
          ></MeasurementUnits>
        ) : (
          ""
        )}
      </div>
      <div className="exercises-view px-10 py-10">
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
    </>
  );
};

export default ExercisesView;
