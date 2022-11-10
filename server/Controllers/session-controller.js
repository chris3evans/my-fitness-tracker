const db = require("../Models/index");

const addNewSession = async function (req, res) {
  try {
    const sessionData = req.body;
    console.log(sessionData, "session data");
    const session = await db.Session.create({
      ...sessionData,
      ExerciseId: 1,
    });

    res.send(session);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.json(`Error in saving new session to database: ${error}`);
  }
};

module.exports = { addNewSession };
