/*
Timothy McCoy
Day 9 Procedures
1/24/15
*/
//alert("Alert!")

//This is a basic or normal function
function calcArea(width,height){
    var area = width * height;
    return area;
    
}

//function call
//Need to create a variable to catch the return value
var results = calcArea(4,5);
console.log(results);


//This is a procedure
//It does not return a value
//List of stepts to do
function calcAreaP(width,height){
    //calculations
    var area = width * height
    console.log(area);
    //It will not have a return
    
}

//Function call for a procedure
calcAreaP(6,7);


alert("Test");//Procedure 
var userInput = prompt("ask a question.");//Prompting is a function

