"use strict";
// console.log(this);
const x = function a() {
  //   console.log("Akg");
  console.log(this);
};

// x();

const obj = {
  x: 3,
  f: function () {
    console.log(this.x);
  },
};

// const a = obj.f();

// console.log(a);
//this with arrow function
const obj1 = {
  x: 3,
  f: function () {
    //enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj1.f();
//this inside dom alement the refrence to html element
