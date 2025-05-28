const add = jest.fn((a, b) => a + b);
const subtract = jest.fn((a, b) => a - b);
const multiply = jest.fn((a, b) => a * b);
const divide = jest.fn((a, b) => a / b);

module.exports = { add, subtract, multiply, divide };
