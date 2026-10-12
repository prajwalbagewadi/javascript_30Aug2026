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

```
//Non-Primitive

//Object:
//1. Objects are variables that can store both values and functions.
//2. Object properties:
//   - object are collections of properties.
//   - Properties can be changed, added and deleted.
//3. Object Methods: Methods are actions that can be performed on objects.
//4. this Keyword: refers to current object, used to access the object that is calling a method.
//5. Constructor: used to initialize properties of a object.

let Empobj = {
  name: "xyz",
  age: 0,
  desig: null,
  sal: 0,

  //object constructor
  setEmpDetails(name, age, desig, sal) {
    this.name = name;
    this.age = age;
    this.desig = desig;
    this.sal = sal;
    return this;
  },
};

let emp1 = Empobj.setEmpDetails("Prajwal", 27, "SDE", 450000);

console.log(emp1);
console.log(`Emp name: ${emp1.name}`);
console.log(`Emp age: ${emp1.age}`);
console.log(`Emp designation: ${emp1.desig}`);
console.log(`Emp salary: ${emp1.sal}`);

//Array:
//1. Elements: List of values.
//2. Ordered: Elements are ordered based on their index.
//3. Zero Indexed: Indexing starts from zero.
//4. Dynamic size: Arrays are dynamic in size (grow or shrink as elements are added or removed)
//5. Heterogeneous: Arrays can store elements of different datatypes (num,string,object,other arrays)

let arr = [123, "abc", true, (obj = { key: 1, val: "NewYork" })];
console.log(`arr = ${arr}`);
//size of arr
console.log(`arr[arr.length-1].key = ${arr[arr.length - 1].key}`);
console.log(`arr[arr.length-1].val = ${arr[arr.length - 1].val}`);
//change value
arr[2] = false;
console.log(`arr[2] = ${arr[2]}`);
// add at end
arr.push(21);
console.log(`arr = ${arr}`);
// remove from end
arr.pop();
console.log(`arr = ${arr}`);

//Function:
//1. Reusable block of code that performs a task.
//2. keyword function used to declare a function.
//3. function name used to call the function.
//4. Parameter variable written in the function defination.
//5. Argument Actual value passed when calling the function.
//6. Return sends a value back from the function.
//7. function call executes the function

function sqrt(inp) {
  result = inp * inp;
  return result;
}

console.log(`sqrt of 5 = ${sqrt(5)}`);

//Date:
//1. Built-in JS object used to create, store and work with dates and time.
//2. Date: represents current date and time.
//3. new Date(): creates a Date object for current date/time.
//4. Months are zero based when using numeric months 0=January, 11=December.
//5. getFullYear(): gets the year.
//6. getMonth(): gets the month (0-11).
//7. getDate():gets the day of the month (1-31).
//8. getDay(): gets the day of the week(0=sunday).
//9. getHours():gets the hour.
//10. getMinutes(): gets the minutes.
//11. getSeconds(): gets the seconds.

let curr = new Date();
console.log(`current day and time = ${curr}`);
console.log(`getFullYear = ${curr.getFullYear()}`);
console.log(`getMonth = ${curr.getMonth()}`);
console.log(`getDate = ${curr.getDate()}`);
console.log(`getDay = ${curr.getDay()}`);
console.log(`getHours = ${curr.getHours()}`);
console.log(`getMinutes = ${curr.getMinutes()}`);
console.log(`getSeconds = ${curr.getSeconds()}`);

//RegExp(RegularExpression):
//1. Pattern used to search, match, or validate text.
//  For Example:
//  - Check weather a string contains a number.
//  - Check weather a username contains only letters.
//  - Find a specific word in a sentence.
//  - Validate an email format.
//Think of RegExp as text-search pattern.

//2. Create a RegExp
//  - method 1: Regular expression literal
let pat1 = /hello/;
console.log(`pattern1 = ${pat1}`);
//  - method 2: RegExp constructor.
let pat2 = new RegExp("hello");
console.log(`pattern2 = ${pat2}`);

//3. Common syntax: /pattern/flags
//  - '/' marks the beginning and end of the pattern.
//  - 'pattern' the text or rule to search for.
//  - 'flags' optional settings that change how matching works.

//4. Basic matching:
//  - .test() method returns a Boolean value:
//  - true - a match was found, false - no match was found.
let str = "hello world.";
console.log(`pat1 matches the str = ${pat1.test(str)}`);
//Notice that the entire string doesn't need to match. The string "hello world" contains "hello", so the result is true.

//5. Important RegExp symbols:
//Symbol\Meaning\Example
// '.'\Any one character between 'h' and 't'\/h.t/
// '^'\Means the string must start with "hello"\/^hello/
// '$'\Means the string must end with "hello"\/hello$/
// '*'\Matches 'a' followed by zero or more 'b' characters\/ab*/
// '+'\Matches 'a' followed by one or more 'b' characters\/ab+/
// '?'\Matches 'color' or 'colour', the letter 'u' zero or one occurance(optional) and must contain 'r'.\/colou?r/
// '\d'\Matches any digit from 0 to 9.\/\d/
// '\w'\Matches letter(A-Z,a-z), digit(0-9) or underscore(_)\/\w/
// '\s'\Matches whitespace(space,tab, or newline).\/\s/
let symb1 = /h.t/;
console.log(`symb1 matches hot = ${symb1.test("hot")}`);
let symb2 = /^4/;
console.log(`symb2 matches 4683 = ${symb2.test("4683")}`);
let symb3 = /4$/;
console.log(`symb3 matches 4664 = ${symb3.test("4664")}`);
let symb4 = /ab*/;
console.log(`symb4 matches aaa = ${symb4.test("aaa")}`);
let symb5 = /ab+/;
console.log(`symb5 matches aab = ${symb5.test("aab")}`);
let symb6 = /lo?yalty/;
console.log(`symb6 matches lyal = ${symb6.test("lyalty")}`);
let symb7 = /\d/;
console.log(`symb7 matches Aug21 = ${symb7.test("Aug21")}`);
let symb8 = /\w/;
console.log(`symb8 matches Ab_ = ${symb8.test("Ab_")}`);
let symb9 = /\s/;
console.log(`symb9 matches A b = ${symb9.test("A b")}`);

//6. Character sets[]: Square brackets let you specify characters are allowed.
//  - /[abc]/ this matches any one of these characters: a,b, or c.
//  - [a-z] lowercase letters. [A-Z] Uppercase letters. [0-9] Digits. [a-zA-Z] Lowercase or uppercase letters.
console.log(`[A-Z] = ${/[A-Z]/.test("hEllo")}`);
console.log(`[a-z] = ${/[a-z]/.test("hEllo")}`);
console.log(`[0-9] = ${/[0-9]/.test("hEllo21")}`);

//7. RegExp flags:
// /pattern/flags
// flag\meaning
// i\case-insenstive:
// - Matches text regardless of upper or lower case.
let symbf1 = /hello/i;
console.log(`symbf1 matches hello = ${symbf1.test("hello")}`);
// g\Global matching:
// - Finds all the occurances instead of stopping at the first match when using methods such as .match()
let symbf2 = /cat/g;
console.log(`symbf2 matches 'cat cat cat' = ${"cat cat cat".match(symbf2)}`);
// m\Multiline matching:
// - Makes ^ and $ match the beginning and end of each line, rather than only the entire string.
let symbf3 = /^hello/m;
console.log(
  `symbf3 matches \"world\nhello\" = ${symbf3.test("world\nhello")}"`,
);

//8. Useful RegExp methods:
//.test(): checks if a match exits returns true/false.
console.log(`.test() for /\d/ = ${/\d/.test("abc5")}`);
//.match(): Returns the matched text. Syntax string.match(pattern)
console.log(`.match() for b = ${"abc".match(/b/)}`);
//.replace(): Replaces matched text. Syntax string.replace(pattern,replaceString)
console.log(`.replace cat with dog = ${"cat".replace(/cat/, "dog")}`);
//.search(): Returns the position(index) of the first match (-1 if none). Syntax string.search(pattern)
console.log(`.search() 5 = ${"abc5".search(/\d/)}`);

//Set:
//  - A Set is a collection that stores only unique values. Duplicate values are ignored.
let set1 = new Set();
set1.add(10);
set1.add(20);
set1.add(10);
console.log(`set1 = ${set1}`);
console.log("set1 =", set1);
console.log(`set1 size = ${set1.size}`);

//Basic set methods:
//1. add(value): Add a value.
//2. has(value): Check if a value exists.
//3. delete(value): Remove a value.
//4. clear(): Remove all values.
//5. size: Count the values.

let set2 = new Set();
set2.add(10);
set2.add(20);
set2.add(30);
console.log("set2 =", set2);
console.log(`has() = ${set2.has(20)}`);
console.log(`delete() = ${set2.delete(20)}`);
console.log("set2 =", set2);
console.log("set2 .size() =", set2.size);
console.log(`clear() = ${set2.clear()}`);
console.log("set2 .size() =", set2.size);

//Convert Set into Array:
// - Using spread operator(...):
let arr1 = [...set1];
console.log("arr1 =", arr1);
// - Using Array.from()
let arr2 = Array.from(set1);
console.log("arr2 = ", arr2);

//Map:
// - A Map stores data as Key-value pairs.
// - It is like a dictonary: Each key is associated with a value.
let mp1 = new Map();
mp1.set("name", "ksp");
mp1.set("age", 25);
console.log("mp1 =", mp1);

//Basic Map Methods:
//1. set(key,value): Add or update a key-value pair.
//2. get(key): Retrieve a value using its key.
//3. has(key): Check whether a key exists.
//4. delete(key): Remove a key-value pair.
//5. clear(): Remove all entries.
//6. size: Get the number of entries.
let mp2 = new Map();
mp2.set("name", "pnb");
mp2.set("age", 27);
console.log("mp2 =", mp2);
console.log(".get() =", mp2.get("age"));
console.log(".has() =", mp2.has("name"));
console.log(".delete() =", mp2.delete("age"));
console.log("mp2 =", mp2);
console.log(".size", mp2.size);
console.log("mp2 =", mp2);
console.log(".clear() =", mp2.clear());
console.log(".size", mp2.size);
```
