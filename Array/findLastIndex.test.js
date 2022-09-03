const _ = require("lodash");

describe(`_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])`, () => {
  /**
   * This method is like _.findIndex except that it iterates
   * over elements of collection from right to left.
   */

  it("findLastIndex: example 1", () => {
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
    expect(_.findLastIndex(peoples, (people) => people.name === "robby")).toBe(
      1
    );
  });

  it("findLastIndex: example 2", () => {
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
      {
        id: 4,
        name: "andika",
        active: false,
      },
    ];

    expect(_.findLastIndex(peoples, { name: "andika", id: 4 })).toBe(3);
  });
});
