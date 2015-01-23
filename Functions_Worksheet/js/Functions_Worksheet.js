/*
Timothy McCoy
1/22/15
Functions Worksheet
*/
//alert("ok so this is a test")
//PROBLEM NUMBER 1

//Circumfrence
//Calculate the circumfrence of a circle

var radius = 1;

function calcCircumf(r){
    var circumfrence = r*2*Math.PI;
    
    
    return circumfrence;
}

var returnedCircumfrence = calcCircumf(radius);

calcCircumf(radius);
console.log("The circumfrence of the circle is "+returnedCircumfrence);


//STUNG!!


var weight = 1;

function beeStings(weight){
    var stingsPer = 8.666666667;
    var stingCalc = weight * stingsPer;
    
    return stingCalc;
    
}
var returnedStingCalc = beeStings(weight);

console.log("It takes "+returnedStingCalc+" bee stings to kill a "+weight+" pound victim.");



