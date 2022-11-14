const convertToLbs = function (weightInKg) {
  return (weightInKg * 2.20462).toFixed(2);
};

const convertToKilos = function (weightInLb) {
  const lbWeight = (weightInLb * 0.453592).toFixed(2);
  return lbWeight;
};

module.exports = { convertToLbs, convertToKilos };
