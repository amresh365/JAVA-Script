//it is use for control function call
const expensive = () => {
  console.log("Expensive");
};

function throttole(func, time) {
  let flag = true;
  return function () {
    if (flag) {
      func();
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, time);
  };
}
const betterExpensive = throttole(expensive, 5000);
document.getElementById("btn").addEventListener("click", betterExpensive);
