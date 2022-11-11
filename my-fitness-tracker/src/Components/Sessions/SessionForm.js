import Button from "../Button";
const apiService = require("../../Utils/api-service");

const SessionForm = function (props) {
  const sessionSubmitHandler = async function (event) {
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
      await apiService.postNewSession(formData);
      props.submitSession(Math.random());
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
    <form className="form-sessions" onSubmit={sessionSubmitHandler}>
      <div className="form-field">
        <label className="form-label" htmlFor="max-weight">
          Maximum Working Weight Reached:
        </label>
        <input
          className="form-input"
          type="number"
          required
          id="max-weight"
          name="maxweight"
        ></input>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="sets">
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

      <div className="form-field">
        <label className="form-label" htmlFor="reps">
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

      <Button btnType="submit" content="Add Session" styles="button"></Button>
    </form>
  );
};

export default SessionForm;
