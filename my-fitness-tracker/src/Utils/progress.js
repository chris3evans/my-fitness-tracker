export const checkResistanceProgress = function (resistanceSessions) {
  const colorCodesArray = [];

  if (!Array.isArray(resistanceSessions)) return "Invalid input";

  if (resistanceSessions.length === 0) return "No session data provided";
  if (resistanceSessions.length === 1) return ["same", "same", "same"];

  for (let i = 0; i < resistanceSessions.length; i++) {
    let weightColor = "";
    let setsColor = "";
    let repsColor = "";

    const colorCodeArray = [weightColor, setsColor, repsColor];

    if (i === 0) {
      colorCodeArray[0] = "same";
      colorCodeArray[1] = "same";
      colorCodeArray[2] = "same";
      colorCodesArray.push(colorCodeArray);
    } else {
      if (resistanceSessions[i].reps > resistanceSessions[i - 1].reps) {
        colorCodeArray[2] = "improve";
      }
      if (resistanceSessions[i].reps === resistanceSessions[i - 1].reps) {
        colorCodeArray[2] = "same";
      }
      if (resistanceSessions[i].reps < resistanceSessions[i - 1].reps) {
        colorCodeArray[2] = "worse";
      }

      if (resistanceSessions[i].sets > resistanceSessions[i - 1].sets) {
        colorCodeArray[1] = "improve";
        colorCodeArray[2] = "improve";
      }
      if (resistanceSessions[i].sets === resistanceSessions[i - 1].sets) {
        colorCodeArray[1] = "same";
      }
      if (resistanceSessions[i].sets < resistanceSessions[i - 1].sets) {
        colorCodeArray[1] = "worse";
        colorCodeArray[2] = "worse";
      }

      if (
        resistanceSessions[i].maxweight > resistanceSessions[i - 1].maxweight
      ) {
        colorCodeArray[0] = "improve";
        colorCodeArray[1] = "improve";
        colorCodeArray[2] = "improve";
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
        colorCodeArray[1] = "worse";
        colorCodeArray[2] = "worse";
      }

      colorCodesArray.push(colorCodeArray);
    }
  }
  return colorCodesArray;
};

export const checkCardioProgress = function (cardioSessions) {
  const colorCodesArray = [];

  if (!Array.isArray(cardioSessions)) return "Invalid input";

  if (cardioSessions.length === 0) return "No session data provided";

  if (cardioSessions.length === 1) return ["same", "same", "same"];

  for (let i = 0; i < cardioSessions.length; i++) {
    let weightColor = "";
    let setsColor = "";
    let repsColor = "";

    const colorCodeArray = [weightColor, setsColor, repsColor];

    if (i === 0) {
      colorCodeArray[0] = "same";
      colorCodeArray[1] = "same";
      colorCodeArray[2] = "same";
      colorCodesArray.push(colorCodeArray);
    } else {
      if (cardioSessions[i].time > cardioSessions[i - 1].time) {
        colorCodeArray[2] = "improve";
      }
      if (cardioSessions[i].time === cardioSessions[i - 1].time) {
        colorCodeArray[2] = "same";
      }
      if (cardioSessions[i].time < cardioSessions[i - 1].time) {
        colorCodeArray[2] = "worse";
      }

      if (cardioSessions[i].sets > cardioSessions[i - 1].sets) {
        colorCodeArray[1] = "improve";
        colorCodeArray[2] = "improve";
      }
      if (cardioSessions[i].sets === cardioSessions[i - 1].sets) {
        colorCodeArray[1] = "same";
      }
      if (cardioSessions[i].sets < cardioSessions[i - 1].sets) {
        colorCodeArray[1] = "worse";
        colorCodeArray[2] = "worse";
      }

      if (cardioSessions[i].maxspeed > cardioSessions[i - 1].maxspeed) {
        colorCodeArray[0] = "improve";
        colorCodeArray[1] = "improve";
        colorCodeArray[2] = "improve";
      }
      if (cardioSessions[i].maxspeed === cardioSessions[i - 1].maxspeed) {
        colorCodeArray[0] = "same";
      }
      if (cardioSessions[i].maxspeed < cardioSessions[i - 1].maxspeed) {
        colorCodeArray[0] = "worse";
        colorCodeArray[1] = "worse";
        colorCodeArray[2] = "worse";
      }

      colorCodesArray.push(colorCodeArray);
    }
  }
  return colorCodesArray;
};
