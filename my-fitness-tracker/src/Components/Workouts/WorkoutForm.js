import { useState, useEffect } from "react";
import Button from "../Button";
const apiService = require("../../Utils/api-service");

const WorkoutForm = function (props) {
  const [workoutNameField, setWorkoutNameField] = useState("");
  const [addWorkout, setAddWorkout] = useState("");

  useEffect(() => {
    props.render();
  }, [addWorkout]);

  const workoutNameChangeHandler = function (event) {
    setWorkoutNameField(event.target.value);
  };
  // const enterExerciseHandler = function () {
  //   setAddExercises(true);
  // };
  const finishWorkoutHandler = function () {
    setAddWorkout(true);
  };

  const workoutSubmitHandler = async function (event) {
    event.preventDefault();

    const formData = {
      workoutname: event.target.workoutname.value,
    };

    try {
      await apiService.postNewWorkout(formData);
      props.navigate();
      setWorkoutNameField("");
      return "Workout was saved";
    } catch (error) {
      console.log(error, "error in posting workout in form (client side)");
      return "Workout was not saved";
    }
  };

  return (
    <form onSubmit={workoutSubmitHandler}>
      {/* use aria label if using icon for back button */}
      <div onClick={props.navigate}>BACK BTN</div>
      <label htmlFor="workout-name">Workout Name:</label>
      <input
        type="text"
        name="workoutname"
        id="workout-name"
        placeholder="What is this workout called?"
        onChange={workoutNameChangeHandler}
        value={workoutNameField}
        required
      ></input>

      {/* <Button
        btnType="submit"
        content="Add Exercise"
        handler={enterExerciseHandler}
      ></Button> */}
      <Button
        btnType="submit"
        content="Create Workout"
        handler={finishWorkoutHandler}
      ></Button>
    </form>
  );
};

export default WorkoutForm;
