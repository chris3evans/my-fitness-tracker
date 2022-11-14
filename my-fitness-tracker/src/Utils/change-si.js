const convertToLbs = function (weightInKg) {
  return (weightInKg * 2.20462).toFixed(2);
};

const convertToKmh = function (speedInMiles) {
  return (speedInMiles * 1.60934).toFixed(2);
};

module.exports = { convertToLbs, convertToKmh };
