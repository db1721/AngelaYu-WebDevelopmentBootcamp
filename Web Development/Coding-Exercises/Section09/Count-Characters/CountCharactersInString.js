function countString(stringToCount) {
    var stringLength = stringToCount.length;

    //only 280 characters allowed
    if (stringLength > 280) {
        console.log("String cannot be more than 280 characters")
    }
    else {
        var charLimit = (280 - stringLength)
        console.log("You have written " + stringLength + " characters, you have " + charLimit + " characters left");
    }
}

countString("how many times can we go through this?");