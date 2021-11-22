
// find a maximam value 
var marks = [23, 52, 85, 64, 87, 20, 95, 100, 110];

var max = marks[0];

for(var i = 0; i < marks.length; i++) {
    var element = marks[i];
    
    if(element > max) {
        max = element;
    }
}


console.log(max);



// Find Min value 

var marks = [23, 52, 85, 64, 87, 20, 95, 100, 110];

var min = marks[0];

for(i = 0; i < marks.length; i++) {
    var element = marks[i];

    if(element < min) {
        min = element;
    }
}
console.log("Miminum Number in this array = ", min);