/*
Day 9 Random Numbers
Timothy McCoy
1/24/15
*/
//alert("I hate life")

//Create variables for min and max value

var min = parseInt(prompt("Please enter a min value."));
//Validate our min prompt
while(isNaN(min) || min === ""){
    //Re-prompt for correct info
    min = prompt("Please do not leave blank and only use numbers. \nPlease enter a min.")
    
}
var max = prompt("Please enter a max value.");

while(isNaN(max) || max === "" || Number(min)>=Number(max)){

//Validate our min prompt
if(isNaN(max)){
    //Re-prompt for correct info
    max = prompt("Please only use numbers. \nPlease enter a max:")
    
} else if (max === "") {
    max = prompt("Please do not leave blank. \nWhat is the max value:");
} else{
    max = prompt("Max value must be greater than min value. \nWhat is the max value.");
    
}}


//Create function
function randomizer(mn,mx){
     //Generate our random number
     var randomNum = Math.round(Math.random() * (mx - mn) + Number(mn));
     
     
     //Return that random number to our main code
     return randomNum;
    
}

//Function call BUT create a variable to catch the return value

var ranNum = randomizer(min,max);
console.log("Your random number between "+min+" and "+max+" is "+ranNum);



//15 Random numbers between our min and max
for(var i = 0; i < 15; i++){
    console.log(randomizer(min,max));
    
}