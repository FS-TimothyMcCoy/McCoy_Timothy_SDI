/*
Timothy McCoy
While loops
1/20/15
*/
//alert("testing to see if it works")

//Basic while loop

//The while loop loops through a block of code as long as a condition is true

/*
var i = 0;
while(condition){
    Code that runs while condition is true
    Incremental change to the counting varible -
    OR infinite loop!!!
    
}
*/
var counter = 0; //Initializing counter

while(counter<20){
    //Code that will run as long as counter is less than 20 (counter<20)
    console.log(counter+ " Some things just never end");
    //Change for counter variable
    counter++;
}
//Do while loop
//The code will run at least once before checking the condition
var i = 20; 

do{
    //This code will run before the condition is checked
    //It will also run as long as the condition is true
    console.log("The number is "+ i);
    i++;
    
} while(i<10);















