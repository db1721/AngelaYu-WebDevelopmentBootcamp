function lifeInWeeks(age) {
    var newage = 90 - age;
    var days = newage * 365;
    var weeks = newage * 52;
    var months = newage * 12;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}

lifeInWeeks(51);