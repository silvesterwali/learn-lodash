const _ = require("lodash");

describe("_.fill(array, value, [start=0], [end=array.length])", () => {
  /**
   * Fills elements of array with value from start up to, but not including, end.
   */

  it("fill: example 1", () => {
    const array = [1, 2, 3];
    expect(_.fill(array, "b")).toEqual(["b", "b", "b"]);
  });

  it("fill: example 2", () => {
    expect(_.fill([2, 3], 4)).toEqual([4, 4]);
  });
});
