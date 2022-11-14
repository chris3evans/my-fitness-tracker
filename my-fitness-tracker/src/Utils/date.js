const formatDate = function (dateIsoString) {
  const newDate = new Date(dateIsoString);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const date = `${day < 9 ? "0" : ""}${day}/${
    month < 9 ? "0" : ""
  }${month}/${year}`;
  return date;
};

const formatSecondsToMinutes = function (timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = (timeInSeconds % 60).toFixed(0);
  return `${minutes > 0 ? minutes : ""}${minutes > 0 ? "min" : ""} ${seconds}s`;
};

module.exports = { formatDate, formatSecondsToMinutes };
