const baseUrl = "http://localhost:4000";

const postNewWorkout = async function (workoutData) {
  try {
    const response = await fetch(`${baseUrl}/add-workout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workoutData),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    console.log("Error in posting a new workout to the database (client side)");
    return "Error in saving workout";
  }
};

const getAllWorkouts = async function () {
  try {
    const response = await fetch(`${baseUrl}/workouts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const workoutsData = await response.json();
    return workoutsData;
  } catch (error) {
    console.error(error);
    console.log("Error in getting all of the workouts (client side)");
    return "Error in retrieving all workouts";
  }
};

const postNewExercise = async function (exerciseData) {
  try {
    const response = await fetch(`${baseUrl}/add-exercise`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exerciseData),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    console.log("Error in posting a new exercise (client side)");
    return "Error in saving exercise";
  }
};

const getAllExercises = async function (workoutId) {
  try {
    const response = await fetch(`${baseUrl}/exercises/${workoutId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const exercisesData = await response.json();
    return exercisesData;
  } catch (error) {
    console.error(error);
    console.log("Error in retrieving all the exercises (client side)");
    return "Error in retrieving all exercises";
  }
};

const postNewSession = async function (sessionData) {
  try {
    const response = await fetch(`${baseUrl}/add-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sessionData),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    console.log("Error in saving session");
    return "Error in saving session";
  }
};

module.exports = {
  postNewWorkout,
  getAllWorkouts,
  postNewExercise,
  getAllExercises,
  postNewSession,
};
