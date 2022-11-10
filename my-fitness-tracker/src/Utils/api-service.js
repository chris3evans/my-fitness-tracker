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

    const workoutData = await response.json();
    console.log(workoutData);
    return workoutData;
  } catch (error) {
    console.error(error);
    console.log("Error in posting a new workout to the database (client side)");
  }
};

module.exports = { postNewWorkout };
