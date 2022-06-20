export const _rangeDate = (startingDate, endingDate) => {
  const rangeOfDates = [];
  const startDate = new Date(startingDate);
  const endDate = new Date(endingDate);
  while (startDate <= endDate) {
    rangeOfDates.push(startDate.toLocaleDateString());
    startDate.setDate(startDate.getDate() + 1);
  }
  return rangeOfDates;
};
