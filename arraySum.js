// Total sum of array 

var Number = [23, 52, 85, 64, 87, 20, 95, 100, 110];

// var sum = 0;

// for(var i = 0; i < number.length; i++) {
//     var element = number[i];
//     sum = sum + element;
// }

// console.log(sum);

// with function 

function sumOfArray(number) {
    var sum = 0;
    for(var i = 0; i < number.length; i++) {
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}

var result = sumOfArray(Number);
console.log(result);