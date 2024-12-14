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
