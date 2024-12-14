let newButn = document.createElement("button");
newButn.innerText = "Click Me";

newButn.style.color = "white";
newButn.style.backgroundColor = "red";

let body = document.querySelector("body");

body.prepend(newButn);
