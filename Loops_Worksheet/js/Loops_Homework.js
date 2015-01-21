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
//Do While Loops
//Counting how many hot pockets you consumed today without going past 6
//TJ isn't allowed to have more than 6 hot pockets a day

var hotPockets = prompt("Pick how many hot pockets you want \n then count how many there were in total. \n Keep in mind that there were only 6 hot pockets to begin with.");
while(isNaN(hotPockets)|| hotPockets === ""){
    
    var hotPockets = prompt("The data you have entered does not seem to be a number or is not an input at all, \n please try again TJ.");
}

do{
    
    console.log("TJ ate "+hotPockets+" Hot Pockets today.");
    hotPockets++;
    
    
} while(hotPockets<6);



//Create a For loop
//Create prompt for my variable






