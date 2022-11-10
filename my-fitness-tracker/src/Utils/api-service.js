const baseUrl = "http://localhost:4000";

const postNewWorkout = async function (data) {
  try {
    const response = await fetch(`${baseUrl}/add-workout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
    console.log(workoutsData, "retrieved workout data");
    return workoutsData;
  } catch (error) {
    console.error(error);
    console.log("Error in getting all of the workouts (client side)");
    return "Error in retrieving all workouts";
  }
};

module.exports = { postNewWorkout, getAllWorkouts };
