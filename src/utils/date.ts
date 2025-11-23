export const dateFormatter = (isoDateString: string) => {
  // 1. Create a Date object from the ISO string
  const date = new Date(isoDateString);

  // Check if the date object is valid
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  // 2. Define month names (abbreviated)
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // 3. Extract day, month, and year components

  // .getDate() gives the day of the month (1-31)
  // .getMonth() gives the month index (0-11)
  // .getFullYear() gives the four-digit year
  const day = date.getDate().toString().padStart(2, '0'); // Add leading zero for single digits
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // 4. Combine and return the formatted string
  return `${day} ${month} ${year}`;
};
