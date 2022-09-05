const _ = require("lodash");

describe(`_.initial(array)`, () => {
  /**
   * Gets all but the last element of array.
   */

  it("initial: example 1", () => {
    expect(_.initial([1, 2, 3])).toEqual([1, 2]);
  });

  it("initial: example 2", () => {
    const fruits = [
      {
        id: 1,
        name: "banana",
      },
      {
        id: 2,
        name: "orange",
      },
    ];
    expect(_.initial(fruits)).toEqual([{ id: 1, name: "banana" }]);
  });
});
