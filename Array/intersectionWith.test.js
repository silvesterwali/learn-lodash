const _ = require("lodash");

describe(`_.intersectionWith([arrays], [comparator])`, () => {
  /**
   * This method is like _.intersection except that it accepts comparator
   * which is invoked to compare elements of arrays. The order and references
   * of result values are determined by the first array. The comparator is invoked
   * with two arguments: (arrVal, othVal).
   */

  it("intersectionWith: example 1", () => {
    var objects = [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
    ];
    var others = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ];
    expect(_.intersectionWith(objects, others, _.isEqual)).toEqual([
      { x: 1, y: 2 },
    ]);
  });

  it("intersectionWith: example 2", () => {
    const peoples = [
      {
        id: 1,
        name: "silvester",
      },
      {
        id: 2,
        name: "rama",
      },
      {
        id: 3,
        name: "adi",
      },
    ];
    const selectedPeople = [
      {
        id: 2,
        name: "rama",
      },
      {
        id: 3,
        name: "adi",
      },
    ];

    expect(_.intersectionWith(peoples, selectedPeople, _.isEqual)).toEqual(
      selectedPeople
    );
  });
});
