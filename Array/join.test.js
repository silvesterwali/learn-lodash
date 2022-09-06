const _ = require("lodash");

describe(`_.join(array, [separator=','])`, () => {
  /**
   * Converts all elements in array into a string separated by separator.
   */

  it("join: example 1", () => {
    expect(_.join(["silvester", "wali"], "-")).toContain("silvester-wali");
  });

  it("join: example 2", () => {
    expect(_.join(["a", "b", "c"], "~")).toEqual("a~b~c");
  });
});
