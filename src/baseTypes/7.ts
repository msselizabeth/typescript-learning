/*
 Create a function (isWeekend) that takes a day of the week (from your enum)
 and returns a boolean value indicating whether it is a weekday or a weekend.
*/

// Solution
enum Day {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday"
}
function isWeekend(day: Day): boolean {
  return day === Day.Sat || day === Day.Sun;
}

console.log(isWeekend(Day.Mon))