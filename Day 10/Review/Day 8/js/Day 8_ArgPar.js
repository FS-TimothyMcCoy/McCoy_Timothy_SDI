/*
Timothy McCoy
Day 8 ArgPar
1/22/15
*/
//alert("Testing breh")

//Arguments - goes in the function call
//Parameters - goes in the function definition
//Must have the same number of arguments and parameters...... usually

//Create a function to calculate the area of a rectangle
var width = prompt("What is the width?");
var height = prompt("What is the height?");
function calcArea(w,h) { //Parameters go here
    //var width = 10;
    //var height = 20;
    //var area = width * height;
    var area = w*h;
    var results = w+h;
    
    console.log("The area is "+area);
    console.log(results);
}


//Function call
calcArea(width,height);
calcArea(5,4);

//Calculate dog Years
//Put in human years, get out dog years

function dogYears(humanAge){ //humanAge Parameter
    //Dog year = human years*7
    var dogAge = humanAge*7;
    console.log("Dog age is "+dogAge);
    
    
}
//function call with argument
dogYears(18);
dogYears(14);
var userAge = prompt("How old are you?");
dogYears(Number(userAge));