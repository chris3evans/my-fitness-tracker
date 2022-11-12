import "../Styles/App.css";
import WorkoutsView from "./Workouts/WorkoutsView";
import ExercisesView from "./Exercises/ExercisesView";
import Context from "../Utils/context";
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
      <div className="App bg-emerald-100 h-full">
        {viewWorkouts ? <WorkoutsView></WorkoutsView> : ""}
        {viewExercises ? <ExercisesView></ExercisesView> : ""}
      </div>
    </Context.Provider>
  );
}

export default App;
