How It Works:
When an event occurs, a debounced function waits for a specified delay period before executing. If the event occurs
again during this delay, the timer resets, effectively postponing the function call until the event has stopped occurring for the specified time.

Example Use Case:
Imagine you are creating a search input that sends a request to a server as the user types. Without debouncing, 
the server could be bombarded with requests for each keystroke, which is inefficient. With debouncing, the request is sent
only after the user has stopped typing for a certain period (like 300 milliseconds).

Key Benefits:
Improved Performance: Reduces the number of times a function is called, which can improve performance, particularly with frequent events.
Reduced Resource Consumption: Helps to minimize unnecessary resource usage (like API calls or heavy computations) when performing repeated actions.    
    
let counter = 0;
const getData = () => {
  console.log("Feching data......" + counter++);
};

function debaunce(getData, duration) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearInterval(timer);
    timer = setTimeout(() => {
      getData(args, context);
    }, duration);
  };
}

const betterFunction = debaunce(getData, 300);
