// Exploring SWITCH CONDITIONALS
let isRunning = true;
// let isRunning = false;
// let isRunning;
switch(isRunning){
    case true:
        isRunning = false;
        break;
    case false:
        isRunning =true;
        break;
    default:
        isRunning = 'undefined';
}
console.log('Running is', isRunning);



// EXPLORING IF/ELSE CONDITINALS

const votingAge = 18;
let myAge = 34;
if(votingAge <= myAge){//here is the Condition check
    // if condition is TRUTHY run this code
    console.log('I can vote!');
} else{
    //if condition is FALSEY ran this code
    console.log('I am not able to vote');
}

// Multiple branches in your code with If/Else-if
const wantsSugar = true;
const wantsCream = false;
// Evaluating the booleans for later condition checking
const combo = wantsCream && wantsSugar;
if(combo){
    console.log(`Here's your Dr. Pepper with cream and sugar!`);
} else if(wantsSugar){
    console.log(`Here's your sweet Dr. Pepper!`);
} else if(wantsCream){
    console.log(`Here's your creamy Dr. Pepper!`);
} else{
    console.log(`Your original Dr. Pepper is ready`);
}