# Variables:

1. Are containers used to store data values.
2. Js is a dynamically typed Lang meaning you don't need to specify the data type when declaring a variable.

# var, let, const:

## var:

- Scope: functional or global.
- Redeclare: yes.
- Reassign: yes.
- Initialization: not required.
- Hoisting: initialized as undefined.

## let:

- Scope: blocked scope ({})
- Redeclare: not allowed in same Scope.
- Reassign: yes.
- Initialization: not required.
- Hoisting: hoisted (temporary dead zone)

## const:

- Scope: blocked scope ({})
- Redeclare: not allowed in same Scope.
- Reassign: not allowed.
- Initialization: required.
- Hoisting: hoisted (temporary dead zone)

# Variable Naming:

1. Can start with: Letter, \_, $.
2. Can contain: Letter, \_, $.
3. Cannot start with Numbers.
4. Cannot contain spaces.
5. Cannot use reserved keywords.

```
let user1 = "admin";
let user_name = "admin";
let $user = "admin";
```

# Scope and Blocked Scope:

## Scope: Where variable can be accessed.

```
var name = "prajwal";

function greet() {
    console.log(`hello ${name}`);
}

greet();

console.log(`hello ${name}`);
```

## Block: is any thing inside {}.

```
let name = "Prajwal";

function details() {
    let age = 27;
    console.log(`name: ${name}`);
    console.log(`age: ${age}`)
}

details();

console.log(`name: ${name}`);
//console.log(`age: ${age}`); ❌

```

# Hoisting:

Hoisting: Javascript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes or imports to the top of their scope prior to execution of the code.

## Hoisting = Declarations are processed before the code executes.

## var example:

```
console.log(`age = ${age}`);
var age = 27;
```

- Hoisting behaves like:

```
var age;
console.log(`age = ${age}`);
age = 27;

output: undefined
```

## let example:

```
console.log(`age = ${age}`);
//TDZ
let age = 27;

console.log(`age = ${age}`);

output:
ReferenceError: Cannot access 'age' before initialization
```

## const example:

```
console.log(`age = ${age}`);
//TDZ
const age = 27;

console.log(`age = ${age}`);

output:
ReferenceError: Cannot access 'age' before initialization
```

## function example:

```
//function call
greet();

function greet() {
  console.log("hello world.");
}

output: hello world.
```

## var: hoisted -> can access -> undefined.

## let: hoisted -> TDZ -> referenceError.

## const: hoisted -> TDZ -> referenceError.

## function: hoisted -> can generally call before declaration.

# Temporal Dead Zone:

Temporal Dead Zone refers to the period from the start of a block scope until a variable declared with let or const is initialized.
Accessing these variables before initialized throws a ReferenceError, preventing bugs associated with var hoisting.

## TDZ = is the period between entering a block and reaching the let/const declaration, during which the variable cannot be accessed.
