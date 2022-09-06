const _ = require("lodash");

describe(`_.lastIndexOf(array, value, [fromIndex=array.length-1])`, () => {
  /**
   * This method is like _.indexOf except that it iterates over
   *  elements of array from right to left.
   */
  it("lastIndexOf: example 1", () => {
    expect(_.lastIndexOf([1, 2, 1, 2], 2)).toBe(3);
  });
});
