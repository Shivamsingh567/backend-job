const epochTime = 1681726917;

// create a Date object from the epoch time
const date = new Date(epochTime * 1000);

// get the month and year from the date object in the local timezone

const month = date.getMonth();
const year = date.getFullYear();

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",month)
console.log("#########################################",year)

// calculate the start of the month in local timezone
const startOfMonth = new Date(year, month, 1);1680287400 , 1682879399
const startOfMonthEpochTime = startOfMonth.getTime() / 1000;

// calculate the end of the month in local timezone
const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59);
const endOfMonthEpochTime = endOfMonth.getTime() / 1000;

console.log("Start of month epoch time:", startOfMonthEpochTime);
console.log("End of month epoch time:", endOfMonthEpochTime);
