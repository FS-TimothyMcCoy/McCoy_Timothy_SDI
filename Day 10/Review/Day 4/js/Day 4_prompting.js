/*
Timothy McCoy
SDI Campus
1/13/15
Prompting
 */
//alert("Testing to see if it works")
//Ask for input - prompt()
//Save the users response - by creating # variable
var userInput = prompt("Enter your year of birth");
console.log(userInput);
//Calculate the area of a rectangle
//Area =  length * width

//Create two variables and prompt the user for length
// and width
var length = prompt("Lets calculate the area of a rectangle. \n Please enter the length.");
while(length === "" || isNaN(length)){
var length = prompt("Please only use numbers and do not leave blank. \nWhat is the length?");

}
var width = prompt("Please enter in width:");
while(width === "" || isNaN(width)){
    var width = prompt("Please only use numbers and do not leave blank. \nWhat is the width?"); 

}



//Calculate area
var areaRect = length * width;
console.log("The area of your rectangle with a length of "+length+" and a width of "+width+" is "+areaRect);




