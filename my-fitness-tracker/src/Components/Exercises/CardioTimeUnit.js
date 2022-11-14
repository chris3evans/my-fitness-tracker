import Button from "../Button";
import { useContext } from "react";
import Context from "../../Utils/context";
import PreviousMap from "postcss/lib/previous-map";

const CardioTimeUnit = function (props) {
  const data = useContext(Context);

  const onSelectMinutesHandler = function () {
    props.changeTime(false);
    // use seconds?
    data.timeUnit = false;
  };

  const onSelectSecondsHandler = function () {
    props.changeTime(true);
    // use seconds?
    data.timeUnit = true;
  };

  return (
    <div>
      <Button
        btnType="button"
        styles={`si-button ${
          props.useSecs ? "si-button-selected strong-shadow" : ""
        }`}
        content="Seconds (s)"
        handler={onSelectSecondsHandler}
      ></Button>
      <Button
        btnType="button"
        styles={`si-button ${
          !props.useSecs ? "si-button-selected strong-shadow" : ""
        }`}
        content="Minutes (min)"
        handler={onSelectMinutesHandler}
      ></Button>
    </div>
  );
};

export default CardioTimeUnit;
