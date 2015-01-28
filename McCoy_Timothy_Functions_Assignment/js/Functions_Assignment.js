/*
Timothy McCoy
Functions Assignemnt
1/24/15
*/
//alert("Javascript file made!")

//Calculate the volume of your suitcase assuming that its a rectangular prism
//Volume = length * width * height

//Declare "main code" variables
var length = prompt("Please enter the length of your suitcase.");
while (length ==="" || isNaN(length)) {
    
    length = prompt("Please do not leave  blank and only use numbers. \nWhat is the length?");
}
var width = prompt("Please enter the width of your suitcase.");
while(width === "" || isNaN(width)){
    width = prompt("Please do not leave blank and only use numbers. \nWhat is the width?")
    
}
var height = prompt("Please enter the height of your suitcase.");
while(height === "" || isNaN(height)){
    height = prompt("Please do not leave blank and only use numbers. \nWhat is the height?")
    }
    var evenInteger = prompt("Please enter an even integer under 6.");
    while(isNaN(evenInteger) || evenInteger >=6){
        evenInteger = prompt("Please do not leave blank and only use numbers. \nWhat is your integer?")
        
    }
    
//Start on functions
//Normal Function
alert("Starting on the functions now!")

function caseVolume(l,w,h){
    var volume = l * w * h;
    return volume;
    
};
//Function call
var answer1 = caseVolume(length,width,height);
console.log("The volume of your suitcase is "+answer1);

//Anonymous function
var caseVolumeAnon = function(eI){
    var quotient = answer1/evenInteger;
    return quotient;
    
}
//Anonymous Function call
var quotient = caseVolumeAnon(evenInteger);
console.log("The results of the even integer division are "+quotient);






    

