// utils/dateUtils.js
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export function previousDay(currentDay) {
  const currentIndex = daysOfWeek.indexOf(currentDay);
  const previousIndex = (currentIndex - 1 + daysOfWeek.length) % daysOfWeek.length;
  return daysOfWeek[previousIndex];
}

export function nextDay(currentDay) {
  const currentIndex = daysOfWeek.indexOf(currentDay);
  const nextIndex = (currentIndex + 1) % daysOfWeek.length;
  return daysOfWeek[nextIndex];
}
