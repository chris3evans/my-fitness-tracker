import { useState, useEffect } from "react";
import SessionForm from "../Sessions/SessionForm";
import SessionList from "../Sessions/SessionList";
import Button from "../Button";
const apiService = require("../../Utils/api-service");

const ExerciseItem = function (props) {
  const [sessionsData, setSessionsData] = useState("");
  const [addSession, setAddSession] = useState(false);
  const [revealSessionList, setRevealSessionList] = useState(false);

  useEffect(() => {
    if (addSession) {
      sessionDataHandler();
    }
  }, [addSession]);

  useEffect(() => {
    sessionDataHandler();
  }, []);

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

  const toggleSessionListHandler = function () {
    setRevealSessionList(!revealSessionList);
  };

  const renderToggleNavigation = function () {
    if (revealSessionList && sessionsData.length > 3) return "🔼";
    if (!revealSessionList && sessionsData.length > 3) return "🔽";
  };

  return (
    <li className="mb-20">
      <h2
        className="exercise-card card-text"
        onClick={props.handler}
        id={props.exerciseData.id}
      >
        {props.exerciseData.exercisename}
      </h2>
      {sessionsData.length > 0 ? (
        <SessionList
          revealSessionList={revealSessionList}
          sessionData={sessionsData}
        ></SessionList>
      ) : (
        ""
      )}
      {props.selectedExerciseId === props.exerciseId && props.showForm ? (
        <SessionForm
          submitSession={setAddSession}
          exerciseId={props.exerciseData.id}
        ></SessionForm>
      ) : (
        ""
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
