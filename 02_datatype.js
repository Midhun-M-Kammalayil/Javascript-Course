/*  
datatypes in Js 

undefined => declared a variable but not assigned a value
boolean => true or false
number => integer or floating-point number
string => sequence of characters
object => collection of properties
null => intentional absence of any object value
*/

// variables are containers for storing data values
var x = 5;
var y = "John";
var z = true;

/*
variables can stored in 3 different ways
1. var => globally scoped or function scoped
2. let => block scoped (the value can be assigneed on or after declaration)
3. const => block scoped and cannot be reassigned (value must be assigned at the time of declaration)
*/

//assignment operator (=) is used to assign a value to a variable
var a = 10; // assign 10 to variable a
var b = a; // assign the value of variable a to variable b


//initilazing variables
var c; // variable c is declared but not assigned a value
c = 20; // variable c is assigned a value of 20

//varible names are case sensitive and can contain letters, digits, underscores, and dollar signs.
// They must begin with a letter, underscore, or dollar sign.