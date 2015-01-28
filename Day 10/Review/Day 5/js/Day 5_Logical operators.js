
 /*
Timothy McCoy 
SDI Campus
1/15/15
Logical Operators
 */
//alert("Testing to see if it works")


 /*
 true && true= true
 true && false = false
 false && true = false
 false && false = false

 true || true = true
 true || false = true
 false || true = true
 false || false = false

 !(true) = false
 !(false) = true

  */
 //If the price of 3DS is less than budget lets buy it
//AND if our paycheck is over $500
 var budget = 300;
 var dsPrice = 169;
 var payCheck = 600;

 if (dsPrice < budget && payCheck > 500){
  console.log("Buy the 3DS!");
 } else{
  console.log("Do not buy the 3DS! Because you are broke.");
 }

 //Lets buy a smartTV if it is less than our budget
 //OR we won the lottery




 var tvPrice = 540;
 var tvBudget = 500;
 var wonLottery = true;

 if(tvPrice < tvBudget || wonLottery){
console.log("Let's go buy a TV");

 } else{
  console.log("Stick with your small tv");

 }

