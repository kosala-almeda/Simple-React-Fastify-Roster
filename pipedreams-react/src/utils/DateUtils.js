// utils/dateUtils.js
const daysOfWeek = Object.freeze(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);

export function previousDay(currentDay) {
  const currentIndex = daysOfWeek.indexOf(currentDay);
  if (currentIndex === 0) {
    return daysOfWeek[daysOfWeek.length - 1]
  } else {
    const previousIndex = (currentIndex - 1);
    return daysOfWeek[previousIndex];
  }
}

export function nextDay(currentDay) {
  const currentIndex = daysOfWeek.indexOf(currentDay);
  if (currentIndex === daysOfWeek.length - 1) {
    return daysOfWeek[0]
  } else {
    const nextIndex = (currentIndex + 1);
    return daysOfWeek[nextIndex];
  }
}
