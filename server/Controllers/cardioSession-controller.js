const db = require('../Models/index');

const addNewCardioSession = async function (req, res) {
  try {
    console.log(req);
    res.send({})
  } catch (error) {
    res.status(500);
    res.json(`Error in saving new cardio session to database: ${error}`)
  }
}

module.exports = { addNewCardioSession }