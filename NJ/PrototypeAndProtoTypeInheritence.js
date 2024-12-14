const object = {
  name: "Amresh Gupta",
  city: "Gonda",
  getintro: function () {
    console.log(this.name + " From " + this.city);
  },
};

const arr = ["Amresh", "gupta", "And", "Our", "Name"];

let obj2 = {
  gender: "Male",
  age: "20",
};

obj2.__proto__ = object;

function fun() {}

//****************************************************************************************************** */
Function.prototype.myBind = function () {
  console.log("This is My Bind Metohd Added in the Allfuntions prototype");
};

function fun() {}
