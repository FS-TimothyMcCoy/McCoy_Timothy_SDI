
 /*
Timothy McCoy 
SDI Campus
1/15/15
Conditionals Worksheet
 */
//alert("Testing to see if it works")

 //Group 1 A chance for Gas!
 //Declare variables
 var gasEfficiency = 12;
 var gaugeReading = 50;
 var tankCapacity = 15;
 var gaugeConverted = gaugeReading / 100;
 var halfTank = tankCapacity * gaugeConverted;
 var gasLeft = gasEfficiency * halfTank;
 if(gasLeft > halfTank){
console.log("Yes you can make it without stopping for gas!");

 } else{
console.log("You only have "+gasLeft+" gallons of gas in your tank, better get gas while you can!");

 }


//Group 2:Multiple Results
 //Check the login
 var usernameByUser = "Johnny";
 var passwordByUser = "Appleseed";
 var correctUser = "Johnny";
 var correctPass = "Appleseed";
 if(usernameByUser === correctUser && passwordByUser === correctPass){
  console.log("Welcome, Johnny!");

 } else if(usernameByUser!= correctUser && passwordByUser === correctPass){
  console.log("User not found. Try again.");

 } else if(usernameByUser === correctUser && passwordByUser != correctUser) {
  console.log("Password does not match our records.");

 }

 


