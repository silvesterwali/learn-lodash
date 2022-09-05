const _ = require("lodash");

describe(`_.flattenDepth(array, [depth=1])`, () => {
  /**
   * Recursively flatten array up to depth times.
   */

  it(`flattenDepth: example 1`, () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(_.flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
  });

  it("flattenDepth: example 2", () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(_.flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
  });

  it("flattenDepth: example 3", () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(_.flattenDepth(array, 3)).toEqual([1, 2, 3, 4, 5]);
  });
});
