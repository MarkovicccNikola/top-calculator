const resultLabel = document.querySelector("label");
const numbers = document.querySelectorAll(".number");
const operatorsContainer = document.querySelector("#operations-container");
const operators = operatorsContainer.children;
const equalsButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");

let toggle = false;
let value1 = null;
let value2 = null;
let operation = null;

function operate() {
  switch (operation) {
    case "+":
      value1 = value1 + value2;
      return value1, (value2 = null);
    case "-":
      value1 = value1 - value2;
      return value1, (value2 = null);
    case "*":
      value1 = value1 * value2;
      return value1, (value2 = null);
    case "/":
      value1 = value1 / value2;
      return value1, (value2 = null);
  }
}

//Let's try with functions.

function printNumber() {
  if (toggle === false) {
    toggle = true;
    resultLabel.innerHTML = this.innerHTML;
  } else if (toggle === true) {
    resultLabel.innerHTML += this.innerHTML;
  }
}

function getValue() {
  if (value1 === null) {
    value1 = Number(resultLabel.innerHTML);
  } else {
    value2 = Number(resultLabel.innerHTML);
  }
}

function printNew() {
  resultLabel.innerHTML = value1;
}

for (i of numbers) {
  i.addEventListener("click", printNumber);
}

for (i of operators) {
  i.addEventListener("click", function () {
    toggle = false;
    getValue();
    operate();
    printNew();
  });
  i.addEventListener("click", function () {
    operation = this.innerHTML;
  });
}

equalsButton.addEventListener("click", function () {
  if (toggle === false) return;
  toggle = false;
  getValue();
  operate();
  printNew();
  operation = null;
});

clearButton.addEventListener("click", () => {
  toggle = false;
  value1 = null;
  value2 = null;
  operation = null;
  resultLabel.innerHTML = null;
});
