/*
Timothy McCoy SDI Campus 1/13/15 Day 4 In Class Assignment
Arrays
 */
alert("Testing to see if this is connected");

//Lets create a basic array
var avengersNames = ["Thor","Captain America","Iron Man"];

//Print it out to the console
console.log(avengersNames);
//Print out one specific item
console.log(avengersNames[1]);
//Switch a team member - Iron man for spiderman
avengersNames[2]="Spider-man";

console.log(avengersNames);
//Add a team member
avengersNames[3] = "Black Widow";
//Print out roster
console.log(avengersNames);
//Use a variable as an index #
var num = 2;
console.log(avengersNames[num]);

//Length Property
//Dot syntax - fancy for use a period
console.log(avengersNames.length);
//Last index number is the length minus 1
//Next open space? is going to be the length
//Recruit a new team member
avengersNames[avengersNames.length]= "Powerman";
console.log(avengersNames);  



