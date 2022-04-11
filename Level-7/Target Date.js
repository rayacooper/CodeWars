// You have an amount of money a0 > 0 
// and you deposit it with an interest rate of p percent 
// divided by 360 per day on the 1st of January 2016. 
// You want to have an amount a >= a0.

// Task:
// The function date_nb_days (or dateNbDays...) with parameters a0,
// a, p will return, as a string, the date on which you have just reached a.

// Example:
// date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

// date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)

// Notes:
// The return format of the date is "YYYY-MM-DD"
// The deposit is always on the "2016-01-01"
// Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
// You have: a0 > 0, p% > 0, a >= a0


// I wasn't sure how to go about solving this one, so I went ahead and looked at solutions for it:

const ln = Math.log;

function dateNbDays(a0, a, p) {
  let days = Math.ceil((ln(a) - ln(a0))/ln(1 + p/36000));
  var date = new Date(2016, 0, 1 + days);
  return date.toISOString().split('T')[0];
}

// This was really helpful because I wasn't sure how to get around the whole date issue, 
// considering each month has a different amount of days. Very cool! 
// I don't know anything about Math.log, probably short for logarithm? 
// I want to look it up and learn.