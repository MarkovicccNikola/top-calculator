const resultLabel = document.querySelector("label");
const numbers = document.querySelectorAll(".number");
const operatorsContainer = document.querySelector("#operations-container");
const operators = operatorsContainer.children;

let operation = null;
let isSet = false;
let value1 = null;
let value2 = null;

function operate() {
  switch (operation) {
    case "+":
      value1 = value1 + value2;
      return value1, (value2 = null);
    case "-":
      subtract(value1, value2);
      break;
    case "*":
      multiply(value1, value2);
      break;
    case "/":
      divide(value1, value2);
      break;
  }
}

for (i of numbers) {
  i.addEventListener("click", function () {
    if (isSet === false) {
      resultLabel.innerHTML += this.innerHTML;
    } else {
      resultLabel.innerHTML += this.innerHTML;
    }
  });
}

for (i of operators) {
  i.addEventListener("click", function () {
    if (isSet === false) {
      isSet = true;
      operation = this.innerHTML;
      value1 = Number(resultLabel.innerHTML);
      resultLabel.innerHTML = "";
    } else if (isSet === true) {
      value2 = Number(resultLabel.innerHTML);
      operate();
      resultLabel.innerHTML = value1;
      isSet = false;
    }
  });
}

/*Clear the currentInput after clicking any operator button.
Once that is cleared add operator on the screen. Clear the screen completely
when the next number is inputted.
*/

/*I can make an array and then loop through that array. 
And then depending on what the next item is I perform the operation on the previous thing?
This would make sense.
*/
