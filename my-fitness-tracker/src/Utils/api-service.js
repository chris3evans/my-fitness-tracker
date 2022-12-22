const url =
  process.env.NODE_ENV === "production"
    ? "https://my-fitness-tracker.herokuapp.com"
    : "http://localhost:3333";

const postNewWorkout = async function (workoutData) {
  try {
    const response = await fetch(`${url}/add-workout`, {
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
    const response = await fetch(`${url}/workouts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(url, "url");
    console.error(error);
    console.log("Error in getting all of the workouts (client side)");
    return "Error in retrieving all workouts";
  }
};

const postNewExercise = async function (exerciseData) {
  try {
    const response = await fetch(`${url}/add-exercise`, {
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
    const response = await fetch(`${url}/exercises/${workoutId}`, {
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
    const response = await fetch(`${url}/add-session`, {
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

const getAllSessions = async function (exerciseId, workoutType) {
  try {
    const response = await fetch(
      `${url}/${
        workoutType === "cardio" ? "cardio-" : ""
      }sessions/${exerciseId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const sessionsData = await response.json();
    return sessionsData;
  } catch (error) {
    console.error(error);
    console.log("Error in retrieving sessions");
    return "Error in retrieving sessions";
  }
};

const postNewCardioSession = async function (cardioSessionData) {
  try {
    const response = await fetch(`${url}/add-cardio-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardioSessionData),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    console.log("Error in saving cardio session (client-side / api-service");
    return "Error in saving cardio session";
  }
};

export {
  postNewWorkout,
  getAllWorkouts,
  postNewExercise,
  getAllExercises,
  postNewSession,
  getAllSessions,
  postNewCardioSession,
};
