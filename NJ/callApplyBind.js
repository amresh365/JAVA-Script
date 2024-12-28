In JavaScript, call, apply, and bind are methods that allow you to control the this context in functions and enhance 
function invocation. Here’s a quick overview of each:

1. call
Usage: function.call(thisArg, arg1, arg2, ...)
Description: Invokes a function with a specified this value and individual arguments. You use call when you want to invoke 
a function immediately and set the context of this.

 2. apply
Usage: function.apply(thisArg, [argsArray])
Description: Similar to call, but the arguments are provided as an array (or an array-like object). This is useful when you
want to pass a variable number of arguments as an array. 

3. bind
Usage: function.bind(thisArg, arg1, arg2, ...)
Description: Creates a new function that, when called, has its this keyword set to a provided value, with a given sequence
of arguments preceding any provided when the new function is called. It does not call the function immediately; instead,
it returns a new function that can be called later.


call is for invoking a function immediately with a specific this context and individual arguments.
apply is for invoking a function immediately with a specific this context, but with arguments as an array.
bind creates a new function with a fixed this.
These methods are particularly useful in scenarios involving event handling, callbacks, and when working with methods that 
can be used as constructors or in a different context than originally intended.

  
const name1 = {
  Fname: "Amresh",
  Lname: "gupta",
  //   printName: function () {
  //     console.log(this.Fname + " " + this.Lname);
  //   },
};
let printName = function (city, state) {
  console.log(this.Fname + " " + this.Lname + " From " + city + " in " + state);
};

// name1.printName();

let name2 = {
  Fname: "amrit",
  Lname: "Kumar",
};
//funtion boororowig--------------------------------------------------------------------
printName.call(name2, "gonda", "UP");
//the only one diffrence in apply we passing the arguments in a array list
printName.apply(name1, ["gonda", "up"]);
//The bind method return a funtion which we can call later with bind the object to print funtion
let func = printName.bind(name1, "mumbai", "maharastra");
console.log(func);
func();

console.log("next line");
// console.log(a);
// let a = 10;
// a++;

// for (var a = 1; a <= 10; a++) {
//   console.log(a);
// }

// console.log(a);

// function b() {}
// b();
function myFunction(a) {
  // console.log(localVar   );
  if (a >= 0) {
    console.log(a);
  }
}

// if (1 > 0) {
//   var b = 100;
//   console.log(b);
// }
myFunction(3);
