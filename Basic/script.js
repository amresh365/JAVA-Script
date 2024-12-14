//Template String
let name = "Amresh Kumar gupata";
let age = 22;

// console.log(`THis is my first "${b}"time code ${a}`);

const fullname = (name, age) => {
  return `${name}${age}`;
};
let myName = `this is the heading ${fullname(name, age)}`;

// console.log(myName);
// document.write(myName);

//Arrrow Funtion

let hello = (name, age) => {
  return `Amresh ${name} ${age}`;
};

console.log(hello("Gupta", 25));
let arr = ["Amresh", "gupta"];
