// inchToFeet

function inchToFeet (inch) {
    var feet = inch /12 ;
    return feet;
}

var result = inchToFeet(48);
console.log(result);

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var output = feetToMile(75000);
var twoDigit = parseFloat(output).toFixed(2);

console.log(twoDigit);