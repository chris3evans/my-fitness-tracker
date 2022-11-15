import Context from "../../Utils/context";
import { useContext } from "react";

const SessionHeaders = function () {
  const data = useContext(Context);
  return (
    <div className="session-headers">
      {data.curWorkoutType === "resistance" ? (
        <>
          <h3 className="secondary-heading">Maximum Working Weight:</h3>
          <h3 className="secondary-heading">Sets:</h3>
          <h3 className="secondary-heading">Reps:</h3>
          <h3 className="secondary-heading">Date:</h3>
        </>
      ) : (
        <>
          <h3 className="secondary-heading">Maximum Speed:</h3>
          <h3 className="secondary-heading">Intervals:</h3>
          <h3 className="secondary-heading">Time:</h3>
          <h3 className="secondary-heading">Date:</h3>
        </>
      )}
    </div>
  );
};

export default SessionHeaders;
