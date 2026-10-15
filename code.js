const msg = function sayHello(name) {
  sayHello("ksp");
  return `Hello ${name}`;
};

console.log(`var exp = ${msg("Praj")}`);
//console.log(`fun name call = ${sayHello("Praj")}`); //Reference error
