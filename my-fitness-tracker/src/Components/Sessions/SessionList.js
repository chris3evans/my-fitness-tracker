import SessionHeaders from "./SessionHeaders";
import Button from "../Button";
import { useState, useEffect, useContext } from "react";
import Context from "../../Utils/context";
const SiUnit = require("../../Utils/change-si");
const Date = require("../../Utils/date");
const Progress = require("../../Utils/progress");

const SessionList = function (props) {
  const data = useContext(Context);
  const [viewSessionForm, setViewSessionForm] = useState(false);
  const [longSessionList, setLongSessionList] = useState(false);

  useEffect(() => {
    extendSessionList();
  }, [props.showSessionList]);

  const extendSessionList = function () {
    setLongSessionList(props.showSessionList);
  };

  const sessionListLength = props.sessionData.length;

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
        style={{
          maxHeight: longSessionList
            ? `${4 * sessionListLength}rem`
            : 12 + "rem",
        }}
        className="session-list"
      >
        {formattedSessionData.reverse().map((session) => {
          return (
            <li className="session-card" key={session.id}>
              <div
                className={`session-card-container ${session.colorCodes[0]}`}
              >
                <div className="session-text-container">
                  <h3 className="text">
                    {data.siUnit
                      ? `${session.maxweight}kg`
                      : `${SiUnit.convertToLbs(session.maxweight)}lb`}
                  </h3>
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
