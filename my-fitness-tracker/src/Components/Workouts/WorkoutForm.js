import { useState, useEffect } from "react";
import Button from "../Button";
const apiService = require("../../Utils/api-service");

const WorkoutForm = function (props) {
  const [addWorkout, setAddWorkout] = useState("");

  useEffect(() => {
    props.render();
  }, [addWorkout]);

  const finishWorkoutHandler = function () {
    setAddWorkout(true);
  };

  const workoutSubmitHandler = async function (event) {
    event.preventDefault();

    const formData = {
      workoutname: event.target.workoutname.value,
    };

    event.target.reset();

    try {
      await apiService.postNewWorkout(formData);
      props.navigate();
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
