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



//testing resistor color duo
const decodeArray = ['black', 'brown', 'red', 'orange', 'yellow',
 'green', 'blue', 'violet', 'grey', 'white'];

 let code1 = 0;
 let code2 = 0;

const decodedValue = (color1, color2) => {

    for(let i = 0; i < decodeArray.length; i++){
      if(color1 == decodeArray[i]){
          code1 = i;
      }
      if(color2 == decodeArray[i]){
          code2 = i;
      }
    }
    return "" +code1 +code2;
};

console.log(decodedValue('brown', 'black'));