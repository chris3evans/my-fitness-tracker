import { useState, useContext, useEffect } from "react";
import Button from "../Button";
import Context from "../../Utils/context";
const apiService = require("../../Utils/api-service");

const ExerciseForm = function (props) {
  const data = useContext(Context);
  const [exitForm, setExitForm] = useState(false);
  const [addExercise, setAddExercise] = useState("");

  useEffect(() => {
    props.render();
  }, [addExercise]);

  const exitFormHandler = function () {
    setExitForm(true);
    props.navigate(exitForm);
  };

  const finishExerciseHandler = function () {
    setAddExercise(true);
  };

  const exerciseSubmitHandler = async function (event) {
    event.preventDefault();
    const formData = {
      exercisename: event.target.exercisename.value,
      workoutId: data.curExercises,
    };

    event.target.reset();

    try {
      await apiService.postNewExercise(formData);
      props.navigate();
      return "Exercise was not saved";
    } catch (error) {
      console.log(error, "error in posting new exercise (client side)");
      return "Exercise was not saved";
    }
  };

  return (
    <form onSubmit={exerciseSubmitHandler}>
      <div onClick={exitFormHandler}>BACK BTN2</div>
      <label htmlFor="exercise-name">Exercise Name:</label>
      <input
        id="exercise-name"
        name="exercisename"
        placeholder="What is this exercise called?"
        type="text"
        required
      ></input>
      <Button
        btnType="submit"
        content="Save Exercise To Workout"
        handler={finishExerciseHandler}
      ></Button>
    </form>
  );
};

export default ExerciseForm;