This also example of Currying

let sum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

const MySum = sum(1)(2)(3);

console.log(MySum);
