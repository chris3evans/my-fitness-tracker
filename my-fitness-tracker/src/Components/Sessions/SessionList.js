import SessionHeaders from "./SessionHeaders";
const Date = require("../../Utils/date");

const SessionList = function (props) {
  return (
    <div className="session-container">
      <ul>
        <SessionHeaders></SessionHeaders>
        {props.sessionData.map((session) => {
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
    </div>
  );
};

export default SessionList;
