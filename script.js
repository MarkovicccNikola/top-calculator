function add(num1, num2) {
  return (result = Number(num1) + Number(num2));
}

function subtract(num1, num2) {
  return (result = num1 - num2);
}

function multiply(num1, num2) {
  return (result = num1 * num2);
}

function divide(num1, num2) {
  return (result = num1 / num2);
}

function operate() {
  operation = prompt("Enter operation");
  num1 = prompt("Enter First number");
  num2 = prompt("Enter Second number");

  switch (operation) {
    case "+":
      add(num1, num2);
      console.log(result);
      break;
    case "-":
      subtract(num1, num2);
      console.log(result);
      break;
    case "*":
      multiply(num1, num2);
      console.log(result);
      break;
    case "/":
      divide(num1, num2);
      console.log(result);
      break;
  }
}

operate();
