import Button from "../Button";
const apiService = require("../../Utils/api-service");

const CardioSessionForm = function (props) {
  const cardioSessionSubmitHandler = async function (event) {
    event.preventDefault();

    const formData = {
      maxspeed: +event.target.maxspeed.value,
      sets: +event.target.sets.value,
      time: +event.target.time.value,
    };

    event.target.reset();

    try {
      await apiService.postNewCardioSession(formData);
      return "Cardio session data was saved successfully";
    } catch (error) {
      console.error(
        "Error in saving cardio session data to database (form/client-side)"
      );
      return "Error, cardio session data was not saved (cardio session form)";
    }
  };

  return (
    <form onSubmit={cardioSessionSubmitHandler}>
      <div className="form-field">
        <label htmlFor="max-speed" className="form-label">
          Maximum Speed Reached:
        </label>
        <input
          className="form-input"
          type="number"
          required
          id="max-speed"
          name="maxspeed"
        ></input>
      </div>

      <div className="form-field">
        <label htmlFor="sets" className="form-label">
          Sets:
        </label>
        <input
          type="number"
          id="sets"
          name="sets"
          className="form-input"
          required
        ></input>
      </div>

      <div className="form-field">
        <label htmlFor="time" className="form-label">
          Speed:
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
        content="Add Session (cardio)"
        styles="button"
      ></Button>
    </form>
  );
};

export default CardioSessionForm;
