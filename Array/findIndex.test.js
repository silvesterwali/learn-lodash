const _ = require("lodash");

describe(`_.findIndex(array, [predicate=_.identity], [fromIndex=0])`, () => {
  /**
   * This method is like _.find except that it returns the index of the first element
   *  predicate returns truthy for instead of the element itself.
   *
   */

  it("findIndex: example 1", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
        active: false,
      },
      {
        id: 2,
        name: "robby",
        active: true,
      },
      {
        id: 3,
        name: "rama",
        active: false,
      },
    ];

    expect(_.findIndex(peoples, (people) => people.name === "robby")).toBe(1);
  });

  it("findIndex: example 2", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
        active: false,
      },
      {
        id: 2,
        name: "robby",
        active: true,
      },
      {
        id: 3,
        name: "rama",
        active: false,
      },
    ];
    /**
     * short hand _.matches
     */
    expect(_.findIndex(peoples, { name: "robby", active: true })).toBe(1);
  });
});
