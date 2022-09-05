const _ = require("lodash");
describe("_.head(array)", () => {
  /**
   * Gets the first element of array
   *
   */

  it("head: example 1", () => {
    expect(_.head([1, 2, 3, 4])).toBe(1);
  });

  it("head: example 2", () => {
    const productStocks = [
      {
        id: 1,
        name: "Orange",
        inStock: 200,
      },
      {
        id: 2,
        name: "Mango",
        inStock: 500,
      },
    ];
    expect(_.head(productStocks)).toEqual({
      id: 1,
      name: "Orange",
      inStock: 200,
    });
  });

  it("head: example 3", () => {
    expect(_.head([])).toBeUndefined();
  });
});
