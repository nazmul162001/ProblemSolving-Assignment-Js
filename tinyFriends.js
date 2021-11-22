
    // tinyFriend 

    function tinyFriend(friends) {
        // check empty Array
        if(friends.length == 0 ) {
            return "Friends can't be empty"
        }
        // check data type 
        if(Array.isArray(friends) === false) {
            return "You must need to give an array"
        }
    
        var smallestFriendName = friends[0];
        for(var i = 1; i < friends.length; i++) {
            var currentFriend = friends[i];
            if(currentFriend.length < smallestFriendName.length) {
                smallestFriendName = currentFriend;
            }
        }
        return smallestFriendName;
    }
    
    var friends = ["nazmul", "hasib", "habib", "akash", "mahbub", "ali","Jhankar mahbub"];
    
    var tinyResult = tinyFriend(friends);
    console.log(tinyResult);