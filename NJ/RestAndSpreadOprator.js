const items = ["Amresh", "kumar", "Gupta"];
//In case Of Rest we cominining our remaining items
// const sum = (a,...item) => {
//   console.log(a,item[0],item[1]);
// };
// sum(items);

//In case of spread we combine whole array or Object

// const print = (item1, item2, item3, item4) => {
//   console.log(item1, item2, item3, item4);
// };

// print(items[0], ...items);

//Rest And Spread In case Of Object*******************************************************************

var object = {
  name: "Amresh",
  age: 22,
  hobbies: ["Playing", "Singing", "Sprituality"],
};

const { ...rest } = object;
console.log(rest);

console.log(object.age, { ...object });
var newObj = {
  ...object,
  age: 20,
};
console.log(newObj);
