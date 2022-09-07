const _ = require("lodash");

describe(`_.pull(array, [values])`, () => {
  /**
   * Removes all given values from array using SameValueZero for equality comparisons.
   *
   * Note: Unlike _.without, this method mutates array.
   *       Use _.remove to remove elements from an array by predicate.
   */

  it(`pull: example 1`, () => {
    var array = ["a", "b", "c", "a", "b", "c"];
    expect(_.pull(array, "a", "c")).toEqual(["b", "b"]);
  });
});
