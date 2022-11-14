const checkResistanceProgress = function (resistanceSessions) {
  const colorCodesArray = [];
  // Loop over the sessions
  for (let i = 0; i < resistanceSessions.length; i++) {
    let weightColor = "";
    let setsColor = "";
    let repsColor = "";

    // Change to object form

    const colorCodeArray = [weightColor, setsColor, repsColor];

    // If it is the very first session mark all as no change
    if (i === 0) {
      colorCodeArray[0] = "same";
      colorCodeArray[1] = "same";
      colorCodeArray[2] = "same";
      colorCodesArray.push(colorCodeArray);
    } else {
      if (
        resistanceSessions[i].maxweight > resistanceSessions[i - 1].maxweight
      ) {
        colorCodeArray[0] = "improve";
      }
      if (
        resistanceSessions[i].maxweight === resistanceSessions[i - 1].maxweight
      ) {
        colorCodeArray[0] = "same";
      }
      if (
        resistanceSessions[i].maxweight < resistanceSessions[i - 1].maxweight
      ) {
        colorCodeArray[0] = "worse";
      }

      if (resistanceSessions[i].sets > resistanceSessions[i - 1].sets) {
        colorCodeArray[1] = "improve";
      }
      if (resistanceSessions[i].sets === resistanceSessions[i - 1].sets) {
        colorCodeArray[1] = "same";
      }
      if (resistanceSessions[i].sets < resistanceSessions[i - 1].sets) {
        colorCodeArray[1] = "worse";
      }

      if (resistanceSessions[i].reps > resistanceSessions[i - 1].reps) {
        colorCodeArray[2] = "improve";
      }
      if (resistanceSessions[i].reps === resistanceSessions[i - 1].reps) {
        colorCodeArray[2] = "same";
      }
      if (resistanceSessions[i].reps < resistanceSessions[i - 1].reps) {
        colorCodeArray[2] = "worse";
      }
      colorCodesArray.push(colorCodeArray);
    }
  }
  return colorCodesArray;
};

const checkCardioProgress = function (cardioSessions) {
  const colorCodesArray = [];
  // Loop over the sessions
  for (let i = 0; i < cardioSessions.length; i++) {
    let weightColor = "";
    let setsColor = "";
    let repsColor = "";

    // Change to object form

    const colorCodeArray = [weightColor, setsColor, repsColor];

    // If it is the very first session mark all as no change
    if (i === 0) {
      colorCodeArray[0] = "same";
      colorCodeArray[1] = "same";
      colorCodeArray[2] = "same";
      colorCodesArray.push(colorCodeArray);
    } else {
      if (cardioSessions[i].maxspeed > cardioSessions[i - 1].maxspeed) {
        colorCodeArray[0] = "improve";
      }
      if (cardioSessions[i].maxspeed === cardioSessions[i - 1].maxspeed) {
        colorCodeArray[0] = "same";
      }
      if (cardioSessions[i].maxspeed < cardioSessions[i - 1].maxspeed) {
        colorCodeArray[0] = "worse";
      }

      if (cardioSessions[i].sets > cardioSessions[i - 1].sets) {
        colorCodeArray[1] = "improve";
      }
      if (cardioSessions[i].sets === cardioSessions[i - 1].sets) {
        colorCodeArray[1] = "same";
      }
      if (cardioSessions[i].sets < cardioSessions[i - 1].sets) {
        colorCodeArray[1] = "worse";
      }

      if (cardioSessions[i].time > cardioSessions[i - 1].time) {
        colorCodeArray[2] = "improve";
      }
      if (cardioSessions[i].time === cardioSessions[i - 1].time) {
        colorCodeArray[2] = "same";
      }
      if (cardioSessions[i].time < cardioSessions[i - 1].time) {
        colorCodeArray[2] = "worse";
      }
      colorCodesArray.push(colorCodeArray);
    }
  }
  return colorCodesArray;
};

module.exports = { checkResistanceProgress, checkCardioProgress };
