import { useState } from "react";

const WorkoutForm = function (props) {
  return (
    <form>
      <div onClick={props.navigate}>BACK BTN</div>
      <label for="workout-name">Workout Name:</label>
      <input
        type="text"
        id="workout-name"
        placeholder="What is this workout called?"
      ></input>
    </form>
  );
};

export default WorkoutForm;
