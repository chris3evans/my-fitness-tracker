import { useState, useContext, useEffect } from "react";
import Button from "../Button";
import ExerciseSearchList from "./ExerciseSearchList";
import Icon from "../Icon";
import Context from "../../Utils/context";
import apiService from '../../Utils/api-service';
import touchSearch from '../../Utils/touch-search';
// const apiService = require("../../Utils/api-service");
// const touchSearch = require("../../Utils/touch-search");

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
    if (data.curWorkoutType === "resistance") {
      const matchingResistanceSearchResults = touchSearch.touchSearch(
        touchSearch.resistanceExerciseNames,
        searchValue
      );
      setExerciseSearchResults(matchingResistanceSearchResults);
    } else {
      const matchingCardioSearchResults = touchSearch.touchSearch(
        touchSearch.cardioExerciseNames,
        searchValue
      );
      setExerciseSearchResults(matchingCardioSearchResults);
    }
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
      className="form-exercises form exercise-grid fade-in sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-1/2"
      onSubmit={exerciseSubmitHandler}
    >
      <Icon
      description="left facing bold arrow"
        className="card-text text-dark cursor-pointer"
        onClick={exitFormHandler}
        icon="arrow-bold-left"
        size={30}
        color="black"
      ></Icon>
      <label className="form-label" htmlFor="exercise-name">
        Exercise Name:
      </label>
      <div className="search-input">
        <input
          className="form-input py-4"
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
        styles="button very-dark-green-gradient"
      ></Button>
    </form>
  );
};

export default ExerciseForm;
