const { add, subtract, multiply, divide } = require("./mathUtil");

function calculate(a, b, operation) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
  }
}

module.exports = { calculate };
