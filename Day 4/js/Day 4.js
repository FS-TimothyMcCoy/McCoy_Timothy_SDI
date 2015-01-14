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

//Pick oranges and track how many we have

var orangeBins = [12,20,14];

//How many oranges did we pick in total
var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log("The total number of orange bins collected is "+total);

//Advanced array

var fruitBowl = ["Orange","Tomato","Strawberry"];

//Property - Length - How many items are in the array
console.log(fruitBowl.length + " items in our fruit bowl.");

//Method of arrays

//push - inserts an item at the end of our array
//arrayName.push[item to push]
fruitBowl.push("Apple");
//See fruit bowl
console.log(fruitBowl);
//Push another fruit
fruitBowl.push("Kiwi");
console.log(fruitBowl);

//pop - takes off the last item in an array and returns it
//arrayName.pop()
//Create a variable to catch the returned value
var caught = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught);
var caught2 = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught2);
//Splice - is used for moving or adding items into an existing array
//arrayName.splice(position to start from or index
// number to start from, number of items to remove,
// Items to put in)
fruitBowl.splice(2,0,"Banana");
console.log(fruitBowl);
fruitBowl.splice(1,1,"Kiwi");
console.log(fruitBowl);
//Adding more items
fruitBowl.splice(1,0,"Tangerines","Mango","Grapes");
console.log(fruitBowl);  



