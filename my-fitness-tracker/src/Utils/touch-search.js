const exerciseNames = [
  "Bench Press",
  "Dumbell Press",
  "Incline Bench Press",
  "Incline Dumbell Press",
  "Decline Bench Press",
  "Decline Dumbell Press",
  "Push Ups",
  "Push Ups (Weighted)",
  "Dips",
  "Dips (Weighted)",
  "Military Press",
  "Shoulder Bar Press",
  "Shoulder Dumbell Press",
  "Arnold Press",
  "Lateral Raises",
  "Rear Delt Raises",
  "Dumbell Shrugs",
  "Barbell Shrugs",
  "Rope Extensions",
  "Skull Crushers",
  "Hammer Curls",
  "Dumbell Bicep Curls",
  "Barbell Bicep Curls",
  "Preacher Dumbell Curls",
  "Preacher Bar Curls",
  "Squats",
  "Lunges",
  "Leg Extensions",
  "Hip Thrusts",
  "Leg Press",
  "Hamstring Curls",
  "Goblet Squat",
  "Deadlift",
  "Romanian Deadlift",
  "Sumo Deadlift",
];

const touchSearch = function (standardExercises, curSearch) {
  const matchingResults = standardExercises.filter((exercise) => {
    console.log(exercise, "current exercise");
    console.log(curSearch, "current search");
    if (
      exercise.includes(curSearch) ||
      exercise.toLowerCase().includes(curSearch) ||
      exercise.toUpperCase().includes(curSearch)
    ) {
      return true;
    }

    return false;
  });

  return matchingResults;
};

module.exports = { touchSearch, exerciseNames };
