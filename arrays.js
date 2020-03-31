// EXPLORATION OF ARRAYS

// Simple Array Syntax
const myArray = ['Wes', 'Alex', 'Carson', 'John', 'Josh'];
let index = 2;
console.log(myArray);
myArray[index] = myArray[2].toUpperCase();
console.log(myArray);

myArray.push('Mike');
console.log(myArray);

// Build an Array with a Loop using .push()
const numberArray = [];
for(let i = 1; i <= 100; i++){
    numberArray.push(i);
}
console.log("Filled up array: ", numberArray);

// Emptying out that array using .pop()
for(let j = 1; j <= 100; j++){
    numberArray.pop();
}
console.log("Cleared out Array:",numberArray);

// Using .shift() to remove the first string and .pop() to remove the last string
// Stores first and last string in string consts
const shiftArray = ["First", "Second", "Third", "Last"];
console.log("Array before Shift: ", shiftArray);
const begin = shiftArray.shift();
console.log("Array after Shift: ", shiftArray);
console.log("String shifted out: ", begin);
const end = shiftArray.pop();
console.log("Array after Pop: ", shiftArray);
console.log("String popped out: ", end);

// Using .unshift() to place back first into the right place
shiftArray.unshift(begin);
console.log("Array after unshift: ", shiftArray);

// Using .push() to place back last into the right place
shiftArray.push(end);
console.log("Array after push: ", shiftArray);

// Using .join() to printout the contents of an array as a sentence.
const storyArray = ["Once", "upon", "a", "time"];
console.log("Story Array content using .join(): ", storyArray.join(" "));

let input = "James";
let nameArray = input.split("");
console.log(nameArray, nameArray.length);

//flip the order of an array
let numberLine = "12345";
let flipArray = numberLine.split(' ');
console.log(flipArray.reverse());

// Combining two Arrays
const academics =["Mike", "Wes"];
const fullClass = myArray.concat(academics);
console.log(fullClass);