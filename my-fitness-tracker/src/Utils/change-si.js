export const convertToLbs = function (weightInKg) {
  if (typeof weightInKg === "number") {
    return (weightInKg * 2.20462).toFixed(2);
  } else {
    return NaN;
  }
};

export const convertToKmh = function (speedInMiles) {
  return (speedInMiles * 1.60934).toFixed(2);
};
