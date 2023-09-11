const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeekElement = document.getElementById('currentDayOfTheWeek');
const utcTimeElement = document.getElementById('currentUTCTime');

// Get the current date and time
const currentDate = new Date();
const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const utcTime = currentDate.toUTCString();

// Update the page with the current day of the week and UTC time
dayOfWeekElement.textContent = `Current day of the week: ${dayOfWeek}`;
utcTimeElement.textContent = `Current UTC time: ${utcTime}`;