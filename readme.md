# Types Assignment
### Question 1: List the different types with the default value as well as an example of the value
-Number: 0 : length = 547
-String: "" : statement = "This is a string."
-Object: {} : person = {name:"Bill", age: 45}
-Booleans: False : isDone = True
-Arrays: [] : cars = ["Toyota", "Ford"]
-Function: Doesn't have one : Number(string)
-Undefined: Nothing : var x;
-Null: Null: pointer = null;
-Symbol:


### Question 2: Explain what happens when you add a string and a number?
>JavaScript treats the number as a string and combines the string and number
>into a single string. Example: var x = 16 + "Car" assigns the string "16Car"
>to x.

### Question 3: How do you convert a string to a number?
>By using the Number(string) function, you could store the number into another variable
>or overwrite the current variable.
>Example: var x = "15"
>var y = Number(x)
>parseInt() will also work

### Question 4: What is the difference between a float and an int? Give an example of why you use each.
>Floats can store decimal values and ints can only store whole values.
>Floats can store the value of pi, ints will only round to 3.
>Ints can be used to leverage the remainder opperand to solve certain problems.

### Question 5: Give an example of adding "Hello" and "World" together to get "Hello World"
>var x = "Hello " + "World"
>x == "Hello World" is true.

### Question 6: Provide an example of an Array Literal
>> [apples, oranges, grapes]
### Question 7: Provide an example of an Object Literal
>> {age: 16 name:'Bob'}