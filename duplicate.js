// Find Duplicate value 
var Name = [3, 6, 2, 3, 2, 8, 1, 9, 11, 5, 6, 6];

var uniqueName = [];

for(var i = 0; i < Name.length; i++)  {
    var element = Name[i];
    var index = uniqueName.indexOf(element);

    if(index == -1) {
        uniqueName.push(element);
    }
}

console.log(uniqueName);