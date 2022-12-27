export const checkResistanceProgress = function (resistanceSessions) {
  try {
    const colorCodesArray = [];

    if (!Array.isArray(resistanceSessions))
      throw new Error("Non array value entered");

    if (resistanceSessions.length === 0) throw new Error("No session data");
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
          resistanceSessions[i].maxweight ===
          resistanceSessions[i - 1].maxweight
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
  } catch (error) {
    console.log(error, "Error with checkResistanceProgress");
  }
};

export const checkCardioProgress = function (cardioSessions) {
  const colorCodesArray = [];

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
