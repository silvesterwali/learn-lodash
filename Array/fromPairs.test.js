const _ = require("lodash");

describe(`_.fromPairs(pairs)`, () => {
  /**
   * The inverse of _.toPairs; this method returns an object composed from key-value pairs.
   */
  it("fromPairs: example 1", () => {
    expect(
      _.fromPairs([
        ["a", 1],
        ["b", 2],
      ])
    ).toEqual({ a: 1, b: 2 });
  });
});
