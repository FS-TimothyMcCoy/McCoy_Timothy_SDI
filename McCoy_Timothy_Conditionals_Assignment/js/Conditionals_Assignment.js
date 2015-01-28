//alert("Javascript works!!");
/*
Will Josh go to the movies with friends,
stay at home and play video games,
or go to the arcade with a friend?
Well it all depends on how his wallet feels about this.
*/
var payingAttention = parseInt(prompt("Please choose an event and input how much money you will spend on it. If you are not spending any money on it then do not input a value. Just to check if you are reading the prompt please input the value zero now."));
var correctAnswer = 0;  
if (payingAttention === correctAnswer) {
    console.log("Great job user! You have verified that you are paying attention.");
} else {
    console.log("You are not currently paying attention. Please try again.");
}

//Declare your variables
var walletLimit = prompt("What is the limit of your wallet?");
while(walletLimit === "" || isNaN(walletLimit)){
    walletLimit = prompt("Please only use numbers and do not leave blank. \nWhat is your wallet's limit?");

}
var userMoviePrice = parseInt(prompt("How much money are you spending on the movie?"));
var userGameSnackPrice = parseInt(prompt("How much money are you spending on snacks?"));
var userArcadePrice = parseInt(prompt("How much money are you spending at the arcade?"));
//Start writing your conditionals
if (userMoviePrice <= walletLimit) {
    console.log("Because you chose to spend $"+userMoviePrice+".00 on this movie, you are allowed to go!");
} else if (userGameSnackPrice <= walletLimit){
    console.log("Because you chose to spend $"+userGameSnackPrice+".00 on your snacks, you are allowed to go!");
    } else if (userArcadePrice <= walletLimit){
        console.log("Because you chose to spend $"+userArcadePrice+".00 on this arcade, you are allowed to go!")
    } else {
        console.log("Sorry you do not have the sufficient funds to attend this event.");
    }
    //Variable naming
    num1 = 1;
    var rightAnswer= --num1;
    
    
    //Simple addition practice
    var userAnswer = parseInt(prompt("Here is a simple math problem. What is 1-1?"));
    //conditional
    (userAnswer === rightAnswer) ? console.log("You got it right!"):console.log("I'm sorry your answer is incorrect.");
    
    
    



    
    





