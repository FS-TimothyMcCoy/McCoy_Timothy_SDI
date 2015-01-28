/*
Timothy McCoy
1/24/15
Day 9 Multiple
*/
//alert("BOOM")

/*
Prompt the user for width and height
Calculate both the area and perimeter of a rectangle
*/
//First set up the area of a rectangle function
function areaRect(w,h) {
    //Area of a rectangle is width times height
    var area = w*h;
    return area;
}
//Setup perimeter function
function periRect(w,h) {
    //Perimeter of a rectangle is 2 times the width plus 2 times the height
    var perimeter = 2*w + 2*h;
    //Return the perimeter
    return perimeter;
}

//Prompt the user for width and height

var width = prompt("Please enter the width of your rectangle.");
//Validate it
while (width ==="" || isNaN(width)) {
    
    width = prompt("Please do not leave  blank and only use numbers. \nWhat is the width?");
}

var height = prompt("Please enter the height of your rectangle.");
while(height === "" || isNaN(height)){
    height = prompt("Please do not leave blank and only use numbers. \nWhat is the height?");
    
}


//Function call both functions... ONE AT A TIME
var resultArea = areaRect(width, height);
var resultsPeri = periRect(width, height);
//Report out to the user



console.log("The area of the rectangle is "+resultArea+" and the perimeter is "+resultsPeri);


//Combined function to calculate the perimeter and the area

function combinedRect(w,h){
    //Calc area
    var area = w*h;
    //Calc Perimeter
    var peri = 2*w + 2*h;
    //Create the array
    //var results = [area,peri];
    //Return BOTH values
    return [area,peri];
    
    
}
//Function call
var combinedResults = combinedRect(width,height);
console.log("The area of the rectangle is "+combinedResults[0]);
console.log("The perimeter is "+combinedResults[1]);
console.log(combinedResults);


