Bubbling
Definition: Bubbling is the default mode of event propagation in which an event starts from the target element(the element 
that triggered the event) and then propagates upward through the DOM tree to the root.
Example: If you click on a button inside a div, the click event will first trigger on the button, then bubble up to 
the div, and then to its parent elements until it reaches the document.
Capturing
Definition: Capturing (or capture phase) is the opposite of bubbling. In this phase, the event starts at the root of
the DOM and travels down to the target element.
Example: Using the same button example, if you set up an event listener for capturing on the document, it would catch 
the click event before it reaches the button, allowing the document to handle the event first.

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
