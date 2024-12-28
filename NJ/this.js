"use strict";
// console.log(this);
const x = function a() {
  //   console.log("Akg");
  console.log(this);
};

// x();

const obj = {
  x: 3,
  f: function () {
    console.log(this.x);
  },
};

// const a = obj.f();

// console.log(a);
//this with arrow function
const obj1 = {
  x: 3,
  f: function () {
    //enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj1.f();
//this inside dom alement the refrence to html element
******************************************************************************************************************
  In JavaScript, the `this` keyword refers to the context in which a function is executed. Its value can vary depending on how a function is called. Here's a breakdown of its behavior in different scenarios:

### In a Global Context
- When `this` is used in the global scope (not inside any function), it refers to the global object.
  - In browsers, it's the `window` object.
  - In Node.js, it refers to the global object as well, but it behaves slightly differently since Node.js uses modules.

  ```javascript
  console.log(this); // In a browser, this logs the Window object.
  ```

### Inside a Function
- The value of `this` inside a regular function depends on how that function is called.

1. **Regular Function Call:**
   - When a function is called as a standalone function (not as a method of an object), `this` will refer to the 
     global object (in non-strict mode) or `undefined` (in strict mode).

   ```javascript
   function showThis() {
       console.log(this);
   }
   showThis(); // Logs Window (non-strict mode), or undefined (strict mode).
   ```

2. **Method Call:**
   - When a function is called as a method of an object, `this` refers to the object that the method is called on.

   ```javascript
   const obj = {
       name: 'Alice',
       greet: function() {
           console.log(this.name);
       }
   };
   obj.greet(); // Logs "Alice"
   ```

3. **Constructor Function:**
   - When a function is used as a constructor (called with `new`), `this` refers to the newly created object.

   ```javascript
   function Person(name) {
       this.name = name;
   }
   const person = new Person('Bob');
   console.log(person.name); // Logs "Bob"
   ```

### Arrow Functions
Arrow functions do not have their own `this`. Instead, they lexically bind `this` from the surrounding non-arrow function context:

```javascript
const obj = {
    name: 'Charlie',
    greet: function() {
        const arrowFunc = () => {
            console.log(this.name);
        };
        arrowFunc();
    }
};
obj.greet(); // Logs "Charlie"
```

### Event Handlers
In event handlers, `this` refers to the element that triggered the event:

```html
<button id="myButton">Click me</button>
<script>
    document.getElementById("myButton").addEventListener("click", function() {
        console.log(this); // Refers to the button element
    });
</script>
```

### Summary
- The value of `this` depends on the calling context: global, method, constructor, or arrow function.
- Understanding `this` is crucial for working effectively with JavaScript, especially in object-oriented programming and
  when dealing with callbacks or event listeners.

If you have specific scenarios or examples you'd like to explore further, feel free to ask!

