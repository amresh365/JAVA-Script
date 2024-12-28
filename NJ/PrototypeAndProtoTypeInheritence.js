Prototype
In JavaScript, every object has an internal property called [[Prototype]] that refers to another 
object. This prototype object can have its own properties and methods. When you attempt to access a property or method on
an object, if the property or method doesn't exist on that object, JavaScript looks up the prototype chain until it finds 
the property or reaches the end of the chain (which is usually null).
Prototype Inheritance
Prototype inheritance allows one object to inherit properties and methods from another object. This is done through the 
prototype chain. When you create a new object, it can be linked to a parent object, enabling it to use the properties and 
methods of the parent.

Summary
Prototype: A blueprint for objects, allowing shared properties and methods.
Prototype Inheritance: A mechanism through which an object can access properties and methods of another object, establishing 
a parent-child relationship between objects.  
  

  const object = {
  name: "Amresh Gupta",
  city: "Gonda",
  getintro: function () {
    console.log(this.name + " From " + this.city);
  },
};

const arr = ["Amresh", "gupta", "And", "Our", "Name"];

let obj2 = {
  gender: "Male",
  age: "20",
};

obj2.__proto__ = object;

function fun() {}

//****************************************************************************************************** */
Function.prototype.myBind = function () {
  console.log("This is My Bind Metohd Added in the Allfuntions prototype");
};

function fun() {}
