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

// CALCULATE CURRENT WEEK MILES
const calculateCurrentWeekMiles = (
  activities: { type: string; start_date: string; distance: number }[]
) => {
  const now = new Date();
  const startOfWeek = new Date(now);

  // Get Monday of current week (assuming week starts on Monday)
  const dayOfWeek = now.getDay();
  const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // If Sunday (0), go back 6 days
  startOfWeek.setDate(now.getDate() + daysToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  let weekMiles = 0;

  activities.forEach((activity) => {
    if (activity.type === "Run") {
      const activityDate = new Date(activity.start_date);
      if (activityDate >= startOfWeek && activityDate <= endOfWeek) {
        weekMiles += convertMetersToMiles(activity.distance);
      }
    }
  });

  return weekMiles;
};

// CALCULATE DAILY PROGRESS FOR CURRENT WEEK
const calculateDailyProgress = (
  activities: { type: string; start_date: string; distance: number }[]
) => {
  const now = new Date();
  const startOfWeek = new Date(now);

  // Get Monday of current week (assuming week starts on Monday)
  const dayOfWeek = now.getDay();
  const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // If Sunday (0), go back 6 days
  startOfWeek.setDate(now.getDate() + daysToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  // Initialize array for 7 days (Monday to Sunday)
  const dayProgress = [0, 0, 0, 0, 0, 0, 0];

  activities.forEach((activity) => {
    if (activity.type === "Run") {
      const activityDate = new Date(activity.start_date);

      // Check if activity is within current week
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);

      if (activityDate >= startOfWeek && activityDate <= endOfWeek) {
        // Calculate which day of the week (0 = Monday, 6 = Sunday)
        const activityDayOfWeek = activityDate.getDay();
        const dayIndex = activityDayOfWeek === 0 ? 6 : activityDayOfWeek - 1; // Convert Sunday (0) to index 6, Monday (1) to index 0
        dayProgress[dayIndex] = 1; // Mark this day as having a run
      }
    }
  });

  return dayProgress;
};

export {
  convertMetersToMiles,
  convertMetersPerSecondToMilesPerHour,
  convertSecondsToFormattedTime,
  calculateCurrentWeekMiles,
  calculateDailyProgress,
};
