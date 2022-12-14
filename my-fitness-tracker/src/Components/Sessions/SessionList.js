import SessionHeaders from "./SessionHeaders";
import { useState, useEffect, useContext } from "react";
import Context from "../../Utils/context";
import { convertToLbs, convertToKmh } from "../../Utils/change-si";
import { formatDate, formatSecondsToMinutes } from "../../Utils/date";
import {
  checkResistanceProgress,
  checkCardioProgress,
} from "../../Utils/progress";

const SessionList = function (props) {
  const data = useContext(Context);
  const [longSessionList, setLongSessionList] = useState(false);

  useEffect(() => {
    extendSessionList();
  }, [props.showSessionList]);

  const extendSessionList = function () {
    setLongSessionList(props.showSessionList);
  };

  const sessionListLength = props.sessionData.length;

  const colorCodeData =
    data.curWorkoutType === "resistance"
      ? checkResistanceProgress([...props.sessionData])
      : checkCardioProgress([...props.sessionData]);

  let formattedSessionData = [];

  for (let i = 0; i < [...props.sessionData].length; i++) {
    for (let j = 0; j < colorCodeData.length; j++) {
      if (i === j) {
        const dataObject = {
          ...[...props.sessionData][i],
          colorCodes: colorCodeData[j],
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
                      ? `${
                          data.curWorkoutType === "resistance"
                            ? session.maxweight
                            : session.maxspeed
                        }${data.curWorkoutType === "resistance" ? "kg" : "mph"}`
                      : `${
                          data.curWorkoutType === "resistance"
                            ? `${convertToLbs(session.maxweight)}lb`
                            : `${convertToKmh(session.maxspeed)}kph`
                        }`}
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
                <div
                  className={
                    data.curWorkoutType === "resistance"
                      ? "session-text-container"
                      : "session-time-text-container"
                  }
                >
                  <h3 className="text">{`${
                    data.curWorkoutType === "resistance"
                      ? session.reps
                      : data.timeUnit
                      ? session.time
                      : formatSecondsToMinutes(session.time)
                  }${
                    data.curWorkoutType === "resistance"
                      ? ""
                      : `${data.timeUnit ? "s" : ""}`
                  }`}</h3>
                </div>
              </div>
              <div className="session-card-container date">
                <div className="session-text-container">
                  <h3 className="text">{formatDate(session.createdAt)}</h3>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SessionList;
