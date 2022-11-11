const SessionList = function (props) {
  return (
    <ul>
      <li>Session list</li>
      {props.sessionData.map((session) => {
        return (
          <li key={session.id}>
            <h3>{session.maxweight}</h3>
            <h3>{session.sets}</h3>
            <h3>{session.reps}</h3>
            <h3>DATE GOES HERE</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default SessionList;
