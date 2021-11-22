
// brickCalculator 

    // 0-10  = 15ft
    // 11-20 = 12ft
    // 20>   = 10ft
    // 1 ft  = 1000 bricks
    // check data type

    function brickCalculator(floor) {
        if(Number.isInteger(floor) === false) {
            return "Number must be an integer";
        }

        let totalFeet;
        if(floor <= 0) {
            return "floor can't be a fraction"
        } else
            if(floor <= 10) {
                totalFeet = floor * 15;
            } else if(floor >= 11 && floor <= 20) {
                totalFeet = 10 * 15 + (floor - 10) * 12;
            } else if(floor > 20) {
                totalFeet = 10 * 15 + 10 * 12 + (floor - 20) * 10;
            }

        var totalBricks = totalFeet * 1000;
        return totalBricks;
    }

    var brickResult = brickCalculator(25);
    console.log(brickResult);
