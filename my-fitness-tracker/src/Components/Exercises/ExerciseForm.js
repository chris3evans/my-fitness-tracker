import { useState, useContext } from "react";
import Button from "../Button";
import Context from "../../Utils/context";
const apiService = require("../../Utils/api-service");

const ExerciseForm = function (props) {
  const data = useContext(Context);
  const [exerciseNameField, setExerciseNameField] = useState("");
  const [exitForm, setExitForm] = useState(false);

  const exerciseNameFieldChangeHandler = function (event) {
    setExerciseNameField(event.target.value);
  };
  const exitFormHandler = function () {
    setExitForm(true);
    props.navigate(exitForm);
  };

  const exerciseSubmitHandler = async function (event) {
    event.preventDefault();
    const formData = {
      exercisename: event.target.exercisename.value,
      workoutId: data.curExercises,
    };

    try {
      await apiService.postNewExercise(formData);
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
        value={exerciseNameField}
        onChange={exerciseNameFieldChangeHandler}
      ></input>
      <Button btnType="submit" content="Save Exercise To Workout"></Button>
    </form>
  );
};

export default ExerciseForm;
