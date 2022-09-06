const _ = require("lodash");

describe("_.nth(array, [n=0])", () => {
  /**
   * Gets the element at index n of array.
   * If n is negative, the nth element from the end is returned.
   */

  it("nth: example 1", () => {
    expect(_.nth(["a", "b", "c", "d"], 1)).toBe("b");
  });

  it("nth: example 2", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 2,
        name: "Adi",
      },
      {
        id: 3,
        name: "Rama",
      },
    ];

    const expectedObject = {
      id: 3,
      name: "Rama",
    };
    expect(_.nth(peoples, 2)).toEqual(expectedObject);
  });
});
