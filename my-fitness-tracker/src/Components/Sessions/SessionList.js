import SessionHeaders from "./SessionHeaders";
import Button from "../Button";
const Date = require("../../Utils/date");

const SessionList = function (props) {
  return (
    <div className="session-container">
      <SessionHeaders></SessionHeaders>
      <ul className={props.revealSessionList ? "" : "session-list h-126"}>
        {[...props.sessionData].reverse().map((session) => {
          return (
            <li className="session-card" key={session.id}>
              <div className="session-text-container">
                <h3 className="text">{session.maxweight}</h3>
              </div>
              <div className="session-text-container">
                <h3 className="text">{session.sets}</h3>
              </div>
              <div className="session-text-container">
                <h3 className="text">{session.reps}</h3>
              </div>
              <div className="session-text-container">
                <h3 className="text">{Date.formatDate(session.createdAt)}</h3>
              </div>
            </li>
          );
        })}
      </ul>
      <Button
        btnType="button"
        content="Add New Session"
        styles="add-session-button"
      ></Button>
    </div>
  );
};

export default SessionList;
