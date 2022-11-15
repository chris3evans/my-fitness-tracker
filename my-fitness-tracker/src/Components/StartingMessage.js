const StartingMessage = function (props) {
  return (
    <div className="starting-message-container">
      <h2 className="card-text-dark">{props.message}</h2>
    </div>
  );
};

export default StartingMessage;
