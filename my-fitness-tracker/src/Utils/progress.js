const checkProgress = function (sessions) {
  const colorCodesArray = [];
  // Loop over the sessions
  for (let i = 0; i < sessions.length; i++) {
    let weightColor = "";
    let setsColor = "";
    let repsColor = "";

    const colorCodeArray = [weightColor, setsColor, repsColor];

    // If it is the very first session mark all as no change
    if (i === 0) {
      colorCodeArray[0] = "same";
      colorCodeArray[1] = "same";
      colorCodeArray[2] = "same";
      colorCodesArray.push(colorCodeArray);
    } else {
      if (sessions[i].maxweight > sessions[i - 1].maxweight) {
        colorCodeArray[0] = "improve";
      }
      if (sessions[i].maxweight === sessions[i - 1].maxweight) {
        colorCodeArray[0] = "same";
      }
      if (sessions[i].maxweight < sessions[i - 1].maxweight) {
        colorCodeArray[0] = "worse";
      }

      if (sessions[i].sets > sessions[i - 1].sets) {
        colorCodeArray[1] = "improve";
      }
      if (sessions[i].sets === sessions[i - 1].sets) {
        colorCodeArray[1] = "same";
      }
      if (sessions[i].sets < sessions[i - 1].sets) {
        colorCodeArray[1] = "worse";
      }

      if (sessions[i].reps > sessions[i - 1].reps) {
        colorCodeArray[2] = "improve";
      }
      if (sessions[i].reps === sessions[i - 1].reps) {
        colorCodeArray[2] = "same";
      }
      if (sessions[i].reps < sessions[i - 1].reps) {
        colorCodeArray[2] = "worse";
      }
      colorCodesArray.push(colorCodeArray);
    }
  }
  return colorCodesArray;
};

module.exports = { checkProgress };
