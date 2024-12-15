//localstorage only store string key value pair
// JSON.stringify use for transforn any Object and othor thing in string
// JSON.parse use for get actual data from a String;

const obj = {
  name: "Amresh gupta",
  email: "amknmfk@gmail.com",
};

localStorage.setItem("userInfo", JSON.stringify(obj));

//for geting this item

let info = localStorage.getItem("userInfo");

info = JSON.parse(info);

console.log(info);
