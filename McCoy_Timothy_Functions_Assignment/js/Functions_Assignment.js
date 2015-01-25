/*
Timothy McCoy
Functions Assignemnt
1/24/15
*/
//alert("Javascript file made!")

//Calculate the volume of your suitcase assuming that its a rectangular prism
//Volume = length * width * height

//Declare "main code" variables
var length = prompt("Please enter the length of your suitcase.");
while (length ==="" || isNaN(length)) {
    
    length = prompt("Please do not leave  blank and only use numbers. \nWhat is the length?");
}
var width = prompt("Please enter the width of your suitcase.");
while(width === "" || isNaN(width)){
    width = prompt("Please do not leave blank and only use numbers. \nWhat is the width?")
    
}
var height = prompt("Please enter the height of your suitcase.");
while(height === "" || isNaN(height)){
    height = prompt("Please do not leave blank and only use numbers. \nWhat is the height?")
    }
    
//Start on functions
    
