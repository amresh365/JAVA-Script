document.getElementById("grandParent").addEventListener(
  "click",
  (e) => {
    console.log("grandparent is clicked");
  },
  true //Capturing
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("parent is clicked");
  },
  false //bubbling
);

document.getElementById("chield").addEventListener(
  "click",
  (e) => {
    console.log("chield is clicked");
    e.stopPropagation(); //It is Stop the propogation of our events
  },
  true //Capturing
);
//If we write false it indicate the bublling happing And when we write true then means capturing happning
