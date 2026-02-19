// Counter app

let count = 0;
const counterText = document.querySelector(".js-counter-text");
const increment = document.querySelector(".js-increment-btn");
const decrement = document.querySelector(".js-decrement-btn");

increment.addEventListener("click", function () {
  count++;
  counterText.textContent = count;
});

decrement.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counterText.textContent = count;
  }
});

const ageInput = document.querySelector(".js-age-input");
const calculateBtn = document.querySelector(".js-calculate-btn");
const resultText = document.querySelector(".js-result");

calculateBtn.addEventListener("click", function () {
  const humanAge = Number(ageInput.value);

  if (humanAge <= 0 || isNaN(humanAge)) {
    resultText.textContent = "Please enter a valid age.";
    return;
  }

  const dogAge = humanAge * 7;

  resultText.textContent = `In dog years, you are ${dogAge} years old.`;
});
