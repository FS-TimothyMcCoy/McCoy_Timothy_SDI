/*
Timothy McCoy
1/22/15
Day 8
Validation
*/
//alert("Testinnngggngngngngng")
var movie = prompt("What is your favorite movie?")

while(movie === ""){
    //Then the user left the prompt blank
    //Reprompt the user
    movie = prompt("Please dont leave this blank. \nWhat is your favorite movie?");
    
}
//Test to see if the user typed in a number or not
//isNaN() - Is not a number
//test strings return true
//Numbers return false

var ticketPrice = prompt("How much is a movie ticket?")
while(isNaN(ticketPrice)){
    //User did not type in a number
    //Reprompt for number
    ticketPrice = prompt("Please type in a number. \nWhat is the cost of the ticket?")
    
}

var age = prompt("To get into R rated movies we must know your age. \nHow old are you?");
//Validate that the prompt is not blank and is a number

while(isNaN(age)|| age === ""){
    //The user typed in a text string or left it blank
    console.log("Inside of while loop");
    
if (isNaN(age)) {
    age = prompt("Please only use number! \nHow old are you?");
}else{
age = prompt("Oops, something went wrong. \nPlease type in only numbers. What is your age?");    
    
}
}


//Validate something specific
var movieGenre = prompt("Do you want to see an action movie or comedy?");

//Validate that the user typed in one of the 2 genres

//change to lower case
movieGenre = movieGenre.toLowerCase();

while(movieGenre != "action" && movieGenre != "comedy"){
    movieGenre = prompt("Only type in comedy or action. What genre do you want to watch?");
    
}