import Button from "../Button";
import apiService from "../../Utils/api-service";
// const apiService = require("../../Utils/api-service");

const SessionForm = function (props) {
  const sessionSubmitHandler = async function (event) {
    event.preventDefault();

    const formData = {
      maxweight: +event.target.maxweight.value,
      sets: +event.target.sets.value,
      reps: +event.target.reps.value,
      exerciseId: +props.exerciseId,
    };

    event.target.reset();

    try {
      await apiService.postNewSession(formData);
      props.submitSession(Math.random());
      props.showSessionForm(false);
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
    <form
      className="form-sessions session-form-grid"
      onSubmit={sessionSubmitHandler}
    >
      <div className="session-form-field session-form-field-grid">
        <label className="form-label-session" htmlFor="max-weight">
          Maximum Weight (kg):
        </label>
        <input
          className="form-input"
          type="number"
          required
          id="max-weight"
          name="maxweight"
        ></input>
      </div>

      <div className="session-form-field session-form-field-grid">
        <label className="form-label-session" htmlFor="sets">
          Sets:
        </label>
        <input
          className="form-input"
          type="number"
          required
          id="sets"
          name="sets"
        ></input>
      </div>

      <div className="session-form-field session-form-field-grid">
        <label className="form-label-session" htmlFor="reps">
          Repetitions:
        </label>
        <input
          className="form-input"
          type="number"
          required
          id="reps"
          name="reps"
        ></input>
      </div>

      <Button
        btnType="submit"
        content="Add Session"
        styles="button very-dark-green-gradient"
      ></Button>
    </form>
  );
};

export default SessionForm;
