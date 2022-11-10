import { useState } from "react";
import Button from "../Button";

const ExerciseForm = function (props) {
  const [exerciseNameField, setExerciseNameField] = useState("");
  const [exitForm, setExitForm] = useState(false);

  const exerciseNameFieldChangeHandler = function (event) {
    setExerciseNameField(event.target.value);
  };
  const exitFormHandler = function () {
    setExitForm(true);
    props.navigate(exitForm);
  };

  return (
    <form>
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
