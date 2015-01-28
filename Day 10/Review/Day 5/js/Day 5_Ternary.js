
 /*
Timothy McCoy 
SDI Campus
1/15/15
Ternary
 */
//alert("Testing to see if it works")

 //If your gps is greater than 2.0 then you can graduate

 //(condition to test) ! true code: false code:
 //Normal if else statement
 var gpa = 3.8;

 if(gpa > 2.0){
  console.log("Congrats you can graduate!");

 } else{
  console.log("Sorry your gpa is too low.");

 }

 //ternary way

 (gpa > 2.0) ? console.log("Congrats you can graduate!"):console.log("Sorry your gpa is too low.");





//Decide what book a kid will read
 var age = prompt("How old are you?");
 while(age === "" || isNaN(age)){
  age = prompt("Please only use numbers and do not leave blank. \nHow old are you?");

 }
 var book;

 //If the child is under 10 they read green eggs and ham
 //Otherwise they can read the Time Machine
 //If the kid is older than 15 then they read Twilight

 book = (age <10) ? "Green eggs and ham" : "The Time Machine";

 var book2 = (age < 10) ? "Green eggs and ham" : (age < 15) ? "The Time Machine" : "Twilight";

 console.log("You should read "+ book);
 console.log(book2);