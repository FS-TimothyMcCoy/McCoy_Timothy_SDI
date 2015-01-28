/*
Timothy McCoy 1/10/2015 Day 3 Coding
 */
// Single lined comment
//This is the alert
//alert("Testing to see if this is connected");
//Console.log Programmers can see this
console.log("This is the console.log");
//Declare a variable
//We use the keyword of var
var whatever1;  // Declaration of a variable
whatever1=42;  // Definition of the variable
console.log(whatever1);
//Declare and define a variable
var a=2;
console.log(a);
//Simple Math
a=a+3
console.log(a);
var b;
b=a+3;
console.log(b);
console.log(a);
// Find your age
var yearBorn= 1996;
//age is calculated by current year minus year born
var currentYear=2015;
var age=currentYear - yearBorn - 1;
console.log(age);
//+,-*,/
//Find area of triangle
//1/2 * base * height
var base=8;
var height=10;

var areaTriangle = 1/2 * base * height;
console.log(areaTriangle);
//Modulo - %
//Gives the remainder
var remainder=32%10
console.log(remainder);
//Find if even or odd
//To find if even or odd we Modulo by 2
//1 if it is odd 0 if it is even
var evenOrOdd=67%2;
console.log(evenOrOdd);
// Assignment Operators
/*
= Assignment
++ Adds 1 to the variable
-- subtracts one from the variable
+= #number Addition Assignment
-= #number Subtraction Assignment
/= #number Division Assignment
*= #number Multiplication Assignment
 */
var counter=1;
counter++; //counter=counter+1;
console.log(counter);
counter--;// counter = counter - 1;
console.log(counter);
counter+=3;// counter= counter + 3
console.log(counter);
counter-=2; //counter = counter - 2;
console.log(counter);
counter/=2; // counter = counter/2;     /= Divided By
console.log(counter);
counter*=4;// counter = counter*4;      *= Multiplied by
console.log(counter);



// String - Is any text variable
//" Is used at the beginning and end of the string"
//Used to distinguish between variable name and random text
//Single Quotes ' and double quotes " are both used, BUT must match "", '', etc.



var kermit="light green";
var frogName="Kermit";
console.log(frogName);
//Double quote or single quote?
// can use an escaping character \ backslash in front of the apostrophe
var phrase='I do not know!';
console.log(phrase);

// Multi - lines by using \n - new line character
var phrase2 = "I don't know! \nYou never know";
console.log(phrase2);

// Boolean
//Kind of like a light switch either on or off
//true of false - NOT "true" or "false"

var yes= true;
var nope= false;
//This is not a boolean
var wrong="true";


//Order of Operations
//PEMDAS - Please excuse my dear aunt sally
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

//Find quiz averages
var quiz1= 87;
var quiz2= 100;
var quiz3= 70;

//Average - add them up and divide by how many there are
var average= (quiz1 +quiz2+ quiz3) /3;
console.log(average);
//Do NOT overuse Parenthesis


//concatenation - combining text strings
//use the + plus sign for text and not just numbers
var firstName= "Kermit";
var lastName= "The Frog";
//Concatenate the first and last name into a full name
var fullName= firstName +" "+ lastName;
console.log(fullName);
console.log(fullName +" is my favorite muppet!");

var d = "6";
var e = "7";
var combine= d+e;
console.log(combine);
//Constant values are always UPPERCASE
var PI =3.14;

//Round to a decimal place
//toFixed(#) - # is how many decimal places you want
var num= 5.37293759
num= num.toFixed(2);
console.log(num);







