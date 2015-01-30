/*
Timothy McCoy
1/29/15
Final Exam WPF
*/
//alert("Hands on time")
//Declare variables and prompts

var originalCost = prompt("What is the cost of the Xbox?");
while(originalCost === "" || isNaN(originalCost)){
originalCost = prompt("Please enter a number and do not leave blank. \nWhat is the cost of the Xbox?");    
    
}
var discount = prompt("What is the discount number for this item?")
while(discount === "" || discount >100){
discount = prompt("Please enter a number between 0 and 100 and do not leave blank. \nWhat is the discount number?");
    
}




//Start on function
function calcDiscountCost(oC,d){
    //make variable for equation
    
    
    var moneySaved  = oC * (d/100);
    totalPrice = oC - moneySaved;
    return totalPrice ;
    
}


var returnedTotal = calcDiscountCost(originalCost,discount);
console.log("The final cost of an item that costs $"+originalCost+" with a discount of "+discount+"% is $"+returnedTotal);

