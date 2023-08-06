let fctPriceData = {
    cartPrice: 350,
    cartAmount: 1000,
    offerType: "NONE",
    discount: {}
}

let salePriceData = {
    cartPrice: 250,
    cartAmount: 1000,
    offerType: "NONE"
}

let closetPriceData = {
    cartPrice: 650,
    cartAmount: 1000,
    offerType: "NONE"
}

let negPriceData = {
    cartPrice: 100,
    cartAmount: 1000,
    offerType: "testing"
}
let priceData = {
    cartPrice: 1000,
    cartAmount:1000,
    offerType: "NONE",
    discount: {}
}

var pArray = [priceData, negPriceData, closetPriceData, salePriceData, fctPriceData];

var lowestObject = pArray.reduce(function (res, obj) {
    return (obj.cartPrice < res.cartPrice) ? obj : res;
});

console.log("11111111111111111111111111111111111111",lowestObject)