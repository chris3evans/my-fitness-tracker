const db = require("../Models/index");

const addNewCardioSession = async function (req, res) {
  try {
    const cardioSessionData = req.body;
    const cardioSession = await db.CardioSession.create({
      ...cardioSessionData,
      ExerciseId: cardioSessionData.exerciseId,
    });

    res.send(cardioSession);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json(`Error in saving new cardio session to database: ${error}`);
  }
};

module.exports = { addNewCardioSession };
