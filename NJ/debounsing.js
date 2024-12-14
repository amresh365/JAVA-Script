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
