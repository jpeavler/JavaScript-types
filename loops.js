'use strict';
// EXPLORING WHILE LOOPS

// Simple 'while loop'
let text  = '';
let i = 0;
while (i < 5){
    text = "The while number is " + i;
    i++;
    console.log(text);
}

// Simple 'do...while' loop
i = 0;
do {
    text = "The do number is " + i;
    i++;
    console.log(text);
} while(i < 5)

// Using a Callback in a 'while' loop
const iterate = x => x + 1;
    //Desugared Arrow syntax:
    //const iterate = (x) => {return x + 1; }
    //Function Syntax:
    //function iterate(x){ return x + 1;}
const loopWithCallback = (func) =>{
    i = 0;
    while (i < 10){
        if(i % 2 ==0){
        console.log('Callback number is', i);
        }
        i = func(i);
    }
}
loopWithCallback(iterate);


// EXPLORING FOR LOOPS


for(let count = 1; count < 10; count++){
    if(count % 2 == 0){
        console.log('Even Number', count);
    }
}