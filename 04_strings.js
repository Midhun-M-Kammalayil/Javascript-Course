//define a string

var name = "John Doe"; // string literal

//escaping characters in a string
var message = "He said, \"Hello!\""; // using backslash to escape double quotes
console.log(message);

//a string can be defined using single quotes, double quotes, or backticks (template literals)
var singleQuoteString = 'Ravi said "Hello"'; // no need to escape double quotes inside single quotes
var backtickString = `'ravi said "Hello"'`; // can use both single and double quotes inside backticks without escaping

//string concatenation
var Name = "John";
Name += "Doe";
console.log(Name); //Output: John Doe


// string length
var str = "Hello, World!";
console.log(str.length); //Output: 13

//bracket notation
var str1 = "Hello, World!";
console.log(str1[0]); //Output: H

 //strings are immutable in Js, meaning that once a string is created, it can't be changed. However, you can create a new string based on the original string.
 var str2 = "Hello, World!";
 str2[0] = "h";
 console.log(str2); //Output: Hello, World! (no change)
 str2 = "hello, World!"; // creating a new string
 console.log(str2);

 //find last char in a string
var firstName = "Midhun";
console.log(firstName[firstName.length - 1]); //Output: n , last char in a string
console.log(firstName[firstName.length -2]); //Output: u , second last char in a string