const _ = require("lodash");

describe("_.indexOf(array, value, [fromIndex=0])", () => {
  /**
   * Gets the index at which the first occurrence of value
   * is found in array using SameValueZero for equality comparisons.
   * If fromIndex is negative, it's used as the offset from the end of array.
   */

  it("indexOf: example 1", () => {
    expect(_.indexOf([1, 2, 1, 2], 2)).toBe(1);
  });

  it("indexOf: example 2", () => {
    expect(_.indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
  });
});
