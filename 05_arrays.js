// arrays allows us to place several values in a single variable.On which each value can be accessed via an index number.

var ourArray = ["Midhun", 31, "Dev"];
console.log(ourArray[0]); //Output: Midhun


//nested arrays are arrays that contain other arrays as their elements. They can be used to represent more complex data structures, such as matrices or tables.
var nestedArray = [["Midhun", 31], ["Alice", 25]];
console.log(nestedArray[0][0]); //Output: Midhun 

//Modify array data with index
nestedArray[0][1] = 32; // changing the value of the second element of the first array
console.log(nestedArray[0][1]); //Output: 32

//manipulate arrays with push()
ourArray.push("CBA"); // adds "CBA" to the end of the array
console.log("push() result: " + ourArray); //Output: ["Midhun", 31, "Dev", "CBA"]

nestedArray.push(["Rahul", 35]);
console.log(nestedArray[2][1]); //Output: Rahul


//manipulate arrays with pop(), shift() and unshift()
var removedOurArray = ourArray.pop(); // removes the last element from our array
var shiftedOurArray = ourArray.shift(); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
var unshiftOurArray = ourArray.unshift("Dheeraj "); //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(ourArray); //Output: ["Dheeraj ", 31, "Dev"]
