// document.write("hello");

// Do this instead
// setTimeout(() => {
//   console.log("Hello World!");
// }, 500);

// let a = setTimeout(function () {
//   alert("Amreash Gupta");
//   document.write("This Is amresh Kumar Gupta");
// }, 3000);

// let temp = prompt("Enter Your Choce");

// if (temp == "yes") {
//   clearTimeout(a);
// }

// setTimeout(() => {
//   document.write("This Is amresh Kumar Gupta");
// }, 5000);

// setTimeout(function () {
//   alert("Amresh Gupta");
// }, 5000);

// const sum = (a, b) => {
//   console.log("I am running " + (a + b));
// };

// setTimeout(sum, 2000, 1, 3);

let a = setInterval(() => {
  console.log("This is setTimeInterval");
}, 5000);

let temp = prompt("Enter Your Choce");

if (temp == "yes") {
  clearInterval(a);
}
