import SessionHeaders from "./SessionHeaders";
import Button from "../Button";
import { useState } from "react";
const Date = require("../../Utils/date");
const Progress = require("../../Utils/progress");

const SessionList = function (props) {
  const [viewSessionForm, setViewSessionForm] = useState(false);

  const onAddSessionClickHandler = function () {
    setViewSessionForm(!viewSessionForm);
    props.showSessionForm(!props.showFormVal);
  };

  const progressColorCodeData = Progress.checkProgress([...props.sessionData]);

  let formattedSessionData = [];

  for (let i = 0; i < [...props.sessionData].length; i++) {
    for (let j = 0; j < progressColorCodeData.length; j++) {
      if (i === j) {
        const dataObject = {
          ...[...props.sessionData][i],
          colorCodes: progressColorCodeData[j],
        };
        formattedSessionData.push(dataObject);
      }
    }
  }

  return (
    <div className="session-container">
      <SessionHeaders></SessionHeaders>
      <ul
        className={
          props.revealSessionList ? "session-list" : "session-list-short"
        }
      >
        {formattedSessionData.reverse().map((session) => {
          return (
            <li className="session-card" key={session.id}>
              <div
                className={`session-card-container ${session.colorCodes[0]}`}
              >
                <div className="session-text-container">
                  <h3 className="text">{session.maxweight}</h3>
                </div>
              </div>
              <div
                className={`session-card-container ${session.colorCodes[1]}`}
              >
                <div className="session-text-container">
                  <h3 className="text">{session.sets}</h3>
                </div>
              </div>
              <div
                className={`session-card-container ${session.colorCodes[2]}`}
              >
                <div className="session-text-container">
                  <h3 className="text">{session.reps}</h3>
                </div>
              </div>
              <div className="session-card-container date">
                <div className="session-text-container">
                  <h3 className="text">{Date.formatDate(session.createdAt)}</h3>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Button
        btnType="button"
        content="Add New Session"
        styles="add-session-button"
        handler={onAddSessionClickHandler}
      ></Button>
    </div>
  );
};

export default SessionList;
