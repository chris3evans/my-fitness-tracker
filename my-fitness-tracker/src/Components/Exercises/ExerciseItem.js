import { useState, useEffect, useContext } from "react";
import ResistanceSessionForm from "../Sessions/ResistanceSessionForm";
import SessionList from "../Sessions/SessionList";
import Button from "../Button";
import CardioSessionForm from "../../Components/Sessions/CardioSessionForm";
import Context from "../../Utils/context";
const apiService = require("../../Utils/api-service");

const ExerciseItem = function (props) {
  const data = useContext(Context);
  console.log(data);

  const [sessionsData, setSessionsData] = useState("");
  const [addSession, setAddSession] = useState(false);
  const [revealSessionList, setRevealSessionList] = useState(false);

  const [viewResistanceSessionForm, setViewResistanceSessionForm] =
    useState(false);
  const [revealResistanceSessionForm, setRevealResistanceSessionForm] =
    useState(false);

  const [viewCardioSessionForm, setViewCardioSessionForm] = useState(false);
  const [revealCardioSessionForm, setRevealCardioSessionForm] = useState(false);

  useEffect(() => {
    if (addSession) {
      sessionDataHandler();
    }
  }, [addSession]);

  useEffect(() => {
    sessionDataHandler();
  }, []);

  useEffect(() => {
    setRevealResistanceSessionForm(revealResistanceSessionForm);
  }, [revealResistanceSessionForm]);

  const onAddWeightSessionClickHandler = function () {
    setViewResistanceSessionForm(!viewResistanceSessionForm);
    toggleResistanceSessionFormHandler(!revealResistanceSessionForm);
  };

  const onAddCardioSessionClickHandler = function () {
    setViewCardioSessionForm(!viewCardioSessionForm);
    toggleCardioSessionFormHandler(!revealCardioSessionForm);
  };

  const sessionDataHandler = async function () {
    try {
      const sessions = await apiService.getAllSessions(props.exerciseId);
      setSessionsData(sessions);
      return "Sessions were retrieved";
    } catch (error) {
      console.log(`Error in retrieiving the sessions: ${error}`);
      return "Error in retrieving the sessions";
    }
  };

  const toggleResistanceSessionFormHandler = function (toggle) {
    setRevealResistanceSessionForm(toggle);
  };
  const toggleCardioSessionFormHandler = function (toggle) {
    setRevealCardioSessionForm(toggle);
  };

  const toggleSessionListHandler = function () {
    setRevealSessionList(!revealSessionList);
  };

  const renderToggleNavigation = function () {
    if (revealSessionList && sessionsData.length > 3) return "🔼";
    if (!revealSessionList && sessionsData.length > 3) return "🔽";
  };

  return (
    <li className="mb-20 fade-in">
      <h2 className="exercise-card card-text" id={props.exerciseData.id}>
        {props.exerciseData.exercisename}
      </h2>
      {sessionsData.length > 0 ? (
        <SessionList
          showSessionList={revealSessionList}
          sessionData={sessionsData}
          showSessionForm={toggleResistanceSessionFormHandler}
          showFormVal={revealResistanceSessionForm}
        ></SessionList>
      ) : (
        ""
      )}
      {props.selectedExerciseId === props.exerciseId ||
      revealResistanceSessionForm ? (
        <ResistanceSessionForm
          submitSession={setAddSession}
          exerciseId={props.exerciseData.id}
          showSessionForm={toggleResistanceSessionFormHandler}
        ></ResistanceSessionForm>
      ) : (
        ""
      )}
      {props.selectedExerciseId === props.exerciseId ||
      revealCardioSessionForm ? (
        <CardioSessionForm
          exerciseId={props.exerciseData.id}
        ></CardioSessionForm>
      ) : (
        ""
      )}
      {data.curWorkoutType === "resistance" ? (
        <Button
          btnType="button"
          content="Add New Weights Session"
          styles="add-session-button"
          handler={onAddWeightSessionClickHandler}
        ></Button>
      ) : (
        <Button
          btnType="button"
          content="Add New Cardio Session"
          styles="add-session-button"
          handler={onAddCardioSessionClickHandler}
        ></Button>
      )}
      <Button
        content={sessionsData.length <= 3 ? "" : renderToggleNavigation()}
        btnType="button"
        styles="toggle-list-button"
        handler={toggleSessionListHandler}
      ></Button>
    </li>
  );
};

export default ExerciseItem;
