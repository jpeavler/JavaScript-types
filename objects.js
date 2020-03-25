// EXPLORING BUILT-IN JAVASCRIPT OBJECTS

console.log(Date.now());     //Date is an object Date.now()
// returns the amount of milliseconds since Jan 1, 1970
console.log(Math.PI);   //Math is an object. Math.PI returns 3.14159....
console.log(Math.min());
console.log(Math.max());

console.error('This message is bad!!!!');
console.table([{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3, z:5}]);
console.log([{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}]);


// EXPLORING OBJECT SYNTAX, JSON - JavaScript Object Notation

// JSON is Comma Separated Key:Value Pairs
// Sometimes you might see the Key as a string, in JSON files it is required
const personOne = {
    'firstName': 'Tom',
    'lastName': 'Hanks',
    'age': 63,
    // Using 'function Reserved word to enable 'this'
    'sayName': function() {console.log("Hello, I'm", this.firstName, this.lastName);}
};
// In a JavaScript file the Key doesn't need to be a String
const personTwo = {
    firstName: 'Tim',
    lastName: 'Allen',
    age: 66,
    // Escaping the single quote using a '\' instead of double quotes (like above on line 23)
    sayName: function() {console.log('Hello, I\'m', this.firstName, this.lastName);}
};
console.table([personOne, personTwo]);
personOne.sayName();
personTwo.sayName();