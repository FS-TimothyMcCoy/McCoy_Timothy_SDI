
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
 Basic structure of an if and else statement
 if(condition to test){
 Code to run if the condition is true
 } else{
Code to run if the condition is false
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
 var kidHeight = 47;
 //Create variable for minimum height
 var minHeight = 48;

 //Create a variable for a shoe lift
 var shoeLift = 2;
 //Is the child tall enough with shoe lift?

 if(kidHeight + shoeLift > minHeight){
  console.log("You are tall enough to ride!");
 }else{
  //This code will run if the test is false!
  console.log("Sorry, you are too short!");
 }

 //What ride can the kid go on based on his height?
 //If the kid is 48 and up then Space Mountain
 //If 48 + then Buzz Lightyear ride
 //Anything shorter - Winnie The Pooh

 var childHeight = 42;
 if(childHeight >= 48){
  console.log("You Can ride Space Mountain, Buzz Lightyear, AND Winnie The Pooh!");
 } else if(childHeight >= 40){
  console.log("You Can Ride Buzz Lightyear, And Winnie The Pooh.");
 } else{
  console.log("You can only ride Winnie The Pooh.");
 }
 /*
 If,else,if,else statement
 If(condition 1 to test){
 Code to run if condition one is true
 } else if(condition 2 to test){
 Condition 2 will only be tested if condition 1 is false!
 Code to run if condition 2 is true
 } else{
 Code to run if condition 1 and condition 2 are false
 } 

  */




