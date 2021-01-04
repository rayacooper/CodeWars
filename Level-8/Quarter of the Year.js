// Given a month as an integer from 1 to 12, 
// return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// My (probably too complicated) solution:
const quarterOf = (month) => {
    return month >= 0 && month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  }

// I was trying to figure out a solution that made more sense,
// But I'm doing keto so my brain is dumb.
// This is the "Best Practices" solution I found.

// const quarterOf = m => Math.ceil(m/3);