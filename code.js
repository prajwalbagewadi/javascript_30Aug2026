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
