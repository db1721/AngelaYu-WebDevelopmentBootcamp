isLeap(2000); //leap
isLeap(2100); //not leap
isLeap(2400); //leap
isLeap(1989); //not leap
isLeap(1948); //not leap

function isLeap(year){

    if(year % 4 === 0){
        if(year % 400 === 0){
            //console.log(year +" was a leap year!");
            console.log("Leap year.");
        }else if(year % 100 === 0){
            //console.log(year +" was not a leap year!");
            console.log("Not leap year.");
        }else{
            //console.log(year +" was not a leap year!");
            console.log("Not leap year.");
        }
    }else{
        //console.log(year +" was not a leap year!");
        console.log("Not leap year.");
    }
}