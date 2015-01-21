/*
Timothy McCoy
1/20/15
Loops worksheet
*/
//alert("Testing")
//While Loops
//Counting how many years you have until you turn 19 (Counting by 1's)
var age = prompt("How old are you?"); //Recognize age variable
while(isNaN(age)|| age === ""){
    
    age = prompt("You have entered a character that is not a number, \n please try again.");
}

while(age<19){

    console.log("I am "+age+" years old.");
    //Change for age variable
    age++;
}







