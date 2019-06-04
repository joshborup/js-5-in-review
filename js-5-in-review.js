// ====================
// Closures:
// ====================
// 1.) function within a function
// 2.) Inner function returned from outer function while still having access to outer functions variables

// example:
// the outer functions scope ENCLOSES (Closure) the inner function
function outer() {
  // outer has one local variable
  var num = 1;
  // inner can access outer's local variable because of scope
  function inner() {
    return num++;
  }
  // outer returns inner uninvoked
  return inner;
}

const closure = outer();

console.group("Closures:");
console.log(closure()); // ==> 1
console.log(closure()); // ==> 2
console.log(closure()); // ==> 3
console.log(closure()); // ==> 4
console.groupEnd("Closures:");
// =====================
//module pattern
// =====================
function modulePatter() {
  // variables and functions here are private and are only accessed through the public functions in the returned object
  var privateVariable = "I am private";

  var privateFunction = function() {
    console.log(privateVariable);
  };

  return {
    // everything returned is public
    changeVar: function(str) {
      privateVariable = str;
    },
    readVar: function() {
      privateFunction();
    }
  };
}
const myMethods = modulePatter();
console.group("Module Pattern:");
console.log(myMethods.readVar()); // "I am private"
myMethods.changeVar("im still private, but i was updated");
console.log(myMethods.readVar()); // "im still private, but i was updated"
console.groupEnd("Module Pattern:");

// ================
// Constructor functions
// ================

function Car(make, model) {
  // 'this' refers to the new object that is being constructed.
  // we are using dot notation to add make & model properties to the new object.

  // this = {}; <--- IMPLIED
  this.make = make;
  this.model = model;
  // return this; <-- IMPLIED

  // The new object gets automatically returned, we don't need to use a return statement.
}

// Using the 'new' operator builds an new instance of an object (blueprint for object  contained in the function)
// 'new' also sets the context for the 'this' keyword.
var mustang = new Car("Ford", "Mustang");

console.group("Constructor Functions:");
console.log(mustang);
console.groupEnd("Constructor Functions:");
// ==============
// Prototypes
// ==============

// Instead of putting the sound function on each and every instance of the car object, we can create it as a protoype method of the Car function. This will allow all car objects to reference the one protoype method.

// [name of contructor].prototype.[name of function] = function() {}
Car.prototype.sound = function() {
  console.log("I am a " + this.make + " and I go vroom vroom!");
};
console.group("Prototypes:");
console.log(mustang.sound());
console.groupEnd("Prototypes:");
