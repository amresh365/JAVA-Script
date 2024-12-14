// console.dir(document.body);
// console.log(document.body);
// document.body.style.background = "green";
// document.body.childNodes[3].innerText = "Amresh kumar gupta";

// let headings = document.getElementsByClassName("heading");
let headings = document.querySelector("body");
let all = document.querySelectorAll("p");
console.dir(headings);
console.dir(all);
// console.log(headings);

let count = 0;
function labFun() {
  count += 1;
  //alert("Hello there!)");
  document.getElementById("counter").innerHTML = " Click Count: " + count;
  document.getElementById("messageBox").innerHTML += "hello<br>";
}

let div = document.querySelector("div");
console.dir(div);
