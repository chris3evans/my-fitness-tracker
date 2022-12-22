import Button from "../Button";
import apiService from '../../Utils/api-service';
// const apiService = require("../../Utils/api-service");

const CardioSessionForm = function (props) {
  const cardioSessionSubmitHandler = async function (event) {
    event.preventDefault();

    const formData = {
      maxspeed: +event.target.maxspeed.value,
      sets: +event.target.sets.value,
      time: +event.target.time.value,
      exerciseId: +props.exerciseId,
    };

    event.target.reset();

    try {
      await apiService.postNewCardioSession(formData);
      props.submitSession(Math.random());
      props.showSessionForm(false);
      return "Cardio session data was saved successfully";
    } catch (error) {
      console.error(
        "Error in saving cardio session data to database (form/client-side)"
      );
      return "Error, cardio session data was not saved (cardio session form)";
    }
  };

  return (
    <form
      className="form-sessions session-form-grid"
      onSubmit={cardioSessionSubmitHandler}
    >
      <div className="session-form-field session-form-field-grid">
        <label htmlFor="max-speed" className="form-label-session">
          Maximum Speed (mph):
        </label>
        <input
          className="form-input"
          type="number"
          required
          id="max-speed"
          name="maxspeed"
        ></input>
      </div>

      <div className="session-form-field session-form-field-grid">
        <label htmlFor="sets" className="form-label-session">
          Intervals:
        </label>
        <input
          type="number"
          id="sets"
          name="sets"
          className="form-input"
          required
        ></input>
      </div>

      <div className="session-form-field session-form-field-grid">
        <label htmlFor="time" className="form-label-session">
          Time (s):
        </label>
        <input
          className="form-input"
          type="number"
          required
          id="time"
          name="time"
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

export default CardioSessionForm;
