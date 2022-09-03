const _ = require("lodash");

describe("flatten", () => {
  /**
   * flatten array a single level deep.
   */

  it("flatten: example 1", () => {
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
    ];

    expect(_.flatten(peoples)).toEqual(expectedResult);
  });
});
