const Button = function (props) {
  return (
    <button
      className={props.styles}
      onClick={props.handler}
      type={props.btnType}
    >
      {props.content}
    </button>
  );
};

export default Button;
