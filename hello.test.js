const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello from Montreal from the Office Hours in the terminal!");
  });
});
