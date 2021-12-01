
var names = ["Me", "You", "Ben", "Jerry", "Tom"]
function whosPaying(names) {
    
/******Don't change the code above*******/
// nameArr=[]
// for (let i = 0; i < cars.length; i++) {
//   nameArr.append(names[i]);
// }
var numPeople = names.length
var rand = Math.floor(Math.random() * numPeople);
var randomPerson = names[rand]

return randomPerson + " is going to buy lunch today!";
    
    


/******Don't change the code below*******/    
}

console.log(whosPaying(names))