/*
Timothy McCoy
Day 8 Return
1/22/15
*/
//alert("TEsitngsdnfks")

//Create a function to calculate the area of a rectangle
function calcArea(w,h) {
    //calArea
    var area = w*h;
    //console.log(area);
    //Return the area value to the main code
    //Does not return the  variable itself
    return  area; 
}

//Function call


//Create a variable that will catch the return value
var returnedArea = calcArea(77,9);



calcArea(77,9);
//This doesnt work!!!!!!!!!!!
console.log(returnedArea);

//Create a function to calc the area of a circle
//area = pi*r*r
function circleArea(radius){
    var area = Math.PI * radius * radius;
    
    //Return this area
    return area;

    
}

//Function call
var result = circleArea(6);
console.log("The area of the circle is "+result);
//Had two circle with the same radius. What is the total area?
var twoArea = result * 2;
console.log("The area of both circles is "+twoArea.toFixed(2));

var result2 = circleArea(3);

console.log("The area of a circle with a radius of 3 is "+result2);

//Prompt user for radius. THe calculate the area

var userRad = parseInt(prompt("Please type in a radius:"));
//Validate prompt
while(isNaN(userRad) || userRad === ""){
    userRad = prompt("Please only use numbers. \nType in a radius:");
    
}
//Parse the variable
userRad = parseInt(userRad);

//Create a variable to catch the results
var userResults = circleArea(userRad);
console.log("The area of your circle with a radius of "+userRad+" is "+userResults);




