/*
Timothy McCoy
1/22/15
Scope
*/
//alert("Testinnng")

//Variable Scope
//Variables inside and outside of a function

//Try not to use the same variable names
//However, in large files this is going to be impossible

//Variables created inside of functions can only be seen inside of those functions

//Create a variable or width in our MAIN code
var width = 5; //Scoped outside of the function - main code

//Create a function that calculates the perimeter of a rectangle

function calcPeri() {
    var width = prompt("What is the width?"); // scoped to the function calcPeri
    while(width === "" || isNaN(width)){

        var width = prompt("Please only use numbers do not leave blank. \nWhat is the width.");
    }
    console.log("Inside of the function the value of width is "+width);
    
    var height = 20;
    var perimeter = width*2 + height*2;
    console.log("Inside of function the perimeter is "+perimeter);
    
}
console.log("Before call "+width);
calcPeri();

console.log("After call "+width);

//THIS WILL NOT WORK
//BECAUSE YOU CAN NOT ACCESS A VARIABLE DECLARED INSIDE OF A FUNCTION FROM YOUR MAIN CODE
console.log("After call the perimeter is "+perimeter);