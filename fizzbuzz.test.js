const fizzbuzz = require("./fizzbuzz");
describe("test Fizzbuzz", () => {
  test("test 1 expect 1", () => {
    const result = fizzbuzz.say(1);
    expect(result).toEqual(1); //assert Funtion
  });
});
