// 'var', 'const', 'let' Walkthrough and examples

// Want to avoid using 'var'.
var count = 0;
//count = 0 before the next line
count = count + 1;
//count = 1 before the next line
count = count + 1;
//count = 2 before the next line
count = count + 1;
console.log('count equals', count)

//const' can't be reassigned, start with 'const' and ask, Will this Change?
const constant = 5;
//constant = 6 // Won't work
console.log('constant equals', constant)

//variables with 'let can change
let time = new Date();
console.log('First time', time);
// Exposing the 'typeof' on time
console.log('Type Of first time: ', typeof time);
//'let' can be reassigned a new value, that value is an object
time = {date: new Date()}
console.log('Second time', time)
//grabbing date data using dot notation: time.date
console.log('Date of time', time.date);

//BLOCK SCOPE Walkthrough and Examples

{
    var exposed = 'Hi';
    let hidden = 'Good bye';
    console.log(hidden); //will print since hidden is within the scope.
}
console.log(exposed);
// console.log(hidden); At this scope, hidden is not defined