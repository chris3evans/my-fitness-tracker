import Button from "../Button";
import { useContext } from "react";
import Context from "../../Utils/context";

const WeightUnit = function (props) {
  const data = useContext(Context);
  const onSelectMetricHandler = function () {
    props.changeSi(true);
    // use kg?
    data.siUnit = true;
  };

  const onSelectImperialHandler = function () {
    props.changeSi(false);
    // use kg?
    data.siUnit = false;
  };

  return (
    <>
      {data.curWorkoutType === "resistance" ? (
        <div>
          <Button
            btnType="button"
            styles={`si-button ${
              props.useKg
                ? "si-button-selected strong-shadow"
                : "very-dark-green-gradient"
            }`}
            content="Kilograms (kg)"
            handler={onSelectMetricHandler}
          ></Button>
          <Button
            btnType="button"
            styles={`si-button ${
              !props.useKg
                ? "si-button-selected strong-shadow"
                : "very-dark-green-gradient"
            }`}
            content="Pounds (lb)"
            handler={onSelectImperialHandler}
          ></Button>
        </div>
      ) : (
        <div>
          <Button
            btnType="button"
            styles={`si-button light-green-gradient  ${
              props.useKg
                ? "si-button-selected strong-shadow"
                : "very-dark-green-gradient"
            }`}
            content="Mph"
            handler={onSelectMetricHandler}
          ></Button>
          <Button
            btnType="button"
            styles={`si-button light-green-gradient  ${
              !props.useKg
                ? "si-button-selected strong-shadow"
                : "very-dark-green-gradient"
            }`}
            content="Kph"
            handler={onSelectImperialHandler}
          ></Button>
        </div>
      )}
    </>
  );
};

export default WeightUnit;
