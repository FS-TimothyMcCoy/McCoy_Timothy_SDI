//alert("JavaScript works!");
/*Timothy McCoy

*/
/*120 and under is undercooked
 *120 - 124 - steak is rare
 *125 - 130 - steak is medium - rare
 *130 - 139 - steak is medium
 *140 - 149 - steak is medium - well
 *150 - 165 - steak is well done
 *165 - steak is burnt to a crisp
 *
*/
//var steakTemp = 451;
//
//
//
//
//if (steakTemp < 120) {
//    console.log("The steak is not done yet.");
//} else if (steakTemp <= 124) {
//    console.log("Rare steak.");
//} else if (steakTemp <= 129) {
//    console.log("Medium-rare");
//} else if (steakTemp <= 139) {
//    console.log("Medium.");
//
//} else if (steakTemp <= 149){
//    console.log("Medium-well");
//} else if (steakTemp <= 165) {
//    console.log("Well done.");
//} else{
//    
//    console.log("Burnt to a crisp.");
//}
//
//
//
//// get outside temp
//var airTemp = parseInt(prompt("What's the temperature outside!", "65"));
//
////Create the var for the water temperature
//var waterTemp;
////Conditional to see what we're doing
//if (airTemp > 85) {
//    console.log("Let's go to the beach.");
//
//    waterTemp = parseInt(prompt("What's the temperature of the water?", "75"));
//    if (waterTemp >= 75) {
//        console.log("Let's get in the water!");
//        } else {
//            console.log("Let's build a sandcastle");
//        }
//}else{
//    console.log("We're going to the movies.");
//    }
//         
        
        
        
        
    
//round()
//Normal rounding .5 and up
var num1 = 9.44444;
console.log(num1);
num1 = Math.round(num1);
console.log(num1);
//Floor(x)
//Returns x, rounded down to the nearest integer/ whole number
var num2 = 6.8;
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);
//ceil(x)
//Returns x rounded up to the nexxt integer/ whole number
var num3 = 4.8888;
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);

//random()
//Returns a number between 0 and 1
var num4 = Math.round(Math.random()*100);
console.log(num4);

//Random number between two numbers
//Math.random()*(max-min) + min
var num5 = Math.round(Math.random() * (80-50) + 50); 
console.log(num5);

var arrOfItems = ["Chips Ahoy", "Oreos", "EL Fudge", "Thin Mints"]
var randomCookie = Math.round(Math.random() * (arrOfItems.length - 1));
console.log("My current favorite is " +arrOfItems[randomCookie]);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log("There are "+arrOfItems.length+" items in your array.")

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

