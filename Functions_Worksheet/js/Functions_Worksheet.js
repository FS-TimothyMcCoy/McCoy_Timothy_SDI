/*
Timothy McCoy
1/22/15
Functions Worksheet
*/
//alert("ok so this is a test")
//PROBLEM NUMBER 1

//Circumfrence
//Calculate the circumfrence of a circle

var radius = prompt("What is the radius?");
while(radius === "" || isNaN(radius)){
    radius = prompt("Please only use numbers and do not leave blank. \nWhat is the radius?");
}

function calcCircumf(r){
    var circumfrence = r*2*Math.PI;
    
    
    return circumfrence;
}

var returnedCircumfrence = calcCircumf(radius);

calcCircumf(radius);
console.log("The circumfrence of the circle is "+returnedCircumfrence);


//STUNG!!


var weight = prompt("What is the victim's weight?");
while(weight === "" || isNaN(weight)){
    weight = prompt("Please use only numbers and do not leave blank. \nWhat is the victim's weight?");

}

function beeStings(weight){
    var stingsPer = 8.666666667;
    var stingCalc = weight * stingsPer;
    
    return stingCalc;
    
}
var returnedStingCalc = beeStings(weight);

console.log("It takes "+returnedStingCalc+" bee stings to kill a "+weight+" pound victim.");



