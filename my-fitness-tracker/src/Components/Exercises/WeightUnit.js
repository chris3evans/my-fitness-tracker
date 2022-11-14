import Button from "../Button";
import { useContext } from "react";
import Context from "../../Utils/context";

const WeightUnit = function (props) {
  const data = useContext(Context);
  const onSelectKgHandler = function () {
    props.changeSi(true);
    // use kg?
    data.siUnit = true;
  };

  const onSelectLbHandler = function () {
    props.changeSi(false);
    // use kg?
    data.siUnit = false;
  };

  return (
    <div>
      <Button
        btnType="button"
        styles={`si-button ${
          props.useKg ? "si-button-selected strong-shadow" : ""
        }`}
        content="Kilograms (kg)"
        handler={onSelectKgHandler}
      ></Button>
      <Button
        btnType="button"
        styles={`si-button ${
          !props.useKg ? "si-button-selected strong-shadow" : ""
        }`}
        content="Pounds (lb)"
        handler={onSelectLbHandler}
      ></Button>
    </div>
  );
};

export default WeightUnit;
