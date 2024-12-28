Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that
each take a single argument. This allows for more flexible function calls and can enable partial application of functions



//By bind method

function multiply(a, b) {
  return a * b;
}
const multiplyByTwo = multiply.bind(this, 2);
const ans = multiplyByTwo(5);
console.log(ans);

//By clousure
const multiply1 = (a) => {
  return (b) => {
    console.log(a * b);
  };
};
const multiplyByTwo1 = multiply1(2);
multiplyByTwo1(4);
