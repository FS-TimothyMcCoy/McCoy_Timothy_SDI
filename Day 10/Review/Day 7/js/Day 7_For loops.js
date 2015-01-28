/*
Timothy McCoy
Day 7 for loops
1/20/15
*/
//alert("Testing to see if it works")

//Basic for loop structure
/*
for(initialization;Condition to test;Increment of change){
    Code to run as long as the condition is true
    
}
*/

for(var i = 0; i <20; i+=4){
    //Code to run as long as I is less than 20
    console.log("The value of i equals "+ i);
    
}

for(var k = 0; k<5; k++){
    console.log("The value of k is "+ k);
    //Add a break point into this
    //If k is equal to 3 then stop the code
    if (k===3) {
        break;
    }
}