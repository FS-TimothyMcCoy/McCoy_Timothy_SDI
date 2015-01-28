/*
Timothy McCoy
1/20/15
Validating Prompts
*/
//alert("Hellooooo")
var userInput = prompt("Please type in your name:");
//Validating a prompt with a conditional
if (userInput === "") {
    //User did not type anything in
    userInput = prompt("Please do not leave blank, Type in your name.");

}

var firstName = prompt("Please type in your first name.");
while(firstName === ""){
    //The user typed in nothing
    //Reprompt for first name
    firstName = prompt("Please type in your first name and DO NOT leave blank.")
    
}

//Test to see if it is a number
//isNan() - tests what is inside of (), Is it a number?
//Everything else returns true
console.log(isNaN("monkey")); // Returns true
console.log(isNaN(7)); //Returns false
var age = prompt("Please enter your age.");

//Now validate that the user typed in a number
while(isNaN(age)|| age === ""){
    //This code runs anytime that the age is not a number
    age = prompt("Only use numbers, please enter your age");
    
}
//Conver to lower case



var choice = prompt("Please type in yes or no:");
while(choice != "yes"){
    choice = prompt("Please only type in yes or no!");
    
}
choice = choice.toLowerCase();
while(choice !="yes" && choice !="no"){
    choice = prompt("Please enter the correct thing")
}
//Simple number input validator
var number = prompt("Enter a number");
while(number === "" || isNaN(number)){
    var number = prompt("Please only enter numbers and do not leave blank. \nEnter a Number please.");

}







