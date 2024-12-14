//closure------------------------------------------------------------------------------------

function x() {
  var a = 7;
  return function y() {
    console.log(a);
  };
}
var z = x();
console.log(z);
z();

//settimeout+clousurs----------------------------------------------------------------------

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("amresh Gupta");
}

x();

function x() {
  for (var i = 1; i <= 5; i++) {
    function y(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    y(i);
  }
  console.log("amresh Gupta");
}

x();

//Promises-----------------------------------------------------------------------------

const URL_user = "https://api.github.com/users/amresh365";

const user = fetch(URL_user);

console.log(user);

user.then(function (data) {
  console.log(data);
});

// creation of promises---------------------------------------------------------------

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validDataCart(cart)) {
      const err = new Error(" Error Missing cart Items");
      reject(err);
    }
    const orderId = "2kjksdk32hd2313";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 9000);
    }
  });
  return pr;
}
const validDataCart = (cr) => {
  return true;
};

const cart = ["Apple", "Pant", "Shirt"];

const promise = createOrder(cart);
promise.then(() => {
  console.log("order succesfull");
});

//they are dummy promise

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" p1 succes");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(" p2 fail");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" p3 succes");
  }, 2000);
});

Promise.all([promise1, promise2, promise3]).then((res) => {
  console.log(res);
});

Promise.allSettled([promise1, promise2, promise3]).then((res) => {
  console.log(res);
});

// Async & Await--------------------------------------------------------------------------
async function getData() {
  return "Amresh";
}
console.log(getData());

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promice1 resolved now");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promice2 resolved now");
  }, 40000);
});

async function handlePromics() {
  console.log("hello frind");
  const res = await p1;
  console.log(res);
  console.log("hi java script");
  const res2 = await p2;
  console.log(res2);
}
handlePromics();

async function handlePromics1() {
  //fetch function give us a promice in the responce
  const data = await fetch("kjdskjdkoo");
  const value = await data.json();
  console.log(value);
  //when fetch get resolve it give us a responce fetch().json =>jsonValue;
}
//for Handling Error othor way
handlePromics1().catch((err) => console.log(err));

//generally people write code
//fetch().then((res)=>responce.json).then((result)=>consol.log(result));

//for Handling Error
async function handlePromics2() {
  try {
    const data = await fetch("kjdskjdkoo");
    const value = await data.json();
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}
handlePromics2();
