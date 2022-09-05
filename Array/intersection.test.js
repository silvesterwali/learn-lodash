const _ = require("lodash");

describe(`_.intersection([arrays])`, () => {
  /**
   * Creates an array of unique values that are included in
   * all given arrays using SameValueZero for equality comparisons.
   * The order and references of result values are determined by the first array.
   *
   */

  it("intersection: example 1", () => {
    expect(_.intersection([1, 2], [1, 3])).toEqual([1]);
  });
});
