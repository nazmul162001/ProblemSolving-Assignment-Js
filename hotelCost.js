// HotelCost Calculator 

    // 0-10  = 100 taka
    // 11-20 = 80 taka
    // 20 >  = 60 taka
    // check data type

function hotelCost(day) {
    if(Number.isInteger(day) === false) {
        return "Number must be an integer";
    }

    let totalCost;
        if(day <= 0) {
            return "Day can't be a fraction";
        } else
            if(day <= 10) {
                totalCost = day * 100;
            } else if(day >= 11 && day <= 20) {
                totalCost = 10 * 100 + (day - 10) * 80;
            } else if(day > 20) {
                totalCost = 10 * 100 + 10 * 80 + (day - 20) * 60;
            }

        return totalCost;
}

var costResult = hotelCost(14);
console.log("Your Total Cost = ", costResult);