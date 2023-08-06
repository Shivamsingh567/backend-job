let labelPrice = 1999
let listedPrice = 649
var percentOff= (((labelPrice - listedPrice)/(labelPrice)) * 100);
console.log("11111111111111111111111",percentOff)

let currentPrice =    649
let price = 5           //tempVariant.priceDetails.listedPrice;
const newPrice = Math.round(currentPrice - currentPrice * (5 / 100));

console.log("11111111111111111111111111111111122222222222222222",newPrice)



 const newEndTimeForCloset = new Date(closetEndTime * 1000).toISOString().replace(/T/, ' ').replace(/\..+/, '');
