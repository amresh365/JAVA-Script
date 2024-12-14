//Event loop
const btan = document.getElementById("btn");
btan.addEventListener("click", function ye() {
  console.log(" Button clicked");
});

document.getElementById("btn").addEventListener("click", function () {
  console.log("button clicked");
});

setTimeout(function () {
  console.log("timer");
}, 1000);

function xyz(callback) {
  console.log("xyz");
  callback();
}
xyz(function y() {
  console.log("y");
});

//HIGHER ORDER FUNTION--------------------------------------------------------------------
// Higher Order Funtion A Funtion it take a funtion input iself And return a funtion itself called as Higher order Funtion

//CALLBACK FUNTION-------------------------------------------------------------------------
//A funtion which is passed into higher order funtion called callback funtion

//this way is not good for any similar logic implementation in multiple funtions
var radias = [2, 4, 5, 6];
function calculateArea(radias) {
  var ans = [];
  for (var i = 0; i < radias.length; i++) {
    ans.push(Math.PI * radias[i] * radias[i]);
  }
  return ans;
}

function calculeCircum(radias) {
  var ans = [];
  for (var i = 0; i < radias.length; i++) {
    ans.push(2 * Math.PI * radias[i]);
  }
  return ans;
}
console.log(calculateArea(radias));

// This is the good way to Implement The Logic
const area = function (radias) {
  return Math.PI * radias * radias;
};

const circumference = function (radias) {
  return 2 * Math.PI * radias;
};

const diameter = function (radias) {
  return 2 * radias;
};

const calculation = function (logic, radias) {
  const ans = [];
  for (var i = 0; i < radias.length; i++) {
    ans.push(logic(radias[i]));
  }
  return ans;
};

Array.prototype.calculation = function (logic) {
  const ans = [];
  for (var i = 0; i < this.length; i++) {
    ans.push(logic(this[i]));
  }
  return ans;
};
console.log(radias.calculation(area));
console.log(calculation(area, radias));
console.log(radias.map(area));

//Map Filter Reduce higher order funtion----------------------------------------------------
const values = [2, 4, 3, 32, 5, 2];
const double = function (value) {
  return value * 2;
};
const output = values.map(double);
console.log(output);
//FILTER-----------------------------------------------------------------

const isOdd = function (x) {
  return x % 2 !== 0;
};
const outpu1 = values.filter(isOdd);
console.log(outpu1);

//REDUCE-------------------------------------------------------------------
// with the help of anonmaus funtion
const outpu2 = values.reduce((acc, val) => {
  acc = acc + val;
  return acc;
}, 0);
console.log(outpu2);

// The main difference between map() and forEach() in JavaScript is that map()
// returns a new array with the results of the function applied to each element,
// while forEach() returns undefined. Both methods iterate over the elements of an
//  array, but map() is used for transforming the elements, while forEach() is used
//  for side effects, such as modifying the original array or logging values.
