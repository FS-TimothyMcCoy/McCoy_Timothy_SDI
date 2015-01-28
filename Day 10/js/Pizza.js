
 /*
Timothy McCoy 
SDI Campus
1/27/15
Pizza Functions
 */
//alert("Testing to see if it works")
//Calculate how much pizza costs per square inch and how much per slice
 //Prompt the user for radius of pizza
 //Cost of pizza
 //And number of slices per pizza


var pizzaRadius = prompt("What is the radius of your pizza?");
 //Validate prompt
 while(pizzaRadius === "" || isNaN(pizzaRadius)){
//re - prompt the user
  pizzaRadius = prompt("Please do not leave blank and please only use numbers. \nWhat is the radius of your pizza?");

 }

 //do while validation

 do{
  var pizzaCost = prompt("How much does your pizza cost in total?");

 } while(pizzaCost === "" || isNaN(pizzaCost));

 var pizzaSlices = prompt("How many slices are in your pizza?");
 while(pizzaSlices === "" || isNaN(pizzaSlices)){
  pizzaSlices = prompt("Please only use numbers and do not leave blank. \nHow many slices are in your pizza?");

 }


 //Function call that starts the lord function

 var results = lordFunction(pizzaRadius,pizzaCost,pizzaSlices);

 console.log("Your pizza per sq in. costs "+results[0]+" that comes out to "+results[1]+" per slice.");


 //Create a function that will start all of the other functions
 function lordFunction(radius,cost,slices){
  //calculate the area
  var area = pizzaArea(radius);
  //Calculate the cost per area
  var areaCost = pizzaSqInCost(cost,area);
  //calculate the price per slice
  var slicePrice = pricePerSlice(cost,slices);



  //return area cost and slice per price
  return [areaCost,slicePrice];


 }










 //Create a function that calculates the are of the pizza

 function pizzaArea(r){
  //area PI *r *r
  var area = Math.PI * r * r;
  return area;

 }
 //Create a function that calculates the price per square inch of pizza

 function pizzaSqInCost(price,area){
  //price / area
  var costPerIn = price/area;
  //Round to 2 decimal
  costPerIn = costPerIn.toFixed(2);
  return costPerIn;

 }

 //Function that calculates the price per slice
 function pricePerSlice(price,slice){
  //Price / slice
  var costPerSlice = price/slice;
  costPerSlice = costPerSlice.toFixed(2);
  return costPerSlice;


 }

