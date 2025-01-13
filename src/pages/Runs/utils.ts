// DISTANCE CONVERSION FUNCTION
const convertMetersToMiles = (meters: number) => {
  const metersPerMile = 1609.34;
  return Math.round((meters / metersPerMile) * 100) / 100;
};

// PACE CONVERSION FUNCTION
const convertMetersPerSecondToMilesPerHour = (metersPerSecond: number) => {
  const metersPerSecondToMilesPerHour = 2.23694;
  const speedInMph =
    Math.round(metersPerSecond * metersPerSecondToMilesPerHour * 100) / 100;

  // Calculate the pace (time per mile)
  const timePerMileInHours = 1 / speedInMph; // Time in hours to cover one mile
  const timePerMileInMinutes = timePerMileInHours * 60; // Convert hours to minutes
  const minutes = Math.floor(timePerMileInMinutes);
  const seconds = Math.round((timePerMileInMinutes - minutes) * 60);

  // Format the pace as mm:ss
  const formattedPace = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return formattedPace;
};

// TIME CONVERSION FUNCTION
const convertSecondsToFormattedTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}hr ${minutes}m`;
  } else {
    return `${minutes}m ${remainingSeconds}s`;
  }
};

export {
  convertMetersToMiles,
  convertMetersPerSecondToMilesPerHour,
  convertSecondsToFormattedTime,
};
