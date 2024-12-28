How Throttling Works:
When a throttled function is called, it will execute immediately but will ignore subsequent calls for a 
specified period. After this period, it will allow the next call to execute, and then ignore others again for 
the same duration. Essentially, throttling ensures that a function is only executed at most once in a specified time frame.

Example Use Case:
A common example is keypress or scroll events, where you don't want your function to run on every event but rather 
at intervals (e.g., once every 200 milliseconds).
When to Use Throttling:
Performance Optimization: Reducing the number of times a function runs can help improve performance, especially for event handlers.
Network Requests: To prevent overwhelming a server with requests that trigger too frequently.

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
