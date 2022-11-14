import { useState, useContext, useEffect } from "react";
import Button from "../Button";
import ExerciseSearchList from "./ExerciseSearchList";
import Context from "../../Utils/context";
const apiService = require("../../Utils/api-service");
const touchSearch = require("../../Utils/touch-search");

const ExerciseForm = function (props) {
  const data = useContext(Context);
  const [exitForm, setExitForm] = useState(false);
  const [addExercise, setAddExercise] = useState("");
  const [exerciseNameField, setExerciseNameField] = useState("");
  const [exerciseSearchResults, setExerciseSearchResults] = useState([]);
  const [hideSearchResults, setHideSearchResults] = useState(false);

  useEffect(() => {
    props.render();
  }, [addExercise]);

  const exitFormHandler = function () {
    setExitForm(true);
    props.navigate(exitForm);
  };

  const exerciseNameChangeHandler = function (event) {
    setExerciseNameField(event.target.value);
    autoSearchHandler(event.target.value);
  };

  const selectedExerciseHandler = function (result) {
    setExerciseNameField(result);
  };

  const autoSearchHandler = function (searchValue) {
    const matchingSearchResults = touchSearch.touchSearch(
      touchSearch.exerciseNames,
      searchValue
    );
    setExerciseSearchResults(matchingSearchResults);
  };

  const finishExerciseHandler = function () {
    setAddExercise(true);
  };

  const exerciseSubmitHandler = async function (event) {
    event.preventDefault();
    const formData = {
      exercisename: event.target.exercisename.value,
      workoutId: data.curExercises,
    };

    event.target.reset();

    try {
      await apiService.postNewExercise(formData);
      props.navigate();
      return "Exercise was not saved";
    } catch (error) {
      console.log(error, "error in posting new exercise (client side)");
      return "Exercise was not saved";
    }
  };

  return (
    <form
      className="form-exercises exercise-grid"
      onSubmit={exerciseSubmitHandler}
    >
      <Button
        content="BACK BTN2"
        styles="card-text cursor-pointer"
        handler={exitFormHandler}
        btnType="button"
      ></Button>
      <label className="form-label" htmlFor="exercise-name">
        Exercise Name:
      </label>
      <div className="search-input">
        <input
          className="exercise-form-input"
          id="exercise-name"
          name="exercisename"
          placeholder="What is this exercise called?"
          type="text"
          required
          value={exerciseNameField}
          onChange={exerciseNameChangeHandler}
          autoComplete="off"
        ></input>
        {exerciseNameField.length > 0 &&
        exerciseSearchResults.length > 0 &&
        !hideSearchResults ? (
          <ExerciseSearchList
            searchResults={exerciseSearchResults}
            clickedSearchResult={selectedExerciseHandler}
            showSearchResults={setHideSearchResults}
          ></ExerciseSearchList>
        ) : (
          ""
        )}
      </div>
      <Button
        btnType="submit"
        content="Save Exercise To Workout"
        handler={finishExerciseHandler}
        styles="button"
      ></Button>
    </form>
  );
};

export default ExerciseForm;
