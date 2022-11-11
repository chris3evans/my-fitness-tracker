const Button = function (props) {
  return (
    <button className="button" onClick={props.handler} type={props.btnType}>
      {props.content}
    </button>
  );
};

export default Button;
