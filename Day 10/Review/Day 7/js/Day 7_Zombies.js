/*
Timothy McCoy
Day 7 Zombie Attack
1/20/15
*/
//alert("WOOOO DO YOU SEE THE ALERT?!")

//Zombie Attack
//There is a Zombie at fullsail
//It can bite 4 people a day and turn them into zombies
//So now the CDC wants to know how many zombies there will be in 8 days

var numZombies = prompt("How many zombies are there?");
 while(numZombies === "" || isNaN(numZombies) ){
     var numZombies = prompt("Please only enter a number and do not leave blank. \nHow many zombies are there?");

 }//How many zombie do we have
var numBites = 4; //Number of bites per zombie per day
var day = 8; // Number of days
var daysTakes = 0;
for(var i=1; i<= day; i++){
    //How many new zombies get made and how many go bite people
    //They get bitten then the next day they can bite
    var newZombies = numBites * numZombies;
    //Update the total number of zombies at the end of the day
    numZombies += newZombies;
    //Report at the end of the day
    console.log("There are "+numZombies+" zombies at the end of day #"+ i);
    
    
} while(numZombies<=1000000){
  //New Zombies
  var newZombies = numZombies * numBites;
  //Now how many zombies we have
  numZombies += newZombies;
  //Add one to the total number of days it takes
  daysTakes++;
  
    
}
console.log("It will take "+daysTakes+" days for a million zombies!");