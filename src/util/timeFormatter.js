export function formatMyDate(dateString) {
  // Convert the string to a Date object
  const date = new Date(dateString);

  // Check if the conversion was successful
  if (isNaN(date.getTime())) {
    // Handle invalid date string
    console.error(`Invalid date string: ${dateString}`);
    return 'Invalid Date';
  }

  // Format the date using Intl.DateTimeFormat
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(date);
}
