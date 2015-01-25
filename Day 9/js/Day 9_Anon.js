/*
Day 9 Anon
Timothy McCoy
1/24/15
*/
//alert("Anonymous?")

//Anonymous Functions
//Widely used in JS and jQuery
//Important in OOP Object Orie Programming
//Can be used Interchangabily with normal function, if done right


//Very quick and easy
//Save on memory

/*
Basic structure of an anon function
var functionName = function(parameters){
    Code to run goes here.
    
}
*/
//Function call before the normal function is defined
var results2 = triArea(6,7);
console.log("Before the function results 2 is "+results2);
/*
 *THIS DOES NOT WORK FUNCTION CALL HAS TO COME AFTER ANON FUNCTION DEFINITION!
//Function call before the anon function is defined
var results4 = triAreaAnon(7,8);
console.log("Before the anon function results4 is "+results4);
*/

//Create a normal function  for area of a triangle
function triArea(b, h) {
    //Area = 1/2 * base * height
    var area = .5 * b * h;
    return area;
}



//Function call
var results1 = triArea(5,6);
console.log(results1);


//Create an anonymous function that calc the area of triangle
var triAreaAnon = function(b,h){
    var area = .5 * b * h;
    return area;

    
};

//Function call after defined of anon function
var results3 = triAreaAnon(4,5);
console.log("Results of anonymous function after defined is "+results3);

