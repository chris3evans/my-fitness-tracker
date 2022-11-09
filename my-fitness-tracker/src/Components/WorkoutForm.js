import { useState } from "react";
import Button from "./Button";

const WorkoutForm = function (props) {
  const [workoutNameField, setWorkoutNameField] = useState("");
  const [addExercises, setAddExercises] = useState("");

  const workoutNameChangeHandler = function (event) {
    setWorkoutNameField(event.target.value);
  };

  const enterExerciseHandler = function () {
    setAddExercises(true);
  };

  const submitWorkoutHander = function () {
    setAddExercises(false);
  };

  const workoutSubmitHandler = function (event) {
    event.preventDefault();

    const formData = {
      workoutname: event.target.workoutname.value,
    };
    console.log(formData, "workout name");

    setWorkoutNameField("");
  };

  return (
    <form onSubmit={workoutSubmitHandler}>
      <div onClick={props.navigate}>BACK BTN</div>
      <label htmlFor="workout-name">Workout Name:</label>
      <input
        type="text"
        name="workoutname"
        id="workout-name"
        placeholder="What is this workout called?"
        onChange={workoutNameChangeHandler}
        value={workoutNameField}
      ></input>

      <Button
        btnType="submit"
        content="Add Exercise"
        handler={enterExerciseHandler}
      ></Button>
      <Button
        btnType="submit"
        content="Create Workout (add exercises later)"
        handler={submitWorkoutHander}
      ></Button>
    </form>
  );
};

export default WorkoutForm;
