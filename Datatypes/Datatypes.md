# Datatypes:

## Datatypes represent the different kinds of data-values we can use in the javascript.

## As Javascript is a dynamically typed language, variables are not directly bound to a specific datatype. 

## Instead the Type is associated with the value currently stored in the variable.

# Primitive Datatypes: 

Primitive values are immutable (they cannot be changed), hold a single simple value and are directly stored in the memory stack.

Primitive values themselves are completely immutable and cannot be changed once created.

However, there is a common confusion point:
- Reassigning a variable is  not the same as mutating a value.

## variable reassignment Vs mutation:

1. Reassigning a variable (allowed):

When you change the value of a primitive variable, you are not changing the original value in the memory. Instead you are creating a brand new value and pointing the variable to that new memory address.

```
let name = "Alice";
name = "Bob";
//you didn't change "Alice" into "Bob". You created "Bob" and gave it to the variable.
```

2. Trying to mutate a Primitive (not allowed):

If you try to alter a Primitive value directly. Javascript will either silently ignore or throw an error (in strict mode).

```
let greet = "hello";
//Attempting to change the first letter.
greet[0] = "H";
console.log(greet);

//output: hello.
```
