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
