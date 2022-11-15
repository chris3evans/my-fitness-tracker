import { useState, useEffect, useContext } from "react";
import Button from "../Button";
// import Context from "../../Utils/context";
const apiService = require("../../Utils/api-service");

const WorkoutForm = function (props) {
  // const data = useContext(Context);
  const [addWorkout, setAddWorkout] = useState("");

  // const workoutTypeChangeHandler = function (event) {
  //   data.setCurSelectedWorkoutType(event.target.value);
  // };

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
    <form
      className="workout-form-grid form fade-in w-4/12"
      onSubmit={workoutSubmitHandler}
    >
      {/* use aria label if using icon for back button */}
      <Button
        content="return"
        styles="card-text cursor-pointer"
        handler={props.navigate}
        btnType="button"
      ></Button>
      <div className="form-field">
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
      </div>
      <div className="form-workout-type">
        <div className="form-radio-field">
          <div className="form-radio-container">
            <input
              className="form-radio-input"
              name="workouttype"
              id="resistance"
              type="radio"
              value="resistance"
              defaultChecked
              required
              // onChange={workoutTypeChangeHandler}
            ></input>
          </div>
          <label className="form-radio-label" htmlFor="resistance">
            Resitance
          </label>
        </div>

        <div className="form-radio-field">
          <div className="form-radio-container">
            <input
              className="form-radio-input"
              name="workouttype"
              id="cardio"
              type="radio"
              value="cardio"
              required
              // onChange={workoutTypeChangeHandler}
            ></input>
          </div>
          <label className="form-radio-label" htmlFor="cardio">
            Cardio
          </label>
        </div>
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
