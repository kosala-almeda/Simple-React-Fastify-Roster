/*
 * pipedreams-react/src/utils/dateUtils.js
 * 
 */

export const DAYS = Object.freeze(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);

/**
 * Get prevous day according to #DAYS
 * @param currentDay must be one of #DAYS
 */
export function previousDay(currentDay) {
  const currentIndex = DAYS.indexOf(currentDay);
  if (currentIndex === 0) {
    // return last day if current is first
    return DAYS[DAYS.length - 1]
  } else {
    return DAYS[currentIndex - 1];
  }
}

/**
 * Get next day according to #DAYS
 * @param currentDay must be one of #DAYS
 */
export function nextDay(currentDay) {
  const currentIndex = DAYS.indexOf(currentDay);
  if (currentIndex === DAYS.length - 1) {
    // return first day if current is last
    return DAYS[0]
  } else {
    return DAYS[currentIndex + 1];
  }
}
