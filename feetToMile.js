
// feetToMile

function feetToMile(feet) {
    if(feet < 0) {
        return 'Feet can not be negative'
    }
    var mile = feet / 5280;
    return mile;
}

var mileResult = feetToMile(60000);
// var twoDigit = parseFloat(mileResult).toFixed(2);
// console.log(twoDigit);
console.log(mileResult);
