/*
 Timothy McCoy
 SDI Campus
 1/13/15
 Day 4 Homework
 */
alert("Testing to see if it works")
///List your variables and values.
var a = prompt("We are trying to calculate the perimeter of a triangle." +
"Input your number for value a.");
while(a === "" || isNaN(a)){
 var a = prompt("Please only use numbers and dont leave blank. \nWhat is side a?");

}
var b = prompt("Input your value for side b.");
while(b === "" || isNaN(b)){
 var b = prompt("Please only use numbers and dont leave blank. \nWhat is side b?");

}
var c = prompt("Input your value for side c");
while( c === "" || isNaN(c)){
 var c = prompt("Please only use numbers and dont leave blank. \nWhat is side c?"); 

}
var perimeterTriangle = Number(a) + Number(b) + Number(c);
console.log ("After adding a+b+c you came up with a sum of "+perimeterTriangle+" for a perimeter value.");
//Introduce new steps
var userInput =("Two new Steps have been added to the process.");
console.log(userInput);
var userInput2 = ("Next, you must add an even integer to your answer then divide it by\n another even integer below the number 6.");
console.log(userInput2);
//Start asking for the two additional steps' values.
var originalAddedInteger = parseInt(prompt("Input a value for the even integer that\n you must add to your answer."));
var originalDividedInteger = parseInt(prompt("Input one more value to be divided by that answer\n which will complete your answer."));
var addedInteger = originalAddedInteger;
var dividedInteger = originalDividedInteger;
var addedIntegerCont = addedInteger+= perimeterTriangle;
var overallAnswer = addedIntegerCont/= dividedInteger;
console.log("After Adding "+originalAddedInteger+" to "+perimeterTriangle+" you got "+addedInteger+" which you divided by "
+originalDividedInteger+" to get your overall answer of "+overallAnswer+".");
  