// woodCalculator 

function woodCalculator(chair, table, khat) {

    // chair = 1 cb feet
    // table = 3 cb feet
    // khat  = 5 cb feet

    if(chair < 0) {
        return "chair can't be begative"
    } else if(table < 0){
        return "table can't be negative"
    } else if(khat < 0) {
        return "khat can't be negative"
    }

    // check for integer 
    if(Number.isInteger(chair) === false ) {
        return "number can't be fraction"
    } else if(Number.isInteger(table) === false ) {
        return "chair can't be fraction"
    } else if(Number.isInteger(khat) === false ) {
        return "khat can't be fraction"
    }
    var totalWood = chair * 1 + table * 3 + khat * 5;
    return totalWood;
          
}

var woodResult = woodCalculator(50, 50, 25);
console.log(woodResult);