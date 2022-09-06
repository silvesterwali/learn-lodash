const _ = require("lodash");

describe("_.last(array)", () => {
  /**
   * Gets the last element of array.
   */

  it("last: example 1", () => {
    expect(_.last([1, 2, 3])).toBe(3);
  });

  it("last: example 2", () => {
    const peoples = [
      {
        id: 1,
        name: "Silvester",
      },
      {
        id: 2,
        name: "Rama",
      },
    ];
    expect(_.last(peoples)).toEqual({ id: 2, name: "Rama" });
  });
});
