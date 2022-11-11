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

module.exports = { formatDate };
