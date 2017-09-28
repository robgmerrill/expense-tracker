// Get visible expenses
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMomement = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMomement, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMomement, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    // figure out if expenses.description has the text variable string inside of it
    // includes method
    // convert both strings to lowercase for case insensitive search


    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });
};
