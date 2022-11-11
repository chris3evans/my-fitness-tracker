import { useState, useEffect } from "react";
import SessionForm from "../Sessions/SessionForm";
import SessionList from "../Sessions/SessionList";
const apiService = require("../../Utils/api-service");

const ExerciseItem = function (props) {
  const [sessionsData, setSessionsData] = useState("");
  const [addSession, setAddSession] = useState(false);

  useEffect(() => {
    if (addSession) {
      sessionDataHandler();
    }
  }, [addSession]);

  const sessionDataHandler = async function () {
    try {
      const sessions = await apiService.getAllSessions(props.exerciseId);
      console.log(sessions, "123");
      setSessionsData(sessions);
      console.log(sessionsData);
      return "Sessions were retrieved";
    } catch (error) {
      console.log(`Error in retrieiving the sessions: ${error}`);
      return "Error in retrieving the sessions";
    }
  };

  return (
    <>
      <li>
        <h2 onClick={props.handler} id={props.exerciseData.id}>
          {props.exerciseData.exercisename}
        </h2>
        {props.selectedExerciseId === props.exerciseId && props.showForm ? (
          <SessionForm
            submitSession={setAddSession}
            exerciseId={props.exerciseData.id}
          ></SessionForm>
        ) : (
          ""
        )}
        <SessionList
          sessionData={sessionsData ? sessionsData : []}
        ></SessionList>
      </li>
    </>
  );
};

export default ExerciseItem;
