import { useState, useEffect, useContext } from "react";
import Button from "../Button";
import Icon from "../Icon";
import {
  postNewWorkout
} from '../../Utils/api-service';
// const apiService = require("../../Utils/api-service");

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
      await postNewWorkout(formData);
      props.navigate();
      return "Workout was saved";
    } catch (error) {
      console.log(error, "error in posting workout in form (client side)");
      return "Workout was not saved";
    }
  };

  return (
    <form
      className="workout-form-grid form fade-in w-4/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-1/2"
      onSubmit={workoutSubmitHandler}
    >
      <Icon
        description="left facing bold arrow"
        className="card-text text-dark cursor-pointer"
        onClick={props.navigate}
        icon="arrow-bold-left"
        size={30}
        color="black"
      ></Icon>
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
            ></input>
          </div>
          <label className="form-radio-label" htmlFor="resistance">
            Resistance
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
