let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
console.log(die1, die2, die3, die4);
let smallest = Math.min(die1, die2, die3, die4);
let total = 0;
switch(smallest){
    case die1:
        total = die2 + die3 + die4;
        break;
    case die2:
        total = die1 + die3 + die4;
        break;
    case die3:
        total = die1 + die2 + die4;
        break;
    case die4:
        total = die1 + die2 + die3; 
}
console.log(total);