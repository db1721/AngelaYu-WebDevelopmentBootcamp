//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height){
    var calculatedBMI = weight/(height*height)
    calculatedBMI = Math.floor(calculatedBMI);
    
    if(calculatedBMI < 18.5){
        var interpretation = "Your BMI is " + calculatedBMI + ", so you are underweight.";
    }
    else if(calculatedBMI > 24.9){
        interpretation = "Your BMI is " + calculatedBMI + ", so you are overweight.";
    }else{
        interpretation = "Your BMI is " + calculatedBMI + ", so you have a normal weight.";
    }

    return interpretation;
}



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

console.log(bmiCalculator(65, 1.8)); 
