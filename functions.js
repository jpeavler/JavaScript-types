    //EXPLORING FUNCTION SYNTAX

    function counter (x){
        const result = x + 1;
        return result;
        //return x + 1; same as above two lines, more efficient because no extra variable
    }
    let count = 0;
    count = counter(count);
    count = counter(count);
    count = counter(count);
    console.log(count) //3

    //Two Variable Declarations and Definitions
    const x = 10;
    const y = 5;
    //variable declaration
    let result;
    //Adding two values together, differently scoped x & y variables as parameters
    function add(x, y = 1){
        return x + y;
    }
    //Variable Definition
    result = add(x,y);
    console.log('First result', result);    //15
    //Redefining a Variable
    result =add(result);
    console.log('Second result', result);   //16
    result =add(x);
    console.log('Second result', result);   //11

    //More advanced add function, uses rest '...' operator & [].reduce() & Arrow Syntax Function
    function addition(...numbers){
        return numbers.reduce((result, num) => {return result + num}, 0);
    }
    let output = addition(1, 2, 3, 4, 5);  //15, numbers = [1, 2, 3, 4, 5]
    console.log('output', output);
    output = addition(5, 5, 5, 5);  //20, numbers = [5, 5, 5, 5]
    console.log('output', output);



    //EXPLORING ARROW SYNTAX

    //No parameters, single line, not unique to Arrow Syntax
    const hello = () => {console.log('Hello World');}   //a procedure
    hello();

    //Syntactic Sugar of a full Arrow Syntax
    //only works with one parameter, and auto returns
    const arrowCounter = x => x + 1;
    //Desugared
    //const arrowCounter = (x) => { return x + 1; }
    let arrowCount = 0;
    arrowCount = arrowCounter(arrowCount);
    arrowCount = arrowCounter(arrowCount);
    arrowCount = arrowCounter(arrowCount);
    console.log('Arrow Count', arrowCount);

    //Passing Functions as Variables, not unique to Arrow, AKA Callback Function
    const consumeFunction = (func, counter) => { return func(counter) }
    // nesting calls without declaring variables
    console.log('Functions as Variables', 
        consumeFunction(arrowCounter, arrowCount));  //4