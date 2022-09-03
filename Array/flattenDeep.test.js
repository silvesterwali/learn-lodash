const _ = require("lodash");

describe("flattenDeep", () => {
  /**
   * Recursively flattens array.
   *
   */

  it("flattenDeep: example 1", () => {
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
      [
        {
          id: 1,
          name: "adi",
          active: false,
        },
        {
          id: 2,
          name: "hendra",
          active: false,
        },
        [
          {
            id: 1,
            name: "hulk",
            active: false,
          },
          {
            id: 2,
            name: "superman",
            active: false,
          },
        ],
      ],
    ];

    const expectedResult = [
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
        id: 1,
        name: "adi",
        active: false,
      },
      {
        id: 2,
        name: "hendra",
        active: false,
      },

      {
        id: 1,
        name: "hulk",
        active: false,
      },
      {
        id: 2,
        name: "superman",
        active: false,
      },
    ];

    expect(_.flattenDeep(peoples)).toEqual(expectedResult);
  });
});
