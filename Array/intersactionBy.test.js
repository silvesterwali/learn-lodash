const _ = require("lodash");

describe(`_.intersectionBy([arrays], [iteratee=_.identity])`, () => {
  /**
   * This method is like _.intersection except that it accepts iteratee
   * which is invoked for each element of each arrays to generate the criterion
   * by which they're compared.
   * The order and references of result values are determined by the first array.
   * The iteratee is invoked with one argument:
   */

  it("intersectionBy", () => {
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
    expect(_.intersectionBy(peoples, selectedPeople, "id")).toEqual(
      selectedPeople
    );
  });
});
