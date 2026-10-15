# What is Function?

- Def: A function is reusable block of code that performs a task when called.
- Imagine a function as a machine:
  - Input: Data you provide.
  - Processing: The function's code.
  - Output: A value it may return.

## Syntax:

```
function funName(parameters){
    //code to execute
    return results;
}

//function call
funName(arguments);
```

## Example:

```
//function
function add(a, b) {
  let result;
  result = a + b;
  return result;
}
//call
console.log(`function call = ${add(5, 5)}`);
```

## Working:

1. function add(a,b) defines the function.
2. add(10,20) calls it.
3. 'a' receives 10; 'b' receives 30;
4. Define result.
5. Store a+b in result.
6. return result.
7. display the value of result in function call.

# Parameters vs Arguments:

- Def: Parameters are variable names in a function definition. Arguments are the actual values supplies when calling it.

```
function greet(name) {
  //name = parameter
  return `Hello, ${name}`;
}

//call
console.log(greet("Prajwal")); // "Prajwal" = Argument
```

## Parameters:

- Declared in the function definition.
- Act as Local variables.
- name in function greet(name).

## Arguments:

- Supplied during a call.
- Provide input values.
- 'Prajwal' in greet("prajwal");

# Default parameters:

- Def: A default parameter provides a fallback value when an argument is omitted or explicitly passed as undefined.

- Note: null does not activate the default value.

```
// function greet(name = "Guest") {
//   console.log(`Hello ${name}`);
//   return 0;
// }

function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log("1", greet("Alex"));
console.log("2", greet());
console.log("3", greet(undefined));
console.log("4", greet(null));

```

# Rest parameters:

- Def: A Rest parameter collects remaining arguments into an array.
- '...numbers' is an actual array.
- A rest parameter must be the last parameter.
- Useful when the number of inputs is variable.

```
function sum(...numbers) {
  console.log(numbers);
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum(9, 9, 9));
```

## The arguments object:

- Regular functions have an array-like arguments object containing the arguments passed to them.

```
function showArgs(a, b) {
  console.log(`arguments = ${arguments}`);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(`arguments.length = ${arguments.length}`);
  console.log(`isArray = ${Array.isArray(arguments)}`);
}

showArgs("UDY", 25);

```

- Note: Arrow functions do not have their own arguments objects. Prefer rest parameters(...args) in modern code.

# Difference between return and console.log():

- Def: return sends a value back to the caller.
  Console.log() displays a value in the console.
- Quick recall: 'return' is for your program. 'console.log()' is for you to inspect your program.

# Function execution flow:

- Execution order:

1. The function is defined.
2. The call 'sum(4,5)' begins execution.
3. a = 4, b = 5.
4. result = 9.
5. return result gives 9 to the caller .
6. answer becomes 9.
7. The console displays 9.

- A return statement immediately exits the current function.

# Function Declaration

- Def: A function declaration defines a function using the 'function' keyword and a name.
- Has a function name.
- Can generally be called before its declaration because function declarations are hoisted.
- Useful for named = identifiable by its name, reusable operations.

# Function expression:

- Def: A function expression(any piece of code that produces a value) creates a function as part of an expression often assigning it to a variable.
- Examples:

```
//Math exp:
console.log(10+5); //produces 15

//Variable exp:
let age = 25;
console.log(age); //produces 25

//Functional exp:
const greet = function(){
  console.log("helloWorld!");
} //produces a function that is assigned to greet
```

```
//simple function
function add(a, b) {
  return a + b;
}

//function expression
var sum = function (a, b) {
  return a + b;
};

//calls
console.log(`simple function = ${add(2, 3)}`);
console.log(`function expression = ${sum(2, 3)}`);
```

- Note: The Function is anoymous here, but a function expression can also have a name.
