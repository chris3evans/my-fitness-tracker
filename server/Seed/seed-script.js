const seedData = require("./seed-data");
const db = require("../Models/index");

const populateApp = async function () {
  try {
    await db.Workout.destroy({
      where: {},
      truncate: true,
      cascade: true,
    });

    await db.Workout.create(seedData.seedWorkout1);

    await db.Exercise.create(seedData.seedExercise1);
    await db.Session.create(seedData.seedSession1);
    await db.Session.create(seedData.seedSession2);
    await db.Session.create(seedData.seedSession3);
    await db.Session.create(seedData.seedSession4);

    await db.Exercise.create(seedData.seedExercise2);
    await db.Session.create(seedData.seedSession5);
    await db.Session.create(seedData.seedSession6);
    await db.Session.create(seedData.seedSession7);
    await db.Session.create(seedData.seedSession8);

    await db.Exercise.create(seedData.seedExercise3);
    await db.Session.create(seedData.seedSession9);
    await db.Session.create(seedData.seedSession10);
    await db.Session.create(seedData.seedSession11);
    await db.Session.create(seedData.seedSession12);

    await db.Exercise.create(seedData.seedExercise4);
    await db.Session.create(seedData.seedSession13);
    await db.Session.create(seedData.seedSession14);
    await db.Session.create(seedData.seedSession15);
    await db.Session.create(seedData.seedSession16);

    await db.Workout.create(seedData.seedWorkout2);

    await db.Exercise.create(seedData.seedExercise5);
    await db.CardioSession.create(seedData.seedSession17);
    await db.CardioSession.create(seedData.seedSession18);
    await db.CardioSession.create(seedData.seedSession19);
    await db.CardioSession.create(seedData.seedSession20);

    await db.Exercise.create(seedData.seedExercise6);
    await db.CardioSession.create(seedData.seedSession21);
    await db.CardioSession.create(seedData.seedSession22);
    await db.CardioSession.create(seedData.seedSession23);
    await db.CardioSession.create(seedData.seedSession24);

    console.log("Database was successfully populated with workout data");
  } catch (error) {
    console.log(
      "There was an error populating the database with seed workout data"
    );
    console.log(error);
  }
};

populateApp();

module.exports = { populateApp };
