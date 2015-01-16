
 /*
Timothy McCoy 
SDI Campus
1/15/15
Conditionals
 */
//alert("Testing to see if it works")
//Basic Conditional Statement
 //Create a boolean variable to test
 var oldEnough = true;
 //If the child is old enough, then print the console you can ride.
 /*
 //If oldEnough is set to false string will not show.
 Basic structure of if statement
 if(condition to test){
 Code to run if the condition is true
 }
  */
 if(oldEnough){
  //code inside of curly brackets will run if the test is true
 //This code will be skipped if the test is false
  console.log("YOU CAN RIDE THE COASTER!");
 }
 console.log("What comes after the if statement.");
//Relationship operators
 //If the kid is over 48 inches tall then he can ride
 var kidHeight = 30;
 //Create variable for minimum height
 var minHeight = 48;

 if(kidHeight > minHeight){
  console.log("You are tall enough to ride!");
 }else{
  //This code will run if the test is false!
  console.log("Sorry, you are too short!");
 }

