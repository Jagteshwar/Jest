//mocking
jest.mock("./mathUtil");
const { add } = require("./mathUtil");
const { calculate } = require("./mockingExample");

describe("calculate", () => {
  test("calls add function with parameters", () => {
    calculate(1, 2, "add");
    expect(add).toHaveBeenCalled();
    expect(add).toHaveBeenCalledWith(1, 2);
  });
});
