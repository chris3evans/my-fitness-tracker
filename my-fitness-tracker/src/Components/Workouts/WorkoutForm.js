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
      workouttype: event.target.workouttype.value,
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
    <form className="form fade-in" onSubmit={workoutSubmitHandler}>
      {/* use aria label if using icon for back button */}
      <Button
        content="BACK BTN"
        styles="card-text cursor-pointer"
        handler={props.navigate}
        btnType="button"
      ></Button>
      <label className="form-label" htmlFor="workout-name">
        Workout Name:
      </label>
      <input
        className="form-input"
        type="text"
        name="workoutname"
        id="workout-name"
        placeholder="What is this workout called?"
        required
        autoComplete="off"
      ></input>
      <div className="workout-type">
        <input
          name="workouttype"
          id="resistance"
          type="radio"
          value="resistance"
          defaultChecked
          required
        ></input>
        <label htmlFor="resistance">Resitance</label>

        <input
          name="workouttype"
          id="cardio"
          type="radio"
          value="cardio"
          required
        ></input>
        <label htmlFor="cardio">Cardio</label>
      </div>
      <Button
        btnType="submit"
        content="Create Workout"
        handler={finishWorkoutHandler}
        styles="button"
      ></Button>
    </form>
  );
};

export default WorkoutForm;
