/*
Timothy McCoy
Day 7 beer
1/20/15
*/
//alert("Testing 1,2,3!")
//99 bottles of beer on the wall
for(var i= 99; i>0; i--){
    
    

    console.log(i+ " bottles of beer on the wall. "+i+" bottles of beer. Take one down pass it around. "+(i-1)+" Bottles of beer on the wall.");
    //Add a check for the last round of beers
    if (i===1) {
       console.log(i+ " bottle of beer on the wall. "+i+" bottle of beer. Take one down pass it around. No more bottles of beer on the wall. \n The end"); 
    }else{
        console.log(i+ " bottles of beer on the wall. "+i+" bottles of beer. Take one down pass it around. "+(i-1)+" Bottles of beer on the wall.");
        
        
    }
    
}