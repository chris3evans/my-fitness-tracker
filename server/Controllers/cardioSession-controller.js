const db = require("../Models/index");
// import db from '../Models/index';

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

const getAllCardioSessions = async function (req, res) {
  try {
    const exerciseId = req.url.split("/").pop();

    const allCardioSessions = await db.CardioSession.findAll({
      where: { ExerciseId: exerciseId },
    });
    res.send(allCardioSessions);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json(
      `Error in retrieving all of the cardio sessions from database: ${error}`
    );
  }
};

module.exports = { addNewCardioSession, getAllCardioSessions };
