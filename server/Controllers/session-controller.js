// const db = require("../Models/index");
import db from "../Models/index";

const addNewSession = async function (req, res) {
  try {
    const sessionData = req.body;
    const session = await db.Session.create({
      ...sessionData,
      ExerciseId: sessionData.exerciseId,
    });

    res.send(session);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json(`Error in saving new session to database: ${error}`);
  }
};

const getAllSessions = async function (req, res) {
  try {
    const exerciseId = req.url.split("/").pop();

    const allSessions = await db.Session.findAll({
      where: { ExerciseId: exerciseId },
    });
    res.send(allSessions);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json(`Error in retrieving the sessions from database: ${error}`);
  }
};

export { addNewSession, getAllSessions };
