
var startDateNormal = ("2023-07-13 18:0")
var endDateNormal = ("2023-07-13 21:30")
console.log("111111111111111111111111111111111111",startDateNormal)
console.log("2222222222222222222222222222222222222",endDateNormal)
var startDateISO = new Date(startDateNormal);
var endDateISO = new Date(endDateNormal);
console.log("333333333333333333333333333333333333",startDateISO)
console.log("4444444444444444444444444444444444444444",endDateISO)
var startDate = startDateISO.getTime() /1000 + 19800;
var endDate = endDateISO.getTime() /1000+ 19800;

console.log("5555555555555555555555555555555555555555555",startDate)
console.log("666666666666666666666666666666666666666666666",endDate)


/////////////////////////////////////////////////////////////


var startDateEposh = startDate-19800;
var endDateEposh = endDate-19800;


console.log("77777777777777777777777777777777777777777777777777777",startDateEposh)
console.log("8888888888888888888888888888888888888888888888888888",endDateEposh)

// var startDate = new Date(startDateEposh).toString().replace(/T/, ' ').replace(/\..+/, '').replace(/hu/, ' ').replace(/GMT+0530/, ' ')
// var endDate = new Date(endDateEposh).toString().replace(/T/, ' ').replace(/\..+/, '').replace(/hu/, ' ').replace(/GMT+0530/, ' ')
var startDate = new Date(startDateEposh * 1000)
var endDate =  new Date(endDateEposh *1000)

console.log("99999999999999999999999999999999999999999999999999999999",startDate)
console.log("00000000000000000000000000000000000000000000000000000000",endDate)

const year = startDate.getFullYear();
const month = String(startDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(startDate.getDate()).padStart(2, '0');

// var Date1 = new Date(startDateEposh * 1000)

const formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate);
const hour = String(startDate.getHours()).padStart(2, '0');
const minute = String(startDate.getMinutes()).padStart(2, '0');
const second = String(startDate.getSeconds()).padStart(2, '0');
console.log(`${hour}:${minute}:${second}`);

// console.log("##########################################",)
// console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",)


