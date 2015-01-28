/*
Timothy McCoy
Day 8 Functions
1/22/15
*/
//alert("Testing!")

//Creating a function that logs on to console "Hello"

function printHello() {
    console.log("Hello! you are inside of the pring hello function!");
}

//Function call to start our printHello function
printHello();

printHello();

printMore();

//Create a function to print more text
function printMore(){
    console.log("Inside of Print More. Here is more text!")
    
}

printMore();

//Create a function that calculates the area of a rectangle

function calcArea(){
    //Creates variables for width, height and area
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log("The area is "+area)
    
}

calcArea();
calcArea();

