import Button from "../Button";
import { useState, useEffect } from "react";
const apiService = require("../../Utils/api-service");

const SessionForm = function (props) {
  const [addSession, setAddSession] = useState("");

  // useEffect(() => {
  //   props.renderSessions();
  // }, [addSession]);

  const finishSessionHandler = function () {
    setAddSession(true);
  };

  const sessionSubmitHandler = function (event) {
    event.preventDefault();

    const formData = {
      maxweight: +event.target.maxweight.value,
      sets: +event.target.sets.value,
      reps: +event.target.reps.value,
      exerciseId: +props.exerciseId,
    };
    console.log(formData, "session form data");

    event.target.reset();

    try {
      apiService.postNewSession(formData);
      finishSessionHandler();
      return "Session data was saved successfully";
    } catch (error) {
      console.error(
        error,
        "Error in saving session data to database (form/client-side)"
      );
      return "Error, session data was not saved (session form)";
    }
  };

  return (
    <form onSubmit={sessionSubmitHandler}>
      <label htmlFor="max-weight">Maximum Working Weight Reached:</label>
      <input type="number" required id="max-weight" name="maxweight"></input>

      <label htmlFor="sets">Sets:</label>
      <input type="number" required id="sets" name="sets"></input>

      <label htmlFor="reps">Repetitions:</label>
      <input type="number" required id="reps" name="reps"></input>

      <Button btnType="submit" content="Add Session"></Button>
    </form>
  );
};

export default SessionForm;
