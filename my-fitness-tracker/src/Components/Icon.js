import IcoMoon from "react-icomoon";
import iconSet from "../External/selection.json";

const Icon = function (props) {
  return (
    <IcoMoon
      aria-label={props.description}
      iconSet={iconSet}
      {...props}
    ></IcoMoon>
  );
};

export default Icon;
