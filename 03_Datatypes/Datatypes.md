# Datatypes:

## Datatypes represent the different kinds of data-values we can use in the javascript.

## As Javascript is a dynamically typed language, variables are not directly bound to a specific datatype.

## Instead the Type is associated with the value currently stored in the variable.

# Primitive Datatypes:

Primitive values are immutable (they cannot be changed), hold a single simple value and are directly stored in the memory stack.

Primitive values themselves are completely immutable and cannot be changed once created.

However, there is a common confusion point:

- Reassigning a variable is not the same as mutating a value.

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

# Difference between Primitive and Non-Primitive:

## Primitive:

1. Mutability: Immutable (The values itself cannot change)
2. Memory: Stored by value.

## Non-Primitive:

1. Mutable: (properties/elements can be added or altered)
2. Memory: Stored by reference(a pointer to a memory location)

# Primitive Code Eg:

```
// Primitive

// 1. Numeric:

//Number:
//can store int + floting point.
//limit 2^53.
let num = 9007199254740993;
console.log(`num = ${num}`);
//output: num = 9007199254740992

//Bigint:
//Does not have a fixed limit. It can store a integer as large as available memory.
let bigInt = 999999999999999999999999999999999999999998n;
console.log(`bigInt = ${bigInt}`);

// 2. Non-Numeric:

//String: represents text.
let str = "javascript";
console.log(`str = ${str}`);

//Boolean: can be 'true' or 'false'.
let lights = true;
if (lights) {
  console.log("bool = Lights are ON.");
} else {
  console.log("bool = Lights are OFF.");
}

//Null: Means intentionally empty / No value.
let user = null;
console.log(`user = ${user}`);

//Undefined: Means no value has been assigned.
let password;
console.log(`password = ${password}`);

//Symbol: Creates a unique value.
let symb = Symbol("graveyard");
let symb1 = Symbol("graveyard");
if (symb == symb1) {
  console.log("symb matches symb1.");
} else {
  console.log("symb doesn't matches symb1.");
}
if (symb.description == "graveyard") {
  console.log('symb matches "graveyard"');
}

```

## Usecase of Symbol:

1. Unique IDs: Create values that can never accidentally be the same.
2. Object properties: Add special properties without conflicting with existing names.
3. Libraries: Prevent your library's property names from clashing with the user's code.
4. JavaScript customization: control special behaviours like iteration.
5. Internal data: Store data that shouldn't be easily accessed by normal property names.

# Non-Primitive Code Eg:
