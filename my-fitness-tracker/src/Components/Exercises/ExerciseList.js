import ExerciseItem from "./ExerciseItem";
import SessionForm from "../Sessions/SessionForm";
import SessionList from "../Sessions/SessionList";
import { useState, useContext, useEffect } from "react";
const Context = require("../../Utils/context");
const apiService = require("../../Utils/api-service");

const ExerciseList = function (props) {
  const data = useContext(Context);

  // const [showSessionForm, setShowSessionForm] = useState(0);
  // const [renderSessions, setRenderSessions] = useState(false);
  // const [sessionsData, setSessionsData] = useState("");

  // useEffect(() => {
  //   sessionDataHandler();
  //   console.log("hi");
  // }, [renderSessions]);

  // const renderSessionsHandler = function () {
  //   setRenderSessions(!renderSessions);
  // };

  // const toggleSessionFormHandler = function (event) {
  //   const exerciseId = +event.target.id;

  //   if (exerciseId === showSessionForm) {
  //     setShowSessionForm(0);
  //   } else {
  //     setShowSessionForm(exerciseId);
  //   }
  // };

  return (
    <ul>
      {props.exercises.map((exercise) => {
        return (
          <div key={exercise.id}>
            <ExerciseItem
              // handler={toggleSessionFormHandler}
              exerciseData={exercise}
            ></ExerciseItem>
            <SessionList sessionData={[]}></SessionList>
            {/* {showSessionForm === exercise.id ? (
              <SessionForm exerciseId={exercise.id}></SessionForm>
            ) : (
              ""
            )} */}
          </div>
        );
      })}
    </ul>
  );
};

export default ExerciseList;
