import "./App.css";
import WorkoutsView from "./Components/Workouts/WorkoutsView";
import ExercisesView from "./Components/Exercises/ExercisesView";
import Context from "./Utils/context";
import { useState } from "react";

function App() {
  const [viewWorkouts, setViewWorkouts] = useState(true);
  const [viewExercises, setViewExercises] = useState(false);

  const [curWorkout, setCurWorkout] = useState("");
  const [curExercises, setCurExercises] = useState("");
  const toggleView = function () {
    setViewWorkouts(!viewWorkouts);
    setViewExercises(!viewExercises);
  };

  // Returns name of current workout
  const getCurWorkout = function (workoutName) {
    setCurWorkout(workoutName);
  };

  // Returns id of current workout
  const getCurExercises = function (workoutId) {
    setCurExercises(workoutId);
  };

  const state = {
    toggleView: toggleView,
    getCurExercises: getCurExercises,
    curExercises: curExercises,
    getCurWorkout: getCurWorkout,
    curWorkout: curWorkout,
  };

  return (
    <Context.Provider value={state}>
      <div className="App">
        {viewWorkouts ? <WorkoutsView></WorkoutsView> : ""}
        {viewExercises ? <ExercisesView></ExercisesView> : ""}
      </div>
    </Context.Provider>
  );
}

export default App;
