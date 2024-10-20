const number = document.getElementById("number");
console.log("number", number);

let counter = 0;

initApp();

function initApp() {
  setInterval(() => {
    if (counter === 65) {
      clearInterval();
      return;
    }

    counter++;
    number.innerText = counter + "%";
  }, 1000 / 65);
}
